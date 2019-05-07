// HEADER

//HAMBURGER MENU
const menu = document.querySelector(".burger");
const nav = document.querySelector("nav");
const showMenu = () => {
  nav.classList.toggle("active");
};

menu.addEventListener("click", showMenu);

//MENU NAVIGATION

// services array
// 0: section.about
// 1: section.services
// 2: section.works
// 3: section.contact
const services = [...document.querySelectorAll("section")];

const menuElements = [...document.querySelectorAll(".menuList li")];

menuElements[0].addEventListener("click", () => {
  let topPos = services[0].offsetTop;
  window.scroll(0, topPos);
});

for (let i = 1; i < 4; i++) {
  menuElements[i].addEventListener("click", () => {
    let topPos = services[1].offsetTop;
    window.scroll(0, topPos);
  });
}

menuElements[4].addEventListener("click", () => {
  let topPos = services[2].offsetTop;
  window.scroll(0, topPos);
});

menuElements[5].addEventListener("click", () => {
  let topPos = services[3].offsetTop;
  window.scroll(0, topPos);
});

// console.log(topPos);

// MAIN PAGE BUTTON EVENT
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  let topPos = services[0].offsetTop;
  window.scroll(0, topPos);
});

//SERVICES SECTION EVENTS

const dry = document.querySelector(".dry");
const ozon = document.querySelector(".ozon");
const buy = document.querySelector(".buy");
const dryText = document.querySelector(".dryText");
const ozonText = document.querySelector(".ozonText");
const buyText = document.querySelector(".buyText");

const dryGiveActive = () => {
  dry.classList.remove("deActive");
  dry.classList.add("active");

  dryText.classList.remove("servicesTextDeactive");
  dryText.classList.add("textActive");

  if (
    dry.classList.contains("active") &&
    dryText.classList.contains("textActive")
  ) {
    ozon.classList.remove("active");
    buy.classList.remove("active");

    ozonText.classList.remove("servicesTextActive");
    buyText.classList.remove("servicesTextActive");
  }
};

const ozonGiveActive = () => {
  ozon.classList.add("active");
  ozonText.classList.add("servicesTextActive");
  if (
    ozon.classList.contains("active") &&
    ozonText.classList.contains("servicesTextActive")
  ) {
    dry.classList.add("deActive");
    buy.classList.remove("active");

    dryText.classList.add("servicesTextDeactive");
    buyText.classList.remove("servicesTextActive");
  }
};

const buyGiveActive = () => {
  buy.classList.add("active");

  buyText.classList.add("servicesTextActive");
  if (
    buy.classList.contains("active") &&
    buyText.classList.contains("servicesTextActive")
  ) {
    dry.classList.add("deActive");
    ozon.classList.remove("active");

    dryText.classList.add("servicesTextDeactive");
    ozonText.classList.remove("servicesTextActive");
  }
};

dry.addEventListener("click", dryGiveActive);
ozon.addEventListener("click", ozonGiveActive);
buy.addEventListener("click", buyGiveActive);
