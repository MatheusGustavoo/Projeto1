export default function animarScroll() {
  const sections = document.querySelectorAll("nav h1");
  const apartamentos = document.querySelectorAll(".box");

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().bottom;
      if (sectionTop < 0) {
        apartamentos.forEach((ap) => {
          ap.classList.add("ativar-scroll");
          console.log("ativar");
        });
      }
    });
  }

  window.addEventListener("scroll", animaScroll);
}

animarScroll();
