import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import octagon from './img/octagon.svg';

const lightbox = new SimpleLightbox('.gallery a', {
  captionData: 'alt',
  captionDelay: 250,
});

const form = document.querySelector('.form-search');
const imagesList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formSearch = event.currentTarget.elements.search.value.trim();
  imagesList.innerHTML = '';

  if (formSearch === '') {
    showMessage(`You entered an empty string!`, '#EF4040', octagon);
    form.reset();
  } else {
    showLoader();
    fetchImages(formSearch)
      .then(res => {
        if (res.hits.length != 0) {
          imagesList.innerHTML = renderImages(res.hits);
          lightbox.refresh();
        } else {
          showMessage(
            `Sorry, there are no images matching 
            your search query. Please, try again!`,
            '#EF4040',
            octagon
          );
        }
        form.reset();
      })
      .catch(error => console.log(error))
      .finally(() => {
        hideLoader();
      });
  }
}

function showMessage(message, backgroundColor, iconUrl) {
  // частково короткі властивості
  iziToast.show({
    message,
    messageColor: 'white',
    backgroundColor,
    closeOnEscape: true,
    position: 'topRight',
    iconUrl,
    iconColor: 'white',
    iconColor: 'white',
    theme: 'dark',
    maxWidth: '350px',
  });
}

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hideLoader() {
  loader.classList.add('is-hidden');
}
