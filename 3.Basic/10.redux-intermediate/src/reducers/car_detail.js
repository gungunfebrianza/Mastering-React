export default function(state = [], action) {
  switch (action.type) {
    case 'CAR_DETAIL':
      return action.payload;
    default:
      return state;
  }
}
