//HEADER
// 0: <section class="about">​
// 1: <section class="services">​
// 2: <section class="works">​
// 3: <section class="contact"></section>

const sections = [...document.querySelectorAll('section')];
const headerElements = [
  ...document.querySelectorAll('.header__contact--desktop li'),
];
const menuElements = [...document.querySelectorAll('.header__menu li')];
let topPos = sections.map((section) => section.offsetTop - 70);

headerElements.forEach((headerElement, index) => {
  headerElement.addEventListener('click', () => {
    window.scroll(0, topPos[1]);
  });
});

menuElements.forEach((menuElement, index) => {
  menuElement.addEventListener('click', () => {
    if (index === 0) {
      window.scroll(0, topPos[0]);
    } else if (index === 1) {
      window.scroll(0, topPos[1]);
    } else if (index === 2) {
      window.scroll(0, topPos[2]);
    } else if (index === 3) {
      window.scroll(0, topPos[3]);
    }
  });
});

// MAIN PAGE BUTTON EVENT
const button = document.querySelector('.header__arrow');
button.addEventListener('click', () => {
  window.scroll(0, topPos[0]);
});

//MAIN PAGE BOTTOM BUTTONS
const sectionButtons = [...document.querySelectorAll('.buttons li')];
sectionButtons.forEach((sectionButton) => {
  sectionButton.addEventListener('click', () => {
    window.scroll(0, topPos[2]);
  });
});

//SERVICES SECTION EVENTS

const dry = document.querySelector('.services__dry');
const ozon = document.querySelector('.services__ozon');
const buy = document.querySelector('.services__buy');
const dryText = document.querySelector('.services__dryText');
const ozonText = document.querySelector('.services__ozonText');
const buyText = document.querySelector('.services__buyText');

const dryGiveActive = () => {
  dry.classList.add('active');
  dryText.classList.add('servicesTextActive');
  if (
    dry.classList.contains('active') &&
    dryText.classList.contains('servicesTextActive')
  ) {
    buy.classList.add('deActive');
    ozon.classList.remove('active');
    buyText.classList.add('servicesTextDeactive');
    ozonText.classList.remove('servicesTextActive');
  }
};

const ozonGiveActive = () => {
  ozon.classList.add('active');
  ozonText.classList.add('servicesTextActive');
  if (
    ozon.classList.contains('active') &&
    ozonText.classList.contains('servicesTextActive')
  ) {
    buy.classList.add('deActive');
    dry.classList.remove('active');
    buyText.classList.add('servicesTextDeactive');
    dryText.classList.remove('servicesTextActive');
  }
};

const buyGiveActive = () => {
  buy.classList.remove('deActive');
  buy.classList.add('active');
  buyText.classList.remove('servicesTextDeactive');
  buyText.classList.add('servicesTextActive');
  if (buy.classList.contains('active')) {
    ozon.classList.remove('active');
    dry.classList.remove('active');
    ozonText.classList.remove('servicesTextActive');
    dryText.classList.remove('servicesTextActive');
  }
};

dry.addEventListener('click', dryGiveActive);
ozon.addEventListener('click', ozonGiveActive);
buy.addEventListener('click', buyGiveActive);

//SECTION WORKS - GALLERY
const worksImages = [
  'combine1.jpg',
  'combine2.jpg',
  'combine3.jpg',
  'combine4.jpg',
  'combine5.jpg',
  'gym1.jpeg',
  'gym2.jpeg',
  'gym3.jpeg',
  'gym4.jpeg',
  'gym5.jpeg',
  'cabine1.jpg',
  'cabine2.jpg',
  'cabine3.jpg',
  'agri1.jpg',
  'agri2.jpg',
  'agri3.jpg',
  'agri4.jpg',
  'AGD1.jpeg',
  'AGD2.jpeg',
  'AGD3.jpeg',
  'AGD4.jpeg',
  'excavator-fire1.jpeg',
  'excavator-fire2.jpeg',
  'excavator-fire3.jpeg',
  'excavator-fire4.jpeg',
  'RTV1.jpeg',
  'RTV2.jpeg',
  'RTV3.jpeg',
  'RTV4.jpeg',
  'RTV5.jpeg',
  'RTV6.jpeg',
  'RTV7.jpeg',
  'telehandler.jpeg',
];

const leftAngle = document.querySelector('.fa-angle-left');
const rightAngle = document.querySelector('.fa-angle-right');
const image = document.querySelector('.works__gallery--image');
const textWork = document.querySelector('.works__gallery p');

image.style.backgroundImage = `url("img/${worksImages[0]}")`;
textWork.textContent = 'Maszyna rolnicza po wypadku komunikacyjnym';

let index = 0;

//text change function
const changeText = () => {
  if (index >= 0 && index < 5) {
    textWork.textContent = 'Maszyna rolnicza po wypadku komunikacyjnym';
  } else if (index >= 5 && index <= 9) {
    textWork.textContent = 'Wyposażenie siłowni po zalaniu';
  } else if (index >= 10 && index <= 12) {
    textWork.textContent = 'Maszyna po wypadku komunikacyjnym';
  } else if (index >= 13 && index <= 16) {
    textWork.textContent = 'Maszyny rolnicze po pożarze';
  } else if (index >= 17 && index <= 20) {
    textWork.textContent = 'AGD po upadku w magazynie';
  } else if (index >= 21 && index <= 24) {
    textWork.textContent = 'Koparka po pożarze';
  } else if (index >= 25 && index <= 31) {
    textWork.textContent = 'RTV po zalaniu magazynu';
  } else if (index === 32) {
    textWork.textContent = 'Ładowarka teleskopowa po szkodzie komunikacyjnej';
  }
};
//right angle
rightAngle.addEventListener('click', () => {
  if (index < worksImages.length - 1) {
    image.style.backgroundImage = `url("img/${worksImages[++index]}")`;
  } else if (index === worksImages.length - 1) {
    index = 0;
    image.style.backgroundImage = `url("img/${worksImages[index]}")`;
  }
  changeText();
});

//left angle
leftAngle.addEventListener('click', () => {
  if (index > 0) {
    image.style.backgroundImage = `url("img/${worksImages[--index]}")`;
  } else {
    index = worksImages.length - 1;
    image.style.backgroundImage = `url("img/${worksImages[index]}")`;
  }
  changeText();
});

//SECTION CONTACT -BUTTON toTop
const backButton = document.querySelector('.contact__toTop');
backButton.addEventListener('click', () => {
  window.scroll(0, 0);
});
