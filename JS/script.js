let menu = document.querySelector("#menu-bars"),
  navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
  console.log(navbar);
});
