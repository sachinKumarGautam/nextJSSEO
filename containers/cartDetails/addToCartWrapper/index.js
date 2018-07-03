
import Button from '../../../components/button'
import PincodeDialog from './PincodeDialog'

class AddToCartWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
    this.buttonOnClick = this.buttonOnClick.bind(this)
    this.state = {
      open: false
    }
  }

  buttonOnClick () {
    if (this.props.checkPincodeState.payload.city) {
      this.props.onClick.bind(this)
    } else {
      this.setState({
        open: true
      })
    }
  }

  handleClose () {
    this.setState({
      open: false
    })
  }

  render () {
    const {
      open
    } = this.props

    return (
      <React.Fragment>
        <Button
          variant='raised'
          size='small'
          color='primary'
          onClick={this.buttonOnClick}
          label={'Add To Cart'}
        />
        <PincodeDialog
          open={this.state.open}
          onSubmit={this.props.checkPincodeLoading}
          handleClose={this.handleClose}
        />
      </React.Fragment>
    )
  }
}

export default AddToCartWrapper
