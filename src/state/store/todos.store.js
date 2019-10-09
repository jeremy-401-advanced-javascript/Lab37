const initialState = [];

export default (state=initialState, action) => {
  const {payload, type} = action;
  
  switch(type) {
  case 'ADD':
    console.log('this is the payload: ', payload);
    return [...state, payload];
  case 'DELETE':
    console.log('this is the payload: ', payload);
    return [...state.filter( item => item._id !== action.payload )];
  case 'TOGGLE':
    console.log('this is the payload: ', payload);
    return [...state.map( (item) => item._id === action.payload ? {...item, complete: !item.complete} : item )];
  default:
    return state;

  } 
};

export const add = (todoObject) => {
  console.log(todoObject);
  return {
    type: 'ADD',
    payload: todoObject,
  };
};

export const destroy = (todoObject) => {
  console.log('Inside destroy function: ', todoObject);
  return {
    type: 'DELETE',
    payload: todoObject,
  };
};

export const complete = (todoObject) => {
  console.log('Inside complete function: ', todoObject);

  return {
    type: 'TOGGLE',
    payload: todoObject,
  };
};