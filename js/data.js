import {getRandomValue} from './util.js';

const COMMENTS_COUNT = 6;
const SIMILAR_PHOTO_DESCRIPTION_COUNT = 25;

const generateIndexes = (count) => [...Array(count).keys()];

const DESCRIPTION_INDEXES = generateIndexes(SIMILAR_PHOTO_DESCRIPTION_COUNT);

const generateRandomUniqueArray = (indexArray) => {
  const arr = indexArray.map((value) => value + 1);
  arr.sort(() => getRandomValue(1, 100) - getRandomValue(1, 100));
  return arr;
};

const IDS = generateRandomUniqueArray(DESCRIPTION_INDEXES);
const URLS = generateRandomUniqueArray(DESCRIPTION_INDEXES).map((idx) => `photos/${idx}.jpg`);
const COMMENT_IDS = generateRandomUniqueArray(generateIndexes(SIMILAR_PHOTO_DESCRIPTION_COUNT * COMMENTS_COUNT));

const DESCRIPTIONS = [
  'Описание1',
  'Описание2',
  'Описание3',
  'Описание4',
  'Описание5',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Владимир',
  'Казимир',
  'Сигизмунд',
  'Демьян',
  'Константин',
  'Владислав',
  'Ерофей',
  'Фадей',
];

const getRandomArrayElement = (elements) => elements[getRandomValue(0, elements.length - 1)];

function createComment(descriptionIdx, commentIdx) {
  return {
    id: COMMENT_IDS[(descriptionIdx + 1) * (commentIdx + 1) - 1],
    avatar: `img/avatar/${getRandomValue(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
}

function createPhotoDescription(idx) {
  return {
    id: IDS[idx],
    url: URLS[idx],
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomValue(15, 200),
    comments: generateIndexes(COMMENTS_COUNT).map((aaa) => createComment(idx, aaa)),
  };
}

const similarPhotoDescription = DESCRIPTION_INDEXES.map(createPhotoDescription);
similarPhotoDescription;

export {similarPhotoDescription};
