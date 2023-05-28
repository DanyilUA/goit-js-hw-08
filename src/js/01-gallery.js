// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

let galleryList = document.querySelector('.gallery');

let galleryItem = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item"> <a class="gallery_link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
    </li>`;
}).join("");

galleryList.insertAdjacentHTML('beforeend', galleryItem);

let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
});