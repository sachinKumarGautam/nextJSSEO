import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import OTPForm from './OTPForm'

const FormWrapper = (props) => {
  const { closeLoginModal, toggleForm } = props
  switch (props.type) {
    case 'loginForm':
      return <LoginForm
        closeLoginModal={closeLoginModal}
        toggleForm={toggleForm}
      />

    case 'registerForm':
      return <RegisterForm
        closeLoginModal={closeLoginModal}
        toggleForm={toggleForm}
      />

    case 'OTPForm':
      return <OTPForm
        closeLoginModal={closeLoginModal}
        toggleForm={toggleForm}
      />

    default :
      return <LoginForm
        closeLoginModal={closeLoginModal}
        toggleForm={toggleForm}
      />
  }
}

export default FormWrapper
