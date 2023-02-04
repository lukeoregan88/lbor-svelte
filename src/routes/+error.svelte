<script>
  import { page } from "$app/stores";
</script>

<section class="error-404">
  <div class="message">
    <h1>{$page.status}: END OF LINE</h1>
    <p>{$page.error.message}</p>
  </div>
</section>
