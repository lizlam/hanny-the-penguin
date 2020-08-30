<script>
  import { fade } from "svelte/transition";
</script>

<style>
  form {
    font-size: 24px;
  }
  input {
    font-size: 24px;
    height: 26px;
    width: 400px;
    margin: 0.6rem;
    border: none;
    border-bottom: 1px solid rgba(243, 126, 87, 0.1);
    background-color: transparent;
    font-family: auto;
  }
  textarea {
    background-color: transparent;
    border: 1px solid rgb(243, 126, 87, 0.1);
    margin-top: 0.6rem;
  }
  input.submit {
    border: 1px solid rgb(243, 126, 87, 0.1);
    height: 4rem;
    width: 14rem;
  }
  input.submit:hover {
    border: 3px solid rgb(243, 126, 87, 0.3);
  }
</style>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<main in:fade>
  <h1>Contact</h1>

  <form action="post" name="contact" data-netlify="true">
    <div>
      <label for="name">Name:</label>
      <input type="name" name="name" placeholder="" required />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" name="email" placeholder="" required />
    </div>
    <div>
      <label for="message">Message:</label>
      <div>
        <textarea name="message" cols="75px" rows="7" required />
      </div>
    </div>
    <input class="submit" type="submit" value="Send Message" />
  </form>
</main>
