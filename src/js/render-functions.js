// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('#loader');
const btnLoadMore = document.querySelector('.btn-load-more');

let simpleLightboxnew = new SimpleLightbox('.gallery li a', {
    captions: true,
    captionSelector: 'a img',
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250
});

export function createGallery(images) {

    gallery.insertAdjacentHTML('beforeend', images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<li class="gallery-item">
           <a class="gallery-link" href="${largeImageURL}">
           <img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
           <div class="social-items">
              <div class="field">
              <span class="value" data-likes>Likes</span>
              <span class="label">${likes}</span>
              </div>
              <div class="field">
              <span class="value" data-views>Views</span>
              <span class="label">${views}</span>
              </div>
              <div class="field">
              <span class="value" data-comments>Coments</span>
              <span class="label">${comments}</span>
              </div>
              <div class="field">
              <span class="value" data-downloads>Downloads</span>
              <span class="label">${downloads}</span>
              </div>
           </div>
           </a>
           </li>`
    ).join(""))
                            
    simpleLightboxnew.refresh()
}

export function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
    loader.style.display = "inline-block"
}

export function hideLoader() {
    loader.style.display = "none"
}

export function showLoadMoreButton() {
    btnLoadMore.removeAttribute('hidden')
}

export function hideLoadMoreButton() {
    btnLoadMore.setAttribute('hidden', '')
}