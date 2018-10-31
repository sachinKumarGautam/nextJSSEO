import {
  KEY_ID,
  PAYMENT_EMAIL
} from '../components/constants/paymentConstants'

export default function openRazorpayCheckout (
  cartState,
  customerState,
  verifyPayment,
  onModalDismiss
) {
  const paymentGateway = cartState.payment_gateway

  if (
    paymentGateway &&
    paymentGateway.amount >= 1
  ) {
    const amount = (paymentGateway.amount * 100).toFixed()
    const options = getRazorpayOptions(
      amount,
      paymentGateway,
      customerState,
      cartState,
      verifyPayment,
      onModalDismiss
    )

    const razorpay = new window.Razorpay(options)
    razorpay.open()
  }
}

function getRazorpayOptions (
  amount,
  paymentGateway,
  customerState,
  cartState,
  verifyPayment,
  onModalDismiss
) {
  const options = {
    'key_id': KEY_ID,
    'amount': amount,
    'order_id': paymentGateway.ref_transaction_id,
    'name': customerState.payload.full_name,
    'description': cartState.orderResponse.payload.order_number,
    'image': '/static/images/new-logo.svg',
    'handler': (response) => {
      verifyPayment(response)
    },
    'modal': {
      escape: true,
      'ondismiss': () => {
        onModalDismiss()
      }
    },
    'prefill': {
      'name': customerState.payload.full_name,
      'email': PAYMENT_EMAIL,
      'contact': customerState.payload.mobile,
      'method': paymentGateway.sub_method
    },
    'theme': {
      'color': '#80c241'
    }
  }

  return options
}
