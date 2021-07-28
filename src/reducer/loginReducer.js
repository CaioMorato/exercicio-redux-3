const INITIAL_STATE = {
  authenticated: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'AUTHENTICATION':
      return {
        authenticated: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
