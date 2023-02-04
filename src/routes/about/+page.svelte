<script>
  import SvelteSeo from "svelte-seo";
  import Follows from "../../components/follows.svelte";

  let currentDate = new Date();
  //get my birthdate
  let birthDate = new Date("1988-01-25");
  //calculate the difference in milliseconds
  let difference = currentDate - birthDate;
  //convert the difference to years
  let age = Math.floor(difference / 31536000000);
  //display the age
  currentDate = age;
</script>

<SvelteSeo
  title="About | Luke O'Regan - Full Stack Developer"
  description="I’m a 35-year-old website designer & developer currently the Senior Developer at Direct Design based in Esher."
/>

<section class="about">
  <div class="container">
    <h1 class="font-bold text-3xl font-serif">About Me</h1>
    <p class="my-5 text-neutral-800 dark:text-neutral-200">
      Hi, I'm Luke, also known as <b>Luke</b> &#128514;.
    </p>
    <div
      class="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200"
    >
      <p>
        I’m a {currentDate}-year-old
        <b
          >Senior Developer at <a
            href="https://dda.co.uk"
            target="_blank"
            rel="noreferrer">Direct Design</a
          ></b
        >
        in Esher, where I focus mostly on <b>websites</b> but also animation as well
        as other new media technologies.
      </p>
      <hr />
      <p>
        With a background in photography, design, and coding, I am passionate
        about web development. From simple HTML files to complex JavaScript
        applications, building for the web offers limitless opportunities for
        creativity and self-expression.
      </p>
      <p>
        When I'm not working or drinking copious amounts of coffee &#9749;
        (&#128169), I enjoy playing video games, particularly massive
        multiplayer online games, watching movies, doodling, and spending time
        with my family.
      </p>
    </div>

    <Follows />
  </div>
</section>
