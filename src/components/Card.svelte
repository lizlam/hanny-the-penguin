<script>
  import { fade } from "svelte/transition";
  export let title;
  export let link;
  export let img;
</script>

<style>
  .container {
    border: 1px solid rgba(255, 62, 0, 0.1);
    border-radius: 25px;
    padding: 2rem;
    width: 240px;
    margin: 1rem;
  }

  .container:hover {
    border: 1px solid rgb(255, 62, 0);
  }

  img {
    padding-top: 2rem;
  }

  @media (max-width: 400px) {
    .container {
      padding-top: 1rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      width: 190px;
    }
    img {
      padding-top: 1rem;
    }
  }
</style>

<a href={link}>
  <div class="container">
    <h2>{title}</h2>
    <img alt="story cover" src={img} />
  </div>
</a>
