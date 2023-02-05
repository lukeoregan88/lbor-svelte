<script>
  export let data;
  const { posts } = data;
</script>

<section class="blog-feed">
  <div class="container">
    <h1>Blog</h1>

    <div class="posts">
      {#if !posts.length}
        <p>No posts found.</p>
      {:else}
        <p>Here are some of my latest posts.</p>
        {#each posts as post}
          <a href="/blog/{post.slug}/">
            <h2>{post.title.rendered}</h2>
            <date>{post.date}</date>
          </a>
        {/each}
      {/if}
    </div>
  </div>
</section>
