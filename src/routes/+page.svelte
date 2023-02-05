<script>
  import Social from "../components/social.svelte";
  import Canvas from "../components/homepage-canvas.svelte";
  import WorkFeed from "../components/workfeed.svelte";
  import SvelteSeo from "svelte-seo";
  import Follows from "../components/follows.svelte";
  import Contact from "../components/contact.svelte";
</script>

<SvelteSeo
  title="Luke O'Regan - Full Stack Developer | Expertise in Modern Web Development"
  description="Luke O'Regan is a highly skilled Full Stack Developer with extensive experience in modern web development. With a passion for delivering cutting-edge solutions, Luke has a proven track record of delivering projects that exceed client expectations. Contact Luke today to bring your web development vision to life."
/>

<section class="home" id="homeLead">
  <Canvas />

  <div class="container">
    <Social />
    <div class="start-profile">
      <img
        alt="Luke O'Regan"
        src="https://avatars.githubusercontent.com/u/976601?v=4"
        width="100"
        height="100"
        decoding="async"
        data-nimg="1"
        class="img-round grayscale"
        style="color: transparent;"
      />
      <div>
        <h1 class="font-bold text-3xl font-serif">Luke O'Regan</h1>
        <p>Full Stack Developer / Wordpress Expert</p>
      </div>
    </div>

    <p class="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
      Hey, I'm Luke. I'm the a <b>Full Stack Developer</b> I believe in the power
      of great code to build faster and great websites.
    </p>

    <Follows />
  </div>
</section>
<section class="portfolio">
  <div class="container">
    <div class="text-zone">
      <div>
        <header>
          <h2 aria-label="My Portfolio" class="blast-root">My Portfolio</h2>
        </header>
        <p>
          A curated selection of recent projects, personally selected by me,
          completed in collaboration with exceptional individuals from various
          international companies. This is merely a fraction of the complete
          portfolio.
          <br /><br />
          Interested to see some more? Visit
          <a rel="work" href="/portfolio/">my work</a> page.
        </p>
      </div>
    </div>
  </div>
  <WorkFeed />
</section>
<section class="about-me">
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>Me, Myself and I</h2>
        <p>
          Since Adobe Flash was a complete innovation, alongside with CSS 1.0
          and HTML 4.01 as standards of the current web I've been passionate
          about web.
        </p>
        <p>
          For over a decade I had many opportunities to work in a vast spectrum
          of <a rel="skills" href="/skills">web technologies</a> what let me gather
          a significant amount of various experience. Working for companies and individuals
          around the globe I met and learnt from amazing and ambitious people.
        </p>
        <p>
          I currently work remotely for a company from the UK as a Full Stack
          Developer at
          <a href="https://dda.co.uk" target="_blank" rel="noreferrer"
            >Direct Design</a
          >
        </p>
        <p><a href="/about">Find Out More</a></p>
      </div>
      <div class="col">
        <div class="dev-icons">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-plain.svg"
            title="HTML5"
            alt="HTML"
            style="max-width: 100%;"
          /><img
            src="https://github.com/devicons/devicon/raw/master/icons/css3/css3-plain-wordmark.svg"
            title="CSS3"
            alt="CSS"
            style="max-width: 100%;"
          /><img
            src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-plain.svg"
            title="JavaScript"
            alt="JavaScript"
            style="max-width: 100%;"
          /><img
            src="https://camo.githubusercontent.com/17f9ca873217e5946dad04490329d9a7a0e3bc282b3f32849fb8b5f451689c1a/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7068702f7068702d706c61696e2e737667"
            title="php"
            alt="php"
            data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
            style="max-width: 100%;"
          /><img
            src="https://camo.githubusercontent.com/26901b819fb10ef4e2c652aa40e24775247664d84a7597bebb66898a24dddedd/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f736173732f736173732d6f726967696e616c2e737667"
            title="sass"
            alt="sass"
            data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            style="max-width: 100%;"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/svelte/svelte-plain.svg"
            title="Svelte"
            alt="Svelte"
            data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
            style="max-width: 100%;"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/gatsby/gatsby-plain.svg"
            title="Gatsby"
            alt="Gatsby"
            data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
            style="max-width: 100%;"
          />
          <img
            src="https://github.com/devicons/devicon/raw/master/icons/react/react-original-wordmark.svg"
            title="React"
            alt="React"
            style="max-width: 100%;"
          /><img
            src="https://camo.githubusercontent.com/4f06622b58ef8d2b07d366a4296dfa73965f02f2a824563afb0c4cca0665da97/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6772617068716c2f6772617068716c2d706c61696e2e737667"
            title="graphql"
            alt="graphql"
            data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
            style="max-width: 100%;"
          /><img
            src="https://camo.githubusercontent.com/2582ec2237a3a1fbd34e9b57332b72be27a7facb32abe7c2335e5f86e5f457a8/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6d7973716c2f6d7973716c2d6f726967696e616c2e737667"
            title="MySQL"
            alt="MySQL"
            data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            style="max-width: 100%;"
          /><img
            src="https://camo.githubusercontent.com/dc9e7e657b4cd5ba7d819d1a9ce61434bd0ddbb94287d7476b186bd783b62279/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769742f6769742d6f726967696e616c2e737667"
            title="Git"
            alt="Git"
            data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            style="max-width: 100%;"
          /><img
            src="https://camo.githubusercontent.com/df1404f038a8252dec0847c94dcd4f0be9c4491a2682bc601d276f835e8eaa5d/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f626173682f626173682d6f726967696e616c2e737667"
            title="Bash & ZSH"
            alt="Bash & ZSH"
            data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
            style="max-width: 100%;"
          />
        </div>
      </div>
    </div>
  </div>
</section>
<Contact />
