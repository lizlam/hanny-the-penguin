<script>
  import { fade } from "svelte/transition";
</script>

<style>
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
  <h3>Follow the adventures of Hanny the Penguin.</h3>

  <p>Hanny the penguin. What came first? The penguin or the egg?</p>
</main>
