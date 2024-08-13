const initialState = {
    products: [],
    currentPage: 1,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return { ...state, products: action.payload };
      case 'SET_CURRENT_PAGE':
        return { ...state, currentPage: action.payload };
      default:
        return state;
    }
  };
  
  export default productReducer;
  