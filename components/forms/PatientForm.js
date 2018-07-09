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

import {
  FULL_NAME_REQUIRED,
  MOBILE_REQUIRED,
  GENDER_REQUIRED
} from '../../containers/messages/ValidationMsg'

// Helper styles for demo

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    width: '100%',
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 6
  },
  labelStyle: {
    ...theme.typography.subheading,
    color: theme.palette.customGrey.grey200,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 5
  },
  buttonWrapper: {
    marginTop: theme.spacing.unit * 3,
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 2
  },
  formHelperText: {
    textAlign: 'center'
  }
})

class PatientForm extends React.Component {
  render () {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleSubmit,
      classes,
      onSubmit
    } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <FormControl
          className={classes.formControl}
          aria-describedby='full-name'
          error={errors.full_name && touched.full_name}
        >
          <InputLabel
            className={classes.labelStyle}
            htmlFor='full_name'
          >
            Full Name
          </InputLabel>
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
          <InputLabel
            className={classes.labelStyle}
            htmlFor='gender'
          >
            Gender
          </InputLabel>
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
          <InputLabel
            className={classes.labelStyle}
            htmlFor='age'
          >
            Age
          </InputLabel>
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
          <InputLabel
            className={classes.labelStyle}
            htmlFor='mobile'
          >
            Contact No.
          </InputLabel>
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
}

export default withStyles(styles)(withFormik({
  mapPropsToValues: (props) => {
    return {
      full_name: '',
      gender: '',
      mobile: '',
      age: ''
    }
  },
  validationSchema: Yup.object().shape({
    full_name: Yup.string().required(FULL_NAME_REQUIRED),
    mobile: Yup.number().required(MOBILE_REQUIRED),
    gender: Yup.string().required(GENDER_REQUIRED)
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(props.patientFormState, props.customerId, setSubmitting, props.closeModal, values)
  },
  displayName: 'PatientForm' // helps with React DevTools
})(PatientForm))
