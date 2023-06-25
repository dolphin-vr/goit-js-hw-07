import { galleryItems } from './gallery-items.js';
// Change code below this line
const ulRef = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(({preview, original, description})=>
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`).join('');
ulRef.innerHTML = galleryMarkup;

const opts = {
   captionsData: 'alt',
   captionDelay: 250,
};
const lightbox = new SimpleLightbox('.gallery a',opts);

// console.log(galleryItems);
