window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  // nav.classList.toggle("mt-12", scrollY < 15);
  nav.classList.toggle("py-20", scrollY < 15);
  nav.classList.toggle("bg-white", scrollY > 15);
  nav.classList.toggle("py-5", scrollY > 15);
  nav.classList.toggle("shadow-md", scrollY > 15);
});
