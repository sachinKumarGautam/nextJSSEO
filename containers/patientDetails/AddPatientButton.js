import Button from '../../components/button'

const AddPatientButton = (props) => (
  <Button
    size='small'
    variant='outlined'
    color='primary'
    classes={{
      root: props.buttonRoot,
      label: props.buttonLabel
    }}
    style={{float: 'right'}}
    label={'ADD NEW PATIENT'}
    onClick={props.onClick.bind(this)}
  />
)

export default AddPatientButton
