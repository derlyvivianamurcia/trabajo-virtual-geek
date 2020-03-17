'use strict'

const firstDogImage = 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://dog.ceo/api/img/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg';
const thirdDogName = 'Lana';

const listElement = document.querySelector('.list');

document.querySelector('.first').innerHTML = `<h1>${firstDogName}</h1><img src="${firstDogImage}" alt="">`;
document.querySelector('.second').innerHTML = `<h1>${secondDogName}</h1><img src="${secondDogImage}" alt="">`;
document.querySelector('.third').innerHTML = `<h1>${thirdDogName}</h1><img src="${thirdDogImage}" alt="">`;