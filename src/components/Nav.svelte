<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  export let segment;
  let user;

  $: isLoggedIn = user !== null;
  $: showMenu = false;

  onMount(() => {
    user = netlifyIdentity.currentUser();
  });

  const clickHandler = () => {
    netlifyIdentity.open();
  };

  const clickMenu = () => {
    showMenu = !showMenu;
  };

  //netlifyIdentity.on("login", user => {
  //  console.log("login");
  //});

  //netlifyIdentity.on("logout", user => {
  //  console.log("logout");
  //});
</script>

<style>
  .container {
  }
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 0.4em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 0em 0.3em;
    margin: 0.4em;
    display: block;
  }

  .login {
    float: right;
    margin-right: 1em;
  }

  .mobile-nav {
    visibility: hidden;
  }

  @media (max-width: 400px) {
    nav {
      height: 5px;
    }

    a {
      width: fit-content;
    }
    .menu {
      display: block;
    }
    .container {
      visibility: hidden;
      display: flex;
    }
    .mobile-nav {
      visibility: visible;
      height: 40px;
    }
    .mobile-nav-menu {
    }
  }
</style>

<div in:fade class="mobile-nav" on:click={clickMenu}>
  <svg viewBox="0 0 100 80" width="30" height="40">
    <rect width="100" height="7" rx="50px" />
    <rect y="25" width="100" height="7" rx="50px" />
    <rect y="50" width="100" height="7" rx="50px" />
  </svg>
</div>
{#if showMenu}
  <div in:fade class="mobile-nav-menu">
    <a href=".">home</a>
    <a href="about">about</a>
    <a href="books">books</a>
  </div>
{/if}
<nav>
  <div class="container">
    <ul>
      <li class="menu" style="margin-top: 3.75px;">
        <a aria-current={segment === undefined ? 'page' : undefined} href=".">
          home
        </a>
      </li>
      <li class="menu">
        <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
          about
        </a>
      </li>
      <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
      <li class="menu">
        <a
          rel="prefetch"
          aria-current={segment === 'books' ? 'page' : undefined}
          href="books">
          books
        </a>
      </li>

      <!-- Show if logged in -->
      {#if isLoggedIn}
        <li class="menu">
          <a
            aria-current={segment === 'downloads' ? 'page' : undefined}
            href="downloads">
            downloads
          </a>
        </li>
      {/if}
      <!-- End of logged in info -->

      <li class="login menu" data-netlify-identity-menu on:click={clickHandler}>
        <a aria-current={segment === 'login' ? 'page' : undefined} href="#top">
          login
        </a>
      </li>
    </ul>
  </div>
</nav>
