<script>
  import { fade } from "svelte/transition"
  export let title
  export let link
  export let img
</script>

<a href={link}>
  <div class="container">
    <div class="title">
      <h3>{title}</h3>
    </div>
    <img alt="story cover" src={img} />
  </div>
</a>

<style>
  a {
    padding-bottom: 60px;
    background-repeat: unset;
  }

  .container {
    border: 1px solid rgba(243, 126, 87, 0.5);
    border-radius: 25px;
    padding: 2rem;
    width: 240px;
    height: 360px;
    margin: 1rem;
  }

  .container:hover {
    border: 1px solid rgb(255, 62, 0);
  }

  .title {
    height: 75px;
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
