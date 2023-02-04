<script>
  export let data;
  const { posts } = data;
</script>

<section class="blog-feed">
  <div class="container">
    <h1>Blog</h1>
    <p>Here are some of my latest posts.</p>
    <div class="posts">
      {#each posts as post}
        <a href="/blog/{post.slug}/">
          <h2>{post.title.rendered}</h2>
          <date>{post.date}</date>
        </a>
      {/each}
    </div>
  </div>
</section>
