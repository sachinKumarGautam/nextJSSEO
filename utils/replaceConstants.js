import { store } from '../redux'

export function getReplacedString (originalMsg, obj) {
  let mappedObject = obj
  if (!mappedObject) {
    mappedObject = {
      customer_id: store.getState().customerState.payload.id,
      patient_id: 0,
      order_id: 0,
      cart_id: store.getState().cartState.payload.uid
    }
  }
  let updatedMsg
  let regex = new RegExp(Object.keys(mappedObject).join('|'), 'gi')

  updatedMsg = originalMsg.replace(regex, function (matched) {
    return mappedObject[matched]
  })

  return updatedMsg
}
