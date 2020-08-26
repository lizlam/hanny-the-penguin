<script context="module">
  import { fade } from "svelte/transition";
  export function preload({ params, query }) {
    return this.fetch(`books.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import Card from "../../components/Card.svelte";
  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    ul {
      margin: 0 0 0 0;
      padding-left: 0px;
    }
  }
</style>

<svelte:head>
  <title>Books</title>
</svelte:head>

<main in:fade>
  <h1>Books</h1>

  <ul>
    {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <Card title={post.title} img={post.cover_img} link="books/{post.slug}">
        <li>
          <a rel="prefetch" href="books/{post.slug}">{post.title}</a>

        </li>
      </Card>
    {/each}
  </ul>
</main>
