import { store } from '../../redux'

/*
  Mapped object for replacing constants in my url
  use according to your requirement of url and values
*/
export const mappedUrlObject = {
  customer_id: store ? store.getState().customerState.payload.id : 0,
  patient_id: 0,
  order_id: 0,
  cart_id: 0
}
