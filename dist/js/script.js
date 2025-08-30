document.querySelectorAll(".item-menu").forEach((link) => {
  link.addEventListener("click", fecharMenu);
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  next.addEventListener("click", () => {
    carousel.scrollBy({ left: 415, behavior: "smooth" });
  });

  prev.addEventListener("click", () => {
    carousel.scrollBy({ left: -415, behavior: "smooth" });
  });
});

const carrossel = document.getElementById("carrosselImagens");
let position = 0;
const speed = 2;

function animar() {
  position -= speed;
  carrossel.style.transform = `translateX(${position}px)`;

  const resetPoint = carrossel.scrollWidth / 2;
  if (Math.abs(position) >= resetPoint) {
    position = 0;
  }

  requestAnimationFrame(animar);
}

// Evita que a transição cause delay no início
carrossel.style.willChange = "transform";
animar();

window.addEventListener("scroll", () => {
  const offset = window.pageYOffset;
  const bg = document.getElementById("parallax-bg");
  bg.style.transform = `translateY(${offset * 0.4}px)`;
});

document.addEventListener("DOMContentLoaded", function () {
  if (!window.gsap) {
    console.error("GSAP não carregou. Verifique o CDN.");
    return;
  }

  // Estados iniciais (evita 'flash' de conteúdo)
  gsap.set(".js-badge", { opacity: 0, y: -30 });
  gsap.set(".js-title", { opacity: 0, y: 30 });
  gsap.set(".js-subtitle", { opacity: 0, scale: 0.96 });
  gsap.set(".js-logo", { opacity: 0, scale: 0.6, rotate: -10 });

  // Timeline de entrada
  gsap
    .timeline({ defaults: { duration: 0.9, ease: "power3.out" } })
    .to(".js-badge", { opacity: 1, y: 0 })
    .to(".js-title", { opacity: 1, y: 0 }, "-=0.4")
    .to(
      ".js-subtitle",
      { opacity: 1, scale: 1, ease: "back.out(1.6)" },
      "-=0.35"
    )
    .to(
      ".js-logo",
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        ease: "elastic.out(1, 0.6)",
        duration: 1.1,
      },
      "-=0.2"
    );
});
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Estado inicial
  gsap.set(".js-img-sec2", { opacity: 0, y: 80 });

  // Animação suave ao entrar no viewport
  gsap.to(".js-img-sec2", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".js-img-sec2",
      start: "top 60%", // inicia quando o topo da imagem chega a 60% da tela
      toggleActions: "play none none none", // anima só 1x
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Estado inicial
  gsap.set(".js-img-sec3", { opacity: 0, y: 80 });

  // Animação suave ao entrar no viewport
  gsap.to(".js-img-sec3", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".js-img-sec3",
      start: "top 60%", // inicia quando o topo da imagem chega a 60% da tela
      toggleActions: "play none none none", // anima só 1x
    },
  });
});

  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".js-card", { opacity: 0, y: 50 });

    gsap.to(".js-card", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2, // efeito cascata
      scrollTrigger: {
        trigger: ".js-card",
        start: "top 75%", // inicia quando 25% do card entrar no viewport
        toggleActions: "play none none none",
      },
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".js-card-2", { opacity: 0, y: 50 });

    gsap.to(".js-card-2", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2, // efeito cascata
      scrollTrigger: {
        trigger: ".js-card-2",
        start: "top 95%", // inicia quando 25% do card entrar no viewport
        toggleActions: "play none none none",
      },
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".js-card-3", { opacity: 0, y: 50 });

    gsap.to(".js-card-3", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2, // efeito cascata
      scrollTrigger: {
        trigger: ".js-card-3",
        start: "top 90%", // inicia quando 25% do card entrar no viewport
        toggleActions: "play none none none",
      },
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".js-card-5", { opacity: 0, y: 50 });

    gsap.to(".js-card-5", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2, // efeito cascata
      scrollTrigger: {
        trigger: ".js-card-5",
        start: "top 90%", // inicia quando 25% do card entrar no viewport
        toggleActions: "play none none none",
      },
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".js-card-4", { opacity: 0, y: 50 });

    gsap.to(".js-card-4", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2, // efeito cascata
      scrollTrigger: {
        trigger: ".js-card-4",
        start: "top 96%", // inicia quando 25% do card entrar no viewport
        toggleActions: "play none none none",
      },
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".js-card-3", { opacity: 0, y: 50 });

    gsap.to(".js-card-3", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2, // efeito cascata
      scrollTrigger: {
        trigger: ".js-card-3",
        start: "top 75%", // inicia quando 25% do card entrar no viewport
        toggleActions: "play none none none",
      },
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Estado inicial dos cards
    gsap.set(".js-method", { opacity: 0, y: 40 });

    // Animação em cascata
    gsap.to(".js-method", {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".js-method",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    // Hover interativo
    document.querySelectorAll(".js-method").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -6,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.inOut" });
      });
    });
  });

   const elements = document.querySelectorAll("[data-animate]");
   const observer = new IntersectionObserver(
     (entries) => {
       entries.forEach((entry, index) => {
         if (entry.isIntersecting) {
           entry.target.style.transitionDelay = `${index * 200}ms`; // atraso por elemento
           entry.target.classList.remove("opacity-0", "translate-y-10");
           observer.unobserve(entry.target);
         }
       });
     },
     { threshold: 0.4 }
   ); // ativa quando 40% do viewport entra

   elements.forEach((el) => observer.observe(el));
   
   