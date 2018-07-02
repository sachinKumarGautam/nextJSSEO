const initialState = {
  payload: {
    customer_wallet: {
      bonus: 0,
      cash: 0,
      refundable_cash: 0,
      customer_id: 0
    },
    customer_wallet_transactions: {
      content: []
    },
    isLoading: false,
    errorState: {
      isError: false,
      error: {}
    }
  }
}

export default initialState
