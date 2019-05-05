export default function(state, action) {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  if (action.type === 'SET_FLATS') {
    return action.payload;
  } else {
    return state;
  }
}
