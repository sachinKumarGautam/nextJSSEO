import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Fade from '@material-ui/core/Fade'

import Form from '../../components/forms/index'

import ActivityIndicator from '../../components/activityIndicator/index'
import SnackbarErrorMessage from '../../components/activityIndicator/error/SnackbarErrorMessage'

const styles = theme => ({
  paper: {
    width: '100%',
    maxWidth: theme.spacing.unit * 59,
    borderRadius: theme.spacing.unit / 2,
    backgroundColor: theme.palette.common.white,
    border: `solid 1px ${theme.palette.customGrey.grey250}`,
    minHeight: theme.spacing.unit * 22
  },
  dialogTitle: {
    ...theme.typography.subheading,
    textAlign: 'center',
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold
  }
})

function Transition (props) {
  return <Fade {...props} />
}

class PatientDetailForm extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div>
        <ActivityIndicator
          isError={this.props.patientFormState.addNewPatient.errorState.isError}
          ErrorComp={
            <SnackbarErrorMessage
              error={this.props.globalErrorState}
              resetState={this.props.resetPatientForm}
            />
          }
          bottomError
        >
          <Dialog
            open={this.props.openPatientFormDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.props.closePatientFormModal}
            aria-labelledby='patient-detail-form'
            classes={{
              paper: classes.paper
            }}
          >
            <DialogTitle
              id='modal'
              disableTypography
              classes={{
                root: classes.dialogTitle
              }}
            >
              {this.props.isEdit
                ? 'EDIT PATIENT'
                : 'ADD NEW PATIENT'}
            </DialogTitle>
            <DialogContent>
              <Form
                isEdit={this.props.isEdit}
                isCartPage={this.props.isCartPage}
                type={'patientForm'}
                onSubmit={this.props.submitPatientDetailsLoading}
                customerState={this.props.customerState}
                patientFormState={this.props.patientFormState}
                closeModal={this.props.closePatientFormModal}
                updatePatientFormValue={this.props.updatePatientFormValue}
              />
            </DialogContent>
          </Dialog>
        </ActivityIndicator>
      </div>
    )
  }
}

export default (withStyles(styles)(PatientDetailForm))
