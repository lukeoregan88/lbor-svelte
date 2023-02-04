<script>
  import SvelteSeo from "svelte-seo";
  import { onMount } from "svelte";
  export let data;
  let { post } = data;
  post = post[0];

  const content = post.content.rendered;
  const searchURL = "https://platform.twitter.com/widgets.js";

  onMount(() => {
    if (content.indexOf(searchURL) !== -1) {
      twttr.widgets.load();
    }
  });

  const dateString = post.date;
  const timestamp = new Date(dateString).getTime();

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString();
</script>

<SvelteSeo
  title="{post.title.rendered} | Blog | Luke O'Regan - Full Stack Developer"
  description={post.excerpt.rendered}
/>

<section class="post">
  <div class="container">
    <article>
      <div class="post-header">
        <h1>{post.title.rendered}</h1>
        <date>{formattedDate} - {timestamp}</date>
      </div>
      <div class="post-content">
        {@html content}
      </div>
      <div class="post-footer">
        <div class="eol"><p>End of Line</p></div>
      </div>
    </article>
    <sidebar> <a href="/blog/">Back to Blog</a> </sidebar>
  </div>
</section>
