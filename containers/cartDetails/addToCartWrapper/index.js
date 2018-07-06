
import Button from '../../../components/button'
import PincodeDialog from '../../../containers/location/pincode/PincodeDialog'

class AddToCartWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.addToCartHandler = this.addToCartHandler.bind(this)
  }

  addToCartHandler (event) {
    event.stopPropagation()
    if (this.props.checkPincodeState.payload.city) {
      this.props.addToCart()
    } else {
      this.props.handleOpenPincodeDialog()
    }
  }

  render () {
    return (
      <React.Fragment>
        <Button
          variant='raised'
          size='small'
          color='primary'
          onClick={this.addToCartHandler}
          label={'Add To Cart'}
        />
        <PincodeDialog
          open={this.props.open}
          onSubmit={this.props.checkPincodeLoading}
          handleClose={this.props.handleClose}
          checkPincodeState={this.props.checkPincodeState}
        />
      </React.Fragment>
    )
  }
}

export default AddToCartWrapper
