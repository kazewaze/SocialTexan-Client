// Initial State
const initialState = { userData: '' };

// Actions
const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

// Action Creators
export function updateUserData(userData) {
  return {
    type: UPDATE_USER_DATA,
    payload: userData
  }
}

// export function updateUserId(userID) {
//   return {
//     type: UPDATE_USER_ID,
//     payload: userID
//   };
// }

// export function updatePostId(postID) {
//   return {
//     type: UPDATE_POST_ID,
//     payload: postID
//   };
// }

// Reducer
export default function reducer(state=initialState, action) {
  switch (action.type) {
    case UPDATE_USER_DATA:
      return {
        userData: action.payload
      };
    default:
      return state;
  }
}