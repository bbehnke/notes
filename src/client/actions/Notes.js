const initializeNotes = () => ({
  type: 'INITIALIZE_NOTES'
});

const setNotes = notes => ({
  type: 'SET_NOTES',
  data: {
    notes
  }
});

export default {
  initializeNotes,
  setNotes
};
