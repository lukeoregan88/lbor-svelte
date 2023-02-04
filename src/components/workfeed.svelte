<script>
  import { Fancybox } from "@fancyapps/ui";
  import "@fancyapps/ui/dist/fancybox.css";

  const work = [
    {
      thumbnail: "/work/screencapture-dda-co-uk-thumbnail.png",
      large: "/work/screencapture-dda-co-uk.png",
      title: "Direct Design",
      description:
        "My proudest part of this project was the interactive lead screen. Using native Javascript I built a script that allowed visitors to interact with the background and change the colour on mouse click.",
      website: "https://dda.co.uk",
    },
    {
      thumbnail: "/work/screencapture-lhoteldefrance-fr-thumbnail.png",
      large: "/work/screencapture-lhoteldefrance-fr.png",
      title: "Direct Design",
      description:
        "My proudest part of this project was the interactive lead screen. Using native Javascript I built a script that allowed visitors to interact with the background and change the colour on mouse click.",
      website: "https://dda.co.uk",
    },
    {
      thumbnail: "/work/screencapture-r3garageservices-co-uk-thumbnail.png",
      large: "/work/screencapture-r3garageservices-co-uk.png",
      title: "Direct Design",
      description:
        "My proudest part of this project was the interactive lead screen. Using native Javascript I built a script that allowed visitors to interact with the background and change the colour on mouse click.",
      website: "https://dda.co.uk",
    },
    {
      thumbnail: "/work/screencapture-szandratothmakeup-co-uk-thumbnail.png",
      large: "/work/screencapture-szandratothmakeup-co-uk.png",
      title: "Direct Design",
      description:
        "My proudest part of this project was the interactive lead screen. Using native Javascript I built a script that allowed visitors to interact with the background and change the colour on mouse click.",
      website: "https://dda.co.uk",
    },
    {
      thumbnail: "/work/screencapture-dda-co-uk-thumbnail.png",
      large: "/work/screencapture-dda-co-uk.png",
      title: "Direct Design",
      description:
        "My proudest part of this project was the interactive lead screen. Using native Javascript I built a script that allowed visitors to interact with the background and change the colour on mouse click.",
      website: "https://dda.co.uk",
    },
    {
      thumbnail: "/work/screencapture-lhoteldefrance-fr-thumbnail.png",
      large: "/work/screencapture-lhoteldefrance-fr.png",
      title: "Direct Design",
      description:
        "My proudest part of this project was the interactive lead screen. Using native Javascript I built a script that allowed visitors to interact with the background and change the colour on mouse click.",
      website: "https://dda.co.uk",
    },
    {
      thumbnail: "/work/screencapture-r3garageservices-co-uk-thumbnail.png",
      large: "/work/screencapture-r3garageservices-co-uk.png",
      title: "Direct Design",
      description:
        "My proudest part of this project was the interactive lead screen. Using native Javascript I built a script that allowed visitors to interact with the background and change the colour on mouse click.",
      website: "https://dda.co.uk",
    },
    {
      thumbnail: "/work/screencapture-szandratothmakeup-co-uk-thumbnail.png",
      large: "/work/screencapture-szandratothmakeup-co-uk.png",
      title: "Direct Design",
      description:
        "My proudest part of this project was the interactive lead screen. Using native Javascript I built a script that allowed visitors to interact with the background and change the colour on mouse click.",
      website: "https://dda.co.uk",
    },
  ];

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
</script>

<div class="work-feed">
  {#each work as item}
    <div class="item">
      <a data-fancybox href={item.large} data-caption={item.description}>
        <div class="image">
          <img src={item.thumbnail} alt={item.title} decoding="async" />
        </div>
        <div class="text">
          <h3>{item.title}</h3>
          <p>{item.website}</p>
        </div>
      </a>
    </div>
  {/each}
</div>
