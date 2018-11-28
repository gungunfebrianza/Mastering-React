// Reducer
function counter(state, action) {
  if (state === undefined) {
    return { count: 0 };
  }

  var count = state.count;

  switch (action.type) {
    case 'increase':
      return { count: count + 1 };
    case 'decrease':
      return { count: count - 1 };
    default:
      return state;
  }
}

export default counter;
