<script>
  import { fade } from "svelte/transition";
</script>

<style>
  a {
    font-size: 1.25rem;
  }
</style>

<svelte:head>
  <title>Support</title>
</svelte:head>

<main in:fade>
  <h1>Support</h1>

  <p>Support my work by purchasing a PDF.</p>
  <p>The books are always free to read online.</p>

  <div class="gumroad-product-embed" data-gumroad-product-id="ofPlO">
    <a href="https://gumroad.com/l/ofPlO">
      Which Came First, the Penguin or the Egg?
    </a>
  </div>
  <br />
  <div class="gumroad-product-embed" data-gumroad-product-id="vrrGa">
    <a href="https://gumroad.com/l/vrrGa">Do You Speak Butterfly?</a>
  </div>
</main>
