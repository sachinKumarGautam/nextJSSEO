export function getOrderStatusProgressDetails (state, status) {
  let activeStep = 0
  let viewStatus

  switch (status) {
    case 'DELIVERED':
      activeStep = 3
      viewStatus = 'Delivered'
      break

    case 'RETURNED':
      activeStep = -1
      viewStatus = 'Returned'
      break

    case 'REQUESTED':
      activeStep = -1
      viewStatus = 'Returned'
      break

    case 'RECEIVED':
      activeStep = -1
      viewStatus = 'Returned'
      break

    case 'CANCELLED':
      activeStep = -1
      viewStatus = 'Cancelled'
      break

    default:
      break
  }

  switch (state) {
    case 'NEW':
      activeStep = 0
      viewStatus = 'Processing'
      break

    case 'PROCESSING':
      activeStep = 1
      viewStatus = 'Confirmed'
      break

    case 'PACKED':
      activeStep = 1
      viewStatus = 'Confirmed'
      break

    default:
      break
  }

  if (state === 'SHIPPED' && status !== 'DELIVERED') {
    activeStep = 2
    viewStatus = 'Dispatched'
  }

  return {
    activeStep,
    viewStatus
  }
}
