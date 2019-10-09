const initialState = {
  showCompleted:true,
  maxVisible: 2,
};

export default (state=initialState, action) => {
  const {payload, type} = action;

  switch(type) {
  default:
    return state;
  }
};

