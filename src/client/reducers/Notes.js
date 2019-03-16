export default (state = { notes: '' }, action) => {
  const { type, data } = action;
  switch (type) {
    case 'SET_NOTES':
      return {
        ...state,
        notes: data.notes
      };
    default:
      return state;
  }
};
