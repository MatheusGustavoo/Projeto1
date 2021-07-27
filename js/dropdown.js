export default function dropdown() {
  const btn = document.querySelector(".btn-menu");
  const menu = document.querySelectorAll(".menu ul");

  btn.addEventListener("click", active);

  function active() {
    menu.forEach((teste) => {
      teste.classList.toggle("ativar");
    });
  }
}
