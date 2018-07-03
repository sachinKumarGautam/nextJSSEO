import { withFormik } from 'formik'
import * as Yup from 'yup'

import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Button from '../../components/button'
import { withStyles } from '@material-ui/core/styles'

// Helper styles for demo

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    width: '100%'
  },
  buttonWrapper: {
    marginTop: theme.spacing.unit * 3.5,
    width: theme.spacing.unit * 22,
    height: theme.spacing.unit * 4.25,
    margin: '0 auto'
  },
  formHelperText: {
    textAlign: 'center'
  }
})

const PatientForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    classes
  } = props
  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        className={classes.formControl}
        aria-describedby='full-name'
        error={errors.full_name && touched.full_name}
      >
        <InputLabel htmlFor='full_name'>Full Name</InputLabel>
        <Input
          id='full_name'
          type='text'
          onChange={handleChange}
          value={values.full_name}
        />
        {
          errors.full_name && touched.full_name &&
          <FormHelperText
            id='full_name'
          >
            {errors.full_name}
          </FormHelperText>
        }
      </FormControl>
      <FormControl
        className={classes.formControl}
        aria-describedby='gender'
        error={errors.gender && touched.gender}
      >
        <InputLabel htmlFor='gender'>Gender</InputLabel>
        <Select
          value={values.gender}
          onChange={handleChange}
          inputProps={{
            name: 'gender',
            id: 'gender',
            placeholder: 'Gender'
          }}
        >
          <MenuItem value=''>
            <em>Gender</em>
          </MenuItem>
          <MenuItem value={'male'}>Male</MenuItem>
          <MenuItem value={'femlae'}>Female</MenuItem>
          <MenuItem value={'others'}>Others</MenuItem>
        </Select>
        {
          errors.gender && touched.gender &&
          <FormHelperText
            id='gender'
          >
            {errors.gender}
          </FormHelperText>
        }
      </FormControl>
      <FormControl
        className={classes.formControl}
        aria-describedby='age'
        error={errors.age && touched.age}
      >
        <InputLabel htmlFor='age'>Age</InputLabel>
        <Input
          id='age'
          type='text'
          onChange={handleChange}
          value={values.age}
        />
        {
          errors.age && touched.age &&
          <FormHelperText
            id='age'
          >
            {errors.age}
          </FormHelperText>
        }
      </FormControl>
      <FormControl
        className={classes.formControl}
        aria-describedby='mobile'
        error={errors.mobile && touched.mobile}
      >
        <InputLabel htmlFor='mobile'>Contact No.</InputLabel>
        <Input
          id='mobile'
          type='text'
          onChange={handleChange}
          value={values.mobile}
        />
        {
          errors.mobile && touched.mobile &&
          <FormHelperText
            id='mobile'
          >
            {errors.mobile}
          </FormHelperText>
        }
      </FormControl>
      <div className={classes.buttonWrapper}>
        <Button
          type='submit'
          isloading={isSubmitting}
          variant='raised'
          color='primary'
          label={'Save'}
        />
      </div>
    </form>
  )
}

export default withStyles(styles)(withFormik({
  mapPropsToValues: (props) => {
    return {
      full_name: '',
      gender: '',
      mobile: '',
      age: '',
    }
  },
  validationSchema: Yup.object().shape({
    full_name: Yup.string().required('Please enter your full name'),
    mobile: Yup.number().required('Please enter contact no.'),
    gender: Yup.string().required('Gender is required')
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(props.customerState, props.closeLoginModal, setSubmitting, values)
  },
  displayName: 'PatientForm' // helps with React DevTools
})(PatientForm))
