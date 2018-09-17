import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import OTPForm from './OTPForm'
import PatientForm from './PatientForm'
import DeliveryForm from './DeliveryForm'

const FormWrapper = props => {
  const {
    closeLoginModal,
    toggleForm,
    closeModal,
    onSubmit,
    loginState,
    customerState,
    patientFormState,
    deliveryFormState,
    deliveryDetailsState,
    checkPincodeDetailLoading,
    updateAddressFormValue,
    getLocalityDetailListLoading,
    checkPincodeState,
    checkReferralCodeLoading,
    resendButtonClick
  } = props
  switch (props.type) {
    case 'loginForm':
      return (
        <LoginForm
          closeLoginModal={closeLoginModal}
          toggleForm={toggleForm}
          onSubmit={onSubmit}
          loginState={loginState}
          isRegisterClicked={props.isRegisterClicked}
        />
      )

    case 'registerForm':
      return (
        <RegisterForm
          closeLoginModal={closeLoginModal}
          toggleForm={toggleForm}
          onSubmit={onSubmit}
          loginState={loginState}
          customerState={customerState}
          checkReferralCodeLoading={checkReferralCodeLoading}
        />
      )

    case 'OTPForm':
      return (
        <OTPForm
          closeLoginModal={closeLoginModal}
          toggleForm={toggleForm}
          onSubmit={onSubmit}
          loginState={loginState}
          resendButtonClick={resendButtonClick}
          isRegisterClicked={props.isRegisterClicked}
        />
      )

    case 'patientForm':
      return (
        <PatientForm
          isCartPage={props.isCartPage}
          closeModal={closeModal}
          onSubmit={onSubmit}
          patientFormState={patientFormState}
          customerId={props.customerState.payload.id}
          mobile={props.customerState.payload.mobile}
        />
      )

    case 'deliveryForm':
      return (
        <DeliveryForm
          isEdit={props.isEdit}
          isCartPage={props.isCartPage}
          closeModal={closeModal}
          onSubmit={onSubmit}
          deliveryDetailsState={deliveryDetailsState}
          deliveryFormState={deliveryFormState}
          customerId={props.customerState.payload.id}
          mobile={props.customerState.payload.mobile}
          checkPincodeDetailLoading={checkPincodeDetailLoading}
          updateAddressFormValue={updateAddressFormValue}
          getLocalityDetailListLoading={getLocalityDetailListLoading}
          checkPincodeState={checkPincodeState}
          customerState={props.customerState}
        />
      )

    default:
      return (
        <LoginForm closeLoginModal={closeLoginModal} toggleForm={toggleForm} />
      )
  }
}

export default FormWrapper
