import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import OTPForm from './OTPForm'
import PatientForm from './PatientForm'
import DeliveryForm from './DeliveryForm'

const FormWrapper = (props) => {
  const {
    closeLoginModal,
    toggleForm,
    closeModal,
    onSubmit,
    loginState,
    customerState,
    patientFormState,
    deliveryFormState,
    deliveryDetailsState
  } = props
  switch (props.type) {
    case 'loginForm':
      return <LoginForm
        closeLoginModal={closeLoginModal}
        toggleForm={toggleForm}
        onSubmit={onSubmit}
        loginState={loginState}
      />

    case 'registerForm':
      return <RegisterForm
        closeLoginModal={closeLoginModal}
        toggleForm={toggleForm}
        onSubmit={onSubmit}
        loginState={loginState}
        customerState={customerState}
      />

    case 'OTPForm':
      return <OTPForm
        closeLoginModal={closeLoginModal}
        toggleForm={toggleForm}
        onSubmit={onSubmit}
        loginState={loginState}
      />

    case 'patientForm':
      return <PatientForm
        isCartPage={props.isCartPage}
        closeModal={closeModal}
        onSubmit={onSubmit}
        patientFormState={patientFormState}
        customerId={props.customerState.payload.id}
        mobile={props.customerState.payload.mobile}
      />

    case 'deliveryForm':
      return <DeliveryForm
        isCartPage={props.isCartPage}
        closeModal={closeModal}
        onSubmit={onSubmit}
        deliveryDetailsState={deliveryDetailsState}
        deliveryFormState={deliveryFormState}
        customerId={props.customerState.payload.id}
        mobile={props.customerState.payload.mobile}
      />

    default :
      return <LoginForm
        closeLoginModal={closeLoginModal}
        toggleForm={toggleForm}
      />
  }
}

export default FormWrapper
