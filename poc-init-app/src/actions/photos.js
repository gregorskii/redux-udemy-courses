import API from '../api/index';

const { fetchPhotosWrapped } = API;

export const FETCH_PHOTOS = 'FETCH_PHOTOS';

export function fetchPhotos() {
  const request = fetchPhotosWrapped();

  return {
    type: FETCH_PHOTOS,
    payload: request
  };
}
