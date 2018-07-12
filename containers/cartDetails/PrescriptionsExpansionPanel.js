import React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'

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

  render () {
    return (
      <ExpansionPanel
        expanded={this.props.expanded === 'panel2'}
        onChange={this.props.handleChange}
        className={this.props.expansionPanel}
      >
        <ExpansionPanelSummary expandIcon={<div />}>
          <img src='/static/images/attachedPrescriptions.svg' className={this.props.imageIcon}/>
          <Typography
            component='h1'
            className={this.props.heading}
          >
            Upload Prescriptions
          </Typography>
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
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default PrescriptionsExpansionPanel
