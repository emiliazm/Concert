/* eslint-disable linebreak-style */
const barImage = document.querySelector('.mobile-menu');
const crossMenu = document.querySelector('.close');
const desktopMenu = document.querySelector('.mobile-menu-up');
barImage.addEventListener('click', () => {
  desktopMenu.style.display = 'block';
});
crossMenu.addEventListener('click', () => {
  desktopMenu.style.display = 'none';
});
document.querySelectorAll('.mobile-nav-list-container').forEach((n) => n.addEventListener('click', () => {
  desktopMenu.style.display = 'none';
}));

const bands = [
  {
    class: 'band1',
    image: './images/m-mileyccyrus.jpg',
    name: 'Miley Cyrus',
    description1: 'American singer, songwriter, actress, and television personality.',
    description2: 'Known for her distinctive raspy voice, her music incorporates elements of varied styles and genres, including pop, country pop, hip hop, experimental, and rock.',
  },

  {
    class: 'band2',
    image: './images/m-dojacat.jpg',
    name: 'Doja Cat',
    description1: 'American rapper, singer, songwriter, and record producer.',
    description2: 'Born and raised in Los Angeles, she began making and releasing music on SoundCloud as a teenager.',
  },

  {
    class: 'band2',
    image: './images/m-dojacat.jpg',
    name: 'Camilo Echeverry',
    description1: 'Colombian singer, musician and songwriter.',
    description2: 'His music is generally categorized as Latin pop with a mix of urbano and is noted for his romantic lyrics and soprano voice.',
  },

  {
    class: 'band2',
    image: './images/m-guns.jpg',
    name: 'Guns N Roses',
    description1: 'American hard rock band from Los Angeles, California, formed in 1985.',
    description2: 'Guns N Roses debut album, Appetite for Destruction (1987), reached number one on the Billboard 200 a year after its release, on the strength of the top 10 singles "Welcome to the Jungle", "Paradise City", and "Sweet Child o Mine",',
  },

  {
    class: 'band2',
    image: './images/m-taylorswift.jpg',
    name: 'Tylor Swift',
    description1: 'American singer-songwriter.',
    description2: 'Born and raised in Los Angeles, she began making and releasing music on SoundCloud as a teenager.',
  },

  {
    class: 'band2',
    image: './images/m-dojacat.jpg',
    name: 'Maria Becerra',
    description1: 'Argentinian singer and former YouTuber.',
    description2: 'She has been dubbed as "a leading voice in Argentina\'s urban pop movement".',
  },
];

const title = document.querySelector('.bands .bands-h2');
let inDiv = '';

bands.forEach((singer) => {
  inDiv += `<div class="${singer.class}">
    <img class="singer-img" src="${singer.image}" alt="band">
    <div class="info">
      <h3 class="info-h3">"${singer.name}"</h3>
      <h4 class="info-h4">"${singer.description1}"</h4>
      <p class="info-p">"${singer.description2}"</p>
    </div>
  </div>
  `;
});

const divToBands = document.createElement('div');
divToBands.innerHTML = inDiv;

title.after(divToBands);
