import { galleryItems } from './gallery-items.js';

const ulRef = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(({preview, original, description})=>
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
</a>
</li>`).join('');
ulRef.innerHTML = galleryMarkup;

ulRef.addEventListener('click', largePicView);

function largePicView(ev){
   ev.preventDefault();

   const opts = {
	onShow: (instance) => {
      document.addEventListener('keydown', onEsc);
      function onEsc (ev){         
         if (ev.code==='Escape'){
            instance.close();
            document.removeEventListener('keydown', onEsc);
         }
      }
   },
   };
   const modalPicView = basicLightbox.create(`
   <img src="${ev.target.dataset.source}" alt="${ev.target.alt}">`, opts);

   modalPicView.show();
}

// console.log(galleryMarkup);
