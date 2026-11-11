// Ano automático no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Menu do celular (abre/fecha)
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const aberto = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", aberto);
});
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => links.classList.remove("open"))
);

// Animação: elementos aparecem ao rolar a página
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Destaca no menu a seção que está na tela
const secoes = document.querySelectorAll("main section[id]");
const menuLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let atual = "";
  secoes.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) atual = s.id;
  });
  menuLinks.forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === "#" + atual)
  );
});
