import {similarPhotoDescription} from './data.js';

const userPhotoContainer =  document.querySelector('.pictures');

const randomUserPhotoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const generatedPhotoArray = similarPhotoDescription();

const photosListFragment = document.createDocumentFragment();

generatedPhotoArray.forEach(({url, likes, comments})  => {
  const photoElement = randomUserPhotoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photosListFragment.appendChild(photoElement);
});

userPhotoContainer.appendChild(photosListFragment);
