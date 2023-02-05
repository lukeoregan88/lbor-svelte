<script>
  import { onMount } from "svelte";
  const work = [
    {
      thumbnail:
        "https://blog.lbor.co.uk/wp-content/uploads/2023/02/screencapture-dda-co-uk-thumbnail.jpg",
      large:
        "https://blog.lbor.co.uk/wp-content/uploads/2023/02/screencapture-dda-co-uk.jpg",
      title: "Direct Design",
      description:
        "My proudest part of this project was the interactive lead screen. Using native Javascript I built a script that allowed visitors to interact with the background and change the colour on mouse click.",
      website: "dda.co.uk",
    },
    {
      thumbnail:
        "https://blog.lbor.co.uk/wp-content/uploads/2023/02/screencapture-lhoteldefrance-fr-thumbnail.jpg",
      large:
        "https://blog.lbor.co.uk/wp-content/uploads/2023/02/screencapture-lhoteldefrance-fr.jpg",
      title: "lhoteldefrance",
      description:
        "It was a pleasure working on the website and getting to know the business and putting together their history on the web.",
      website: "lhoteldefrance.fr",
    },
    {
      thumbnail:
        "https://blog.lbor.co.uk/wp-content/uploads/2023/02/screencapture-r3garageservices-co-uk-thumbnail.jpg",
      large:
        "https://blog.lbor.co.uk/wp-content/uploads/2023/02/screencapture-r3garageservices-co-uk.jpg",
      title: "r3garageservices",
      description:
        "My proudest part of this project was the animating loading screen and integrating the Instagram API to display the businesses latest posts.",
      website: "r3garageservices.co.uk",
    },
    {
      thumbnail:
        "https://blog.lbor.co.uk/wp-content/uploads/2023/02/screencapture-szandratothmakeup-co-uk-thumbnail.jpg",
      large:
        "https://blog.lbor.co.uk/wp-content/uploads/2023/02/screencapture-szandratothmakeup-co-uk.jpg",
      title: "szandratothmakeup",
      description:
        "Szandra Tóth is a makeup artist in London – United Kingdom, who was trained at the Academy of Freelance Makeup and since graduating gained a lot of experience working along with fellow creatives working on numerous beauty and fashion shoots.",
      website: "szandratothmakeup.co.uk",
    },
    {
      thumbnail:
        "https://blog.lbor.co.uk/wp-content/uploads/2023/02/screencapture-adcomms-co-uk-thumbnail.jpg",
      large:
        "https://blog.lbor.co.uk/wp-content/uploads/2023/02/screencapture-adcomms-co-uk.jpg",
      title: "AD Communications",
      description:
        "AD Communications specialises in global B2B communications and marketing to build business brands. With a rich 30-year heritage, they work in a diverse range of B2B technology sectors that include print and graphic arts, packaging, publishing, visual communications, manufacturing, 3D, industrial, construction, and interior design.",
      website: "https://adcomms.co.uk/",
    },
    {
      thumbnail:
        "https://blog.lbor.co.uk/wp-content/uploads/2023/02/screencapture-meech-thumbnail.jpg",
      large:
        "https://blog.lbor.co.uk/wp-content/uploads/2023/02/screencapture-meech.jpg",
      title: "Meech International",
      description:
        "My proudest achievement was integrating a PDF document generation library for client-side usage in pure JavaScript. Each PDF was generated from the pages current html content depending on the language you were viewing it in.",
      website: "https://meech.com",
    },
    {
      thumbnail:
        "https://blog.lbor.co.uk/wp-content/uploads/2023/02/screencapture-videohook-net-thumbnail.jpg",
      large:
        "https://blog.lbor.co.uk/wp-content/uploads/2023/02/screencapture-videohook-net.jpg",
      title: "Videohook",
      description:
        "This was a fun project because it really was a blank canvas. It allowed me to put in the infrastructure but also allowing Andrew to have the necessary tools to then take it forward and expand the business.",
      website: "https://www.videohook.net/",
    },
    {
      thumbnail:
        "https://blog.lbor.co.uk/wp-content/uploads/2023/02/screencapture-woking-ac-uk-thumbnail.jpg",
      large:
        "https://blog.lbor.co.uk/wp-content/uploads/2023/02/screencapture-woking-ac-uk.jpg",
      title: "Woking College",
      description:
        "Woking College is one of the top-performing Sixth Form Colleges in the country providing high-quality education for over 1,400 students.",
      website: "https://woking.ac.uk/",
    },
  ];

  onMount(() => {
    Fancybox.bind("[data-fancybox]", {
      // Your options go here
      animated: false,
      showClass: false,
      hideClass: false,
      Image: {
        zoom: false,
        wheel: false,
        click: false,
        fit: "contain-w",
      },
    });
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css"
  />
  <script
    src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"
  ></script>
</svelte:head>

<div class="work-feed">
  {#each work as item}
    <div class="item">
      <a data-fancybox href={item.large} data-caption={item.description}>
        <div class="image">
          <img
            src={item.thumbnail}
            alt={item.title}
            decoding="async"
            loading="lazy"
          />
        </div>
        <div class="text">
          <h3>{item.title}</h3>
          <p>{item.website}</p>
        </div>
      </a>
    </div>
  {/each}
</div>
