import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import OTPForm from './OTPForm'

const FormWrapper = (props) => {
  const {
    closeLoginModal,
    toggleForm,
    onSubmit,
    loginState,
    customerState
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

    default :
      return <LoginForm
        closeLoginModal={closeLoginModal}
        toggleForm={toggleForm}
      />
  }
}

export default FormWrapper
