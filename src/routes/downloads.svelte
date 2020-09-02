<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  onMount(() => {
    const user = netlifyIdentity.currentUser();
    console.log(user);
    if (user === null) {
      window.location.replace("https://hanny-the-penguin.netlify.app");
    }
  });
</script>

<svelte:head>
  <title>Downloads</title>
</svelte:head>

<main in:fade>
  <h1>Downloads</h1>
  <ul>
    <p>PDF downloads of Hanny the Penguin.</p>
    <li>
      <a href="/pdfs/which-came-first.pdf">
        Which Came First, the Penguin or the Egg?
      </a>
    </li>
    <li>
      <a href="/pdfs/do-you-speak-butterfly.pdf">Do You Speak Butterfly?</a>
    </li>
  </ul>
</main>
