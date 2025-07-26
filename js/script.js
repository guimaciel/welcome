// LANGUAGE ->
const translations = {
  en: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    subtitle: "Full-stack web developer.",
    "btn-getstarted": "Get started",
    whoami: "Who am I?",
    iam: "I am a highly motivated and progess-focused Web Developer with an insatiable desire to learn and grow in web development. I completed the Web & Mobile App Development course at Cornerstone International Community College of Canada, with a focus on web development. I am currently seeking opportunities in the market, whether it be for frontend, backend, or full stack positions.",
    skills: "Skills",
    "programing-language": "Programming Languages & Tools",
    databases: "Databases",
    projects: "Projects",
    "view-project": "View project",
    proj1:
      "An application to obtain the weather forecast for a specific location, which can be either provided by the user or detected through geolocation. Developed during the Web and Mobile App Development course using HTML, CSS, Javascript, and APIs: OpenWeather and Google to retrieve information about weather and locations.",
    proj2:
      "Clone of the website Rio Brazilian Steakhouse. A brazilian steakhouse based in Vancouver/BC.",
    proj3:
      "Project developed to practice programming logic and DOM manipulation using plain JavaScript. The game offers two interaction modes: local 2-player or player versus computer.",
    address: "Address",
    "address-city": "Uberaba, MG / Brazil",
    phone: "Phone",
    mailaddr: "guilherme@gmaciel.com",
    phonenumber: "+55 34 9 9900-7068",
  },
  pt: {
    about: "Sobre",
    skills: "Habilidades",
    projects: "Projetos",
    contact: "Contato",
    subtitle: "Desenvolvedor Web Full-stack.",
    "btn-getstarted": "Início",
    whoami: "Quem sou eu?",
    iam: "Eu sou um Desenvolvedor Web altamente motivado e focado em progresso, com um desejo insaciável de aprender e crescer na área de desenvolvimento web. Concluí o curso de Desenvolvimento de Aplicações Web e Mobile no Cornerstone International Community College of Canada, com ênfase em desenvolvimento web. Atualmente, estou em busca de oportunidades no mercado, seja para posições de frontend, backend ou full stack.",
    skills: "Habilidades",
    "programing-language": "Linguagens de Programação e Ferramentas",
    databases: "Banco de Dados",
    projects: "Projetos",
    "view-project": "Ver projeto",
    proj1:
      "Uma aplicação para obter a previsão do tempo para uma localização específica, que pode ser fornecida pelo usuário ou detectada por geolocalização. Desenvolvida durante o curso de Desenvolvimento de Aplicações Web e Mobile, utilizando HTML, CSS, Javascript e as APIs OpenWeather e Google para obter informações sobre o clima e localizações.",
    proj2:
      "Clone do site do Rio Brazilian Steakhouse. Uma churrascaria brasileira localizada em Vancouver, BC.",
    proj3:
      "Projeto desenvolvido para praticar lógica de programação e manipulação da DOM com JavaScript puro. O jogo permite dois modos de interação: 2 jogadores locais ou jogador contra o computador",
    address: "Endereço",
    "address-city": "Uberaba, MG / Brasil",
    phone: "Telefone",
    mailaddr: "guilherme@gmaciel.com",
    phonenumber: "+55 34 9 9900-7068",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const languageToggle = document.getElementById("language-toggle");
  const languageText = document.getElementById("language-text");

  languageToggle.addEventListener("change", () => {
    const language = languageToggle.checked ? "en" : "pt";
    localStorage.setItem("preferredLanguage", language);
    languageText.textContent = language === "en" ? "EN" : "PT";
    loadLanguage(language);
  });

  function loadLanguage(language) {
    const translation = translations[language];

    if (translation) {
      document.querySelectorAll("[data-key]").forEach((element) => {
        const key = element.getAttribute("data-key");

        if (translation[key]) {
          element.textContent = translation[key];
        }
      });
    }
  }

  const preferredLanguage = localStorage.getItem("preferredLanguage") || "pt";
  languageToggle.checked = preferredLanguage === "en";
  languageText.textContent = preferredLanguage === "en" ? "EN" : "PT";
  loadLanguage(preferredLanguage);
});
// <- LANGUAGE

// Navbar scroll ->
function toggleScrollClass() {
  var nav = document.querySelectorAll(".navbar")[0];
  window.pageYOffset > 0
    ? nav.classList.add("fade")
    : nav.classList.remove("fade");

  var nav = document.querySelectorAll(".logo")[0];
  window.pageYOffset > 0
    ? nav.classList.add("logo-fade")
    : nav.classList.remove("logo-fade");
}
window.addEventListener("scroll", function () {
  toggleScrollClass();
});
toggleScrollClass();
// <- Navbar scroll

// HIGHLIGHT ANCHOR LINK MENU
// Assuming you have a navigation menu and sections with corresponding IDs
const navLinks = document.querySelectorAll("a.nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      // Adjust offset as needed
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

/// HIDE - SHOW MENU
const menuBtn = document.getElementById("dropdown-btn");
const menu = document.getElementById("menu-options");
menuBtn.addEventListener("mouseover", (e) => {
  const menu = document.getElementById("menu-options");
  menu.classList.remove("hideMenu");
});
menuBtn.addEventListener("mouseleave", (e) => {
  menu.classList.add("hideMenu");
});
menu.addEventListener("mouseover", () => {
  menu.classList.remove("hideMenu");
});
menu.addEventListener("mouseleave", () => {
  menu.classList.add("hideMenu");
});
