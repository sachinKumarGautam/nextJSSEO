import Button from '../../components/button'

const AddDeliveryAddressButton = (props) => (
  <Button
    size='small'
    variant='outlined'
    color='primary'
    classes={{
      root: props.buttonRoot,
      label: props.buttonLabel
    }}
    style={{float: 'right'}}
    label={'ADD NEW ADDRESS'}
    onClick={props.onClick.bind(this)}
  />
)

export default AddDeliveryAddressButton
