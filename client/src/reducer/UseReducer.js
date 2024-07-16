export const initialState = {
  // Your initial state here
  user: JSON.parse(localStorage.getItem('SET_USER')) || null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      localStorage.setItem('SET_USER', JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      localStorage.removeItem('SET_USER');
      return {
        ...state,
        user: null,
      };
    // Add other actions as needed
    default:
      return state;
  }
};
