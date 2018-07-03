
import Button from '../../../components/button'
import PincodeDialog from './PincodeDialog'

const AddToCartWrapper = (props) => (
  <React.Fragment>
    <Button
      variant='raised'
      size='small'
      color='primary'
      onClick={props.onClick}
      label={'Add To Cart'}
    />
    <PincodeDialog
      open={props.open}
    />
  </React.Fragment>
)

export default AddToCartWrapper
