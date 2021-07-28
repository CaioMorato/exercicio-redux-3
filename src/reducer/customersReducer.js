const INITIAL_STATE = {
  customers: [],
};

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CUSTOMER_ADD':
      return { ...state, customers: [...state.customers, action.payload] };
    default:
      return state;
  }
};

export default registerReducer;
