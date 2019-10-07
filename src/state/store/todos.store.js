const initialState = [];

export default (state=initialState, action) => {
  const {payload, type} = action;
  
  switch(type) {
    case 'ADD':
      console.log('this is the payload: ', payload)
      return [...state, payload];
    case 'DELETE':
      console.log('this is the payload: ', payload)
      return [...state, payload];
    default:
      return state;

  } 
}

export const add = (todoObject) => {
  console.log(todoObject)
  return {

    type: 'ADD',
    payload: todoObject
  }
}