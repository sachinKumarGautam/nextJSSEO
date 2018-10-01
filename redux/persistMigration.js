export const migrations = {
  0: (state) => {
    return {
      ...state,
      cartState: {
        ...state.cartState,
        payload: {
          ...state.cartState.payload,
          shipping_fee: 0
        },
        orderResponse: {
          ...state.cartState.orderResponse,
          payload: {
            ...state.cartState.orderResponse.payload,
            shipping_fee: 0
          }
        }
      },
      orderDetailsState: {
        ...state.orderDetailsState,
        payload: {
          ...state.orderDetailsState.payload,
          shipping_fee: 0
        }
      }
    }
  }
}
