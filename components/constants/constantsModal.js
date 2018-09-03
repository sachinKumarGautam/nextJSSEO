const initialState = {
  constants: {
    payload: {
      conversion_rate: 0,
      discount_percentage_applied: 0,
      express_delivery_charge: 0,
      express_lcassured_undelivered_cashback: 0,
      invitee_credit_amount: 0,
      inviter_credit_amount: 0,
      maximum_express_lcassured_cashback: 0,
      order_discount_percentage: 0,
      urgent_delivery_assured_reason: {}
    },
    isLoading: false,
    errorState: {
      isError: false,
      error: {}
    }
  }
}

export default initialState