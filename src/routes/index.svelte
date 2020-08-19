<script>
  import { fade } from "svelte/transition";
</script>

<style>
  img {
    filter: opacity(80%);
  }
  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Hanny the Penguin</title>
</svelte:head>

<main in:fade>
  <h1>Hanny the Penguin</h1>
  <h3>Read the adventures of Hanny the Penguin.</h3>
  <img alt="Hanny the Pengin" src="/drawings/hanny.jpg" />
  <p>Hanny the Penguin is a curious one.</p>
</main>
