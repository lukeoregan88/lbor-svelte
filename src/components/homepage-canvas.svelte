<script>
  import { onMount } from "svelte";

  onMount(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let home = document.getElementById("homeLead");
    canvas.width = home.offsetWidth;
    canvas.height = home.offsetHeight;

    const letters = "<>/=\"'&%#@!:;{}()[]";

    window.addEventListener("resize", function () {
      canvas.width = home.offsetWidth;
      canvas.height = home.offsetHeight;
    });

    class Particle {
      constructor(x, y, letter) {
        this.x = x;
        this.y = y;
        this.letter = letter;
        this.velocity = {
          x: (Math.random() - 0.5) * 5,
          y: (Math.random() - 0.5) * 5,
        };
      }

      update(mouse) {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          this.velocity.x += dx * 0.01;
          this.velocity.y += dy * 0.01;
        }

        this.velocity.x *= 0.999;
        this.velocity.y *= 0.999;

        if (Math.abs(this.velocity.x) < 0.5) {
          this.velocity.x = (Math.random() - 0.5) * 10;
        }
        if (Math.abs(this.velocity.y) < 0.5) {
          this.velocity.y = (Math.random() - 0.5) * 10;
        }

        if (this.x >= canvas.width || this.x <= 0) {
          this.velocity.x = -this.velocity.x;
        }
        if (this.y >= canvas.height || this.y <= 0) {
          this.velocity.y = -this.velocity.y;
        }
      }

      draw() {
        ctx.font = "20px sans-serif";
        ctx.fillText(this.letter, this.x, this.y);
      }
    }

    const particles = [];
    for (let i = 0; i < 100; i++) {
      const letter = letters[Math.floor(Math.random() * letters.length)];
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particles.push(new Particle(x, y, letter));
    }

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    canvas.addEventListener("mousemove", (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        particle.update(mouse);
        particle.draw();
      }
      requestAnimationFrame(animate);
    }

    animate();
  });
</script>

<canvas id="canvas" />
