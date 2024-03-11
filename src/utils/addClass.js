const addClass = ( edit, done ) => {
  if (done) {
    return 'completed'
  }
  if (edit) {
    return 'editing'
  }
  return '';
};

export default addClass;
