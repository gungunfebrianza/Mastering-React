export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_LATEST':
      return { ...state, latest: action.payload };

    default:
      return state;
  }
};
