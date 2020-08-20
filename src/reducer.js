export const initialState = {
  basket: [
    {
      id: "1234",
      title: "OnePlus 8",
      price: 899.99,
      image:
        "https://image01.oneplus.net/ebp/202003/30/1-m00-12-6c-rb8lb16bky-azrapaag4rrgwpdm208_840_840.png",
      rating: 5,
    },
  ],
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Invlaid remove");
      }

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
}

export default reducer;
