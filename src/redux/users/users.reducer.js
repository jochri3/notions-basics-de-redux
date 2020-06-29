const INITIAL_STATE = {
  users: [],
  loading: false,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'FETCH_USERS') {
    return { ...state, users: action.data, loading: false };
  } else if (action.type === 'LOADING') {
    return { ...state, loading: true };
  } else {
    return state;
  }
};

export default usersReducer;
