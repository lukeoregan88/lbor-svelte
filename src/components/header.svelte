<script>
  import { page } from "$app/stores";
  const navs = [
    {
      title: "About",
      href: "/about/",
    },
    {
      title: "My Skills",
      href: "/skills/",
    },
    {
      title: "Work",
      href: "/portfolio/",
    },
    {
      title: "Contact",
      href: "/contact/",
    },
    {
      title: "Blog",
      href: "/blog/",
    },
  ];

  $: url = $page.url.href;
  $: routeId = $page.url.pathname;

  let menuOpen = false;

  function handleMenuOpen() {
    menuOpen = true;
    document.body.addEventListener("click", handleMenuClose);
  }
  function handleMenuClose() {
    menuOpen = false;
    document.body.removeEventListener("click", handleMenuClose);
  }
</script>

<header class="site-header">
  <div class="site-logo">
    <a href="/" rel="home"
      ><img
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjguNjMgMjcxLjE5Ij48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwb2x5Z29uIHBvaW50cz0iMTU2Ljg1IDAgMzI4LjYzIDI3MS4xOSAxNzEuNzggMjcxLjE5IDAgMCAxNTYuODUgMCIgc3R5bGU9ImZpbGw6I2ZmY2QwZCIvPjwvZz48L2c+PC9zdmc+"
        class="logo"
        alt="Luke O'Regan - Developer/Designer"
        width="99"
        height="89"
      />
    </a>
  </div>
  <div class="naviagtion">
    <button on:click|stopPropagation={handleMenuOpen}>
      {#if menuOpen}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
          ><path
            d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"
          /></svg
        >
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
          ><path
            d="M0 88C0 74.75 10.75 64 24 64H424C437.3 64 448 74.75 448 88C448 101.3 437.3 112 424 112H24C10.75 112 0 101.3 0 88zM0 248C0 234.7 10.75 224 24 224H424C437.3 224 448 234.7 448 248C448 261.3 437.3 272 424 272H24C10.75 272 0 261.3 0 248zM424 432H24C10.75 432 0 421.3 0 408C0 394.7 10.75 384 24 384H424C437.3 384 448 394.7 448 408C448 421.3 437.3 432 424 432z"
          /></svg
        >
      {/if}
    </button>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <nav class="main-menu" class:menuOpen on:click|stopPropagation={() => {}}>
      {#each navs as { title, href }}
        <a
          {href}
          rel={title}
          class:active={href === "/" ? routeId === "/" : url.includes(href)}
          {title}>{title}</a
        >
      {/each}
    </nav>
  </div>
</header>
