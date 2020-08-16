<script>
  export let segment;
  const clickHandler = () => {
    netlifyIdentity.open();
  };
</script>

<style>
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
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  .login {
    float: right;
    margin-right: 1em;
  }
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === 'home' ? 'page' : undefined} href=".">
        home
      </a>
    </li>
    <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        about
      </a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'books' ? 'page' : undefined}
        href="books">
        books
      </a>
    </li>
    <li class="login" data-netlify-identity-menu on:click={clickHandler}>
      <a aria-current={segment === 'login' ? 'page' : undefined} href="#top">
        login
      </a>
    </li>
  </ul>

</nav>
