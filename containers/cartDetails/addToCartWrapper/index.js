import React from 'react'
import Button from '../../../components/button'
import PincodeDialog from '../../../containers/location/pincode/PincodeDialog'

class AddToCartWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.addToCartHandler = this.addToCartHandler.bind(this)
    this.state = {
      open: false
    }
  }

  openPincodeModal () {
    this.setState({
      open: true
    })
  }

  // handleClose = () => (
  //   this.setState({
  //     open: true
  //   })
  // )

  addToCartHandler (event) {
    event.stopPropagation()
    if (this.props.checkPincodeState.payload.pincode) {
      this.props.addToCart()
    } else {
      // this.props.handleOpenPincodeDialog()
      this.openPincodeModal()
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
          open={this.state.open}
          onSubmit={this.props.checkPincodeLoading}
          handleClose={() =>
            this.setState({
              open: false
            })}
          checkPincodeState={this.props.checkPincodeState}
        />
        <PincodeDialog
          open={this.state.open}
          onSubmit={this.props.checkPincodeLoading}
          handleClose={() =>
            this.setState({
              open: false
            })}
          checkPincodeState={this.props.checkPincodeState}
        />
      </React.Fragment>
    )
  }
}

export default AddToCartWrapper
