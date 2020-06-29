import axios from 'axios';

// export const fetchUsers = async () => {
//   const users = await axios.get('http://jsonplaceholder.typicode.com/users');
//   return {
//     type: 'FETCH_USERS',
//     data: users.data,
//   };
// };

export const fetchUsers = () => {
  return async function (dispatch) {
    dispatch({ type: 'LOADING' });
    const users = await axios.get('http://jsonplaceholder.typicode.com/users');
    dispatch({
      type: 'FETCH_USERS',
      data: users.data,
    });
  };
};
