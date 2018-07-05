import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import OTPForm from './OTPForm'
import PatientForm from './PatientForm'

const FormWrapper = (props) => {
  const {
    closeLoginModal,
    toggleForm,
    onSubmit,
    loginState,
    customerState,
    patientFormState,
    customerId
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
        closeLoginModal={closeLoginModal}
        onSubmit={onSubmit}
        patientFormState={patientFormState}
        customerId = {customerId}
      />

    default :
      return <LoginForm
        closeLoginModal={closeLoginModal}
        toggleForm={toggleForm}
      />
  }
}

export default FormWrapper
