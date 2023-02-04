<script>
  import Social from "../components/social.svelte";
  import Canvas from "../components/homepage-canvas.svelte";
  import WorkFeed from "../components/workfeed.svelte";
  import SvelteSeo from "svelte-seo";
</script>

<SvelteSeo
  title="Luke O'Regan - Full Stack Developer | Expertise in Modern Web Development"
  description="Luke O'Regan is a highly skilled Full Stack Developer with extensive experience in modern web development. With a passion for delivering cutting-edge solutions, Luke has a proven track record of delivering projects that exceed client expectations. Contact Luke today to bring your web development vision to life."
/>

<section class="home" id="homeLead">
  <Canvas />

  <div class="container">
    <Social />
    <h1 class="font-bold text-3xl font-serif">Luke O'Regan</h1>
    <p>Full Stack Developer / Wordpress Expert</p>
    <p class="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
      Hey, I'm Luke. I'm the a <b>Full Stack Developer</b> I believe in the power
      of great code to build faster and great websites.
    </p>

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

    <div class="follow-links">
      <a
        class="twitter-follow-button"
        rel="noopener noreferrer"
        title="follow me on twitter"
        target="_blank"
        href="https://twitter.com/lukeoregan88"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 512 512"
          ><path
            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
          /></svg
        >
        <span>Twitter</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
          ><path
            d="M352 128c0-17.7-14.3-32-32-32L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l146.7 0L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L288 205.3 288 352c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224z"
          /></svg
        >
      </a>
      <a
        class="twitter-follow-button"
        rel="noopener noreferrer"
        title="follow me on Github"
        target="_blank"
        href="https://github.com/lukeoregan88"
        ><svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ><g clip-path="url(#clip0_9914_10)"
            ><path
              d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
              fill="currentColor"
            /></g
          ><defs
            ><clipPath id="clip0_9914_10"
              ><rect width="24" height="24" fill="white" /></clipPath
            ></defs
          ></svg
        >
        <span>GitHub</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
          ><path
            d="M352 128c0-17.7-14.3-32-32-32L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l146.7 0L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L288 205.3 288 352c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224z"
          /></svg
        >
      </a>
    </div>
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
          A small gallery of recent projects chosen by me. I've done them all
          together with amazing people from companies around the globe. It's
          only a drop in the ocean compared to the entire list.
          <br />
          Interested to see some more? Visit
          <a rel="work" href="/portfolio/">my work</a> page.
        </p>
      </div>
      <div>
        <a rel="work" href="/portfolio/" class="flat-button">
          <div>
            <span class="bg" />
            <span class="base" />
            <span class="text">See more!</span>
          </div>
        </a>
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
