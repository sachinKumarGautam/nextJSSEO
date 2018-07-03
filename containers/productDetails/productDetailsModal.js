const initialState = {
  payload: {
    productDetails: {
      payload:{}
    },
    // productDetailsSummary: {
    //   payload: {}
    // }
  },
  isLoadingGetProductDetails: false,
  errorStateGetProductDetails: {
    isError: false,
    error: null
  },
  isLoadingGetProductDetailsSummary: false,
  errorStateGetProductDetailsSummary: {
    isError: false,
    error: null
  }

}

export default initialState
