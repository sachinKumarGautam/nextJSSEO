import React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'

import Button from '../../components/button'

import ImagePicker from './ImagePicker'

import {
  PRESCRIPTION_DESCRIPTION
} from '../messages/cartMessages'

class PrescriptionsExpansionPanel extends React.Component {
  onImageSelection (event) {
    this.props.uploadPrescriptionLoading(
      this.props.cartState,
      event.target.files[0]
    )
  }

  onDeleteButton (index) {
    this.props.deletePrescriptionLoading(
      this.props.cartState,
      [],
      index
    )
  }

  onClickOfDoctorCallBack () {
    this.props.optForDoctorCallbackLoading(
      this.props.cartState,
      this.props.cartState.payload.uid,
      !this.props.cartState.payload.is_doctor_callback.payload
    )
  }

  render () {
    return (
      <ExpansionPanel
        expanded={this.props.expanded === 'panel2'}
        onChange={this.props.handleChange}
        className={this.props.expansionPanel}
      >
        <ExpansionPanelSummary expandIcon={<div />}>
          <img src='/static/images/attachedPrescriptions.svg' className={this.props.imageIcon} />
          <Typography
            component='h1'
            className={this.props.heading}
          >
            {
              this.props.files.length
              ? 'Attached Prescriptions'
              : 'Upload Prescriptions'
            }

          </Typography>
          {
            this.props.files.length
            ? (
              <img src='/static/images/checkedIcon.svg' className={this.props.checkedIcon}/>
            ) : null
          }
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          classes={{
            root: this.props.thankYouWrapper
          }}
        >
          <Typography component='h2' className={this.props.loginDescription}>
            {PRESCRIPTION_DESCRIPTION}
          </Typography>
          <ImagePicker
            onImageSelection={this.onImageSelection.bind(this)}
            files={this.props.files}
            onDeleteButton={this.onDeleteButton.bind(this)}
            // onViewImage={this.onViewImage}
          />
          <div className={this.props.checkboxWrapper}>
            <div className={this.props.checkbox}>
              <Checkbox
                checked={this.props.cartState.payload.is_doctor_callback.payload}
                onChange={this.onClickOfDoctorCallBack.bind(this)}
                color='primary'
                disabled={
                  this.props.cartState.payload.cart_prescriptions.length > 0
                }
              />
              <Typography
                variant='caption'
                className={this.props.teleconsultText}
              >
                Opt in for Free Doctor Consultation
              </Typography>
            </div>
            <Button
              size='small'
              color='primary'
              variant='raised'
              classes={{
                root: this.props.nextButtonRoot
              }}
              label={'NEXT'}
              onClick={
                this.props.loginState.isAuthenticated
                  ? this.props.handleNextChange
                  : null
              }
            />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default PrescriptionsExpansionPanel
