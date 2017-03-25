import store from '../store';
import ACTIONS from '../actions';
import API from '../api/index';

const { appInit } = ACTIONS;
const { fetchUsersWrapped, fetchPhotosWrapped } = API;

export default () => {
  return fetchUsersWrapped()
    .then(
      (usersResult) => {
        return fetchPhotosWrapped()
          .then(
            (photosResult) => {
              return store.dispatch(
                appInit({
                  users: usersResult.data,
                  photos: photosResult.data
                })
              );
            }
          )
        ;
      }
    )
  ;
}
