<script>
  import { onMount } from "svelte";
  import { fade, fly, slide } from "svelte/transition";
  export let segment;
  let user;

  $: isLoggedIn = user !== null;
  $: showNavMenu = false;

  onMount(() => {
    user = netlifyIdentity.currentUser();
  });

  const clickHandler = () => {
    netlifyIdentity.open();
    netlifyIdentity.on("login", user => {
      isLoggedIn = true;
      console.log(user.user_metadata.full_name);
    });
    netlifyIdentity.on("logout", user => {
      isLoggedIn = false;
    });
  };

  const clickMenu = () => {
    showNavMenu = !showNavMenu;
  };
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

  @media (max-width: 480px) {
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

<div class="mobile-nav" on:click={clickMenu}>
  <svg viewBox="0 0 100 80" width="30" height="40">
    <rect width="100" height="7" rx="50px" />
    <rect y="25" width="100" height="7" rx="50px" />
    <rect y="50" width="100" height="7" rx="50px" />
  </svg>
</div>
{#if showNavMenu}
  <div class="mobile-nav-menu">
    <a transition:slide fade:out on:click={clickMenu} href=".">home</a>
    <a transition:slide fade:out on:click={clickMenu} href="about">about</a>
    <a transition:slide fade:out on:click={clickMenu} href="books">books</a>
    <a transition:slide fade:out on:click={clickMenu} href="store">store</a>
  </div>
{/if}
<nav fade:in>
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
      <li class="menu">
        <a
          aria-current={segment === 'contact' ? 'page' : undefined}
          href="contact">
          contact
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
      <li class="menu">
        <a
          rel="prefetch"
          aria-current={segment === 'store' ? 'page' : undefined}
          href="store">
          store
        </a>
      </li>

      <!--
      {#if isLoggedIn}
        <li class="menu">
          <a
            aria-current={segment === 'downloads' ? 'page' : undefined}
            href="downloads">
            downloads
          </a>
        </li>
      {/if}

      <li class="login menu" data-netlify-identity-menu on:click={clickHandler}>
        <a aria-current={segment === 'login' ? 'page' : undefined} href="#top">
          {isLoggedIn ? `logout` : `login`}
        </a>
      </li>
    </ul>
    -->
    </ul>
  </div>
</nav>
