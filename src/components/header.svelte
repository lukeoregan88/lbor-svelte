<script>
  import { page } from "$app/stores";
  const navs = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "My Skills",
      href: "/skills",
    },
    {
      title: "Work",
      href: "/portfolio",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];

  $: url = $page.url.href;
  $: routeId = $page.url.pathname;
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
  <div>
    <nav class="main-menu">
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
