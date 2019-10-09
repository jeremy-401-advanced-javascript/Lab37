const initialState = [];

export default (state=initialState, action) => {
  const {payload, type} = action;

  switch(type) {
  case 'ADD':
    return [...state, payload];
  case 'DELETE':
    return [...state.filter( item => item._id !== action.payload )];
  case 'TOGGLE':
    return [...state.map( (item) => item._id === action.payload ? {...item, complete: !item.complete} : item )];
  default:
    return state;

  }
};

export const add = (todoObject) => {
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
