import { store } from '../redux'

export function getReplacedString (originalMsg, obj) {
  let mappedObject = obj
  if (!mappedObject) {
    mappedObject = {
      customer_id: store ? store.getState().customerState.payload.id : 0,
      patient_id: 0,
      order_id: store ? store.getState().cartState.orderResponse.payload.order_number : 0,
      cart_id: store ? store.getState().cartState.payload.uid : 0
    }
  }
  let updatedMsg
  let regex = new RegExp(Object.keys(mappedObject).join('|'), 'gi')

  updatedMsg = originalMsg.replace(regex, function (matched) {
    return mappedObject[matched]
  })

  return updatedMsg
}
