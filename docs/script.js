// HEADER

//HAMBURGER MENU
const menu = document.querySelector(".burger");
const nav = document.querySelector("nav");
const showMenu = () => {
  nav.classList.toggle("active");
  menu.classList.toggle("close");
};

menu.addEventListener("click", showMenu);

//MENU NAVIGATION

// services array
// 0: section.buttons
// 1: section.about
// 2: section.services
// 3: section.works
// 4: section.contact
const mainPage = document.querySelector("header");
const services = [...document.querySelectorAll("section")];
const menuElements = [...document.querySelectorAll(".menuList li")];

let topPos = services.map((service) => service.offsetTop - 60);

menuElements.forEach((menuElement, index) => {
  menuElement.addEventListener("click", () => {
    if (index === 0) {
      window.scroll(0, 0);
    } else if (index === 1) {
      window.scroll(0, topPos[1]);
    } else if (index === 2 || index === 3 || index === 4) {
      window.scroll(0, topPos[2]);
    } else if (index === 5) {
      window.scroll(0, topPos[3]);
    } else if (index === 6) {
      window.scroll(0, topPos[4]);
    }

    nav.classList.remove("active");
  });
});

// MAIN PAGE BUTTON EVENT
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  let topPos = services[0].offsetTop;
  window.scroll(0, topPos);
});

//MAIN PAGE BOTTOM BUTTONS

const sectionButtons = [...document.querySelectorAll(".buttons li")];

sectionButtons.forEach((sectionButton) => {
  sectionButton.addEventListener("click", () => {
    window.scroll(0, topPos[2]);
  });
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

//SECTION WORKS - GALLERY

const worksImages = [
  "combine1.jpg",
  "combine2.jpg",
  "combine3.jpg",
  "combine4.jpg",
  "combine5.jpg",
  "gym1.jpeg",
  "gym2.jpeg",
  "gym3.jpeg",
  "gym4.jpeg",
  "gym5.jpeg",
  "cabine1.jpg",
  "cabine2.jpg",
  "cabine3.jpg",
  "agri1.jpg",
  "agri2.jpg",
  "agri3.jpg",
  "agri4.jpg"
];

const leftAngle = document.querySelector(".fa-angle-left");
const rightAngle = document.querySelector(".fa-angle-right");
const image = document.querySelector(".image");
const textWork = document.querySelector(".gallery p");

image.style.backgroundImage = `url("img/${worksImages[0]}")`;
textWork.textContent = "Odzysk części po naprawie kombajnu";

let index = 0;

//text change function
const changeText = () => {
  if (index >= 0 && index < 5) {
    textWork.textContent = "Odzysk części po naprawie kombajnu";
  } else if (index >= 5 && index <= 9) {
    textWork.textContent = "Renowacja siłowni po zalaniu";
  } else if (index >= 10 && index <= 12) {
    textWork.textContent = "Odzysk części po naprawie koparki";
  } else if (index >= 13 && index <= 16) {
    textWork.textContent = "Oddzysk części maszyn po pożarze ";
  }
};

//right angle
rightAngle.addEventListener("click", () => {
  if (index < worksImages.length - 1) {
    image.style.backgroundImage = `url("img/${worksImages[++index]}")`;
  } else if (index === worksImages.length - 1) {
    index = 0;
    image.style.backgroundImage = `url("img/${worksImages[index]}")`;
  }
  changeText();
});

//left angle
leftAngle.addEventListener("click", () => {
  if (index > 0) {
    image.style.backgroundImage = `url("img/${worksImages[--index]}")`;
  } else {
    index = worksImages.length - 1;
    image.style.backgroundImage = `url("img/${worksImages[index]}")`;
  }
  changeText();
});

//SECTION CONTACT -BUTTON toTop

document.querySelector(".toTop").addEventListener("click", () => {
  window.scroll(0, 0);
});
