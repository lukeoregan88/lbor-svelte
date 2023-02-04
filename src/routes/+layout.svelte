<script>
  import "../app.scss";
  import Header from "../components/header.svelte";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Header />

<main>
  <slot />
</main>
