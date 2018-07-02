import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Person from '@material-ui/icons/Person'

import {formatDateWithMonth} from '../../utils/FormatDate'

const styles = theme => ({
  imageStyle: {
    width: theme.spacing.unit * 17,
    height: theme.spacing.unit * 19,
    borderRadius: theme.spacing.unit / 2
  },
  prescriptionName: {
    color: theme.palette.customGrey.grey500,
    fontWeight: theme.typography.fontWeightBold,
    marginLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    wordWrap: 'break-word'
  },
  userIconStyle: {
    color: theme.palette.customGrey.grey300,
    height: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit,
  },
  userNameStyle: {
    ...theme.typography.body3,
    color: theme.palette.customGrey.grey500,
    fontWeight: theme.typography.fontWeightBold,
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit * 3,
    wordWrap: 'break-word'
  },
  doctorStyle: {
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit * 1.5,
    marginTop: theme.spacing.unit
  },
  uploadDateStyle: {
    ...theme.typography.body4,
    color: theme.palette.customGrey.grey200,
    marginLeft: theme.spacing.unit * 1.5,
    marginTop: theme.spacing.unit
  },
  prescriptionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    border: `0.5px solid ${theme.palette.customGrey.grey250}`,
    borderRadius: theme.spacing.unit / 2,
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  },
  detailWrapper: {
    marginRight: theme.spacing.unit * 2,
    overflow: 'hidden'
  }
})

class PrescriptionContent extends Component {
  render () {
    let uploadDate = formatDateWithMonth(this.props.prescription.created_at)
    return (
      <div className={this.props.classes.prescriptionWrapper}>
        <img
          src={this.props.prescription.location}
          className={this.props.classes.imageStyle}
        />
        <div className={this.props.classes.detailWrapper}>
          <Typography
            gutterBottom
            variant='body2'
            component='h1'
            className={this.props.classes.prescriptionName}
          >
            {this.props.prescription.file_name}
          </Typography>
          <Typography
            variant="caption"
            className={this.props.classes.userNameStyle}
          >
            <Person className={this.props.classes.userIconStyle}/>
            {this.props.prescriptionDetails.patient_full_name}
          </Typography>
          <Typography
            variant="body2"
            className={this.props.classes.doctorStyle}
          >
            {this.props.prescription.doctor_name}
          </Typography>
          <Typography
            variant="caption"
            className={this.props.classes.uploadDateStyle}
          >
            Uploaded on {uploadDate}
          </Typography>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PrescriptionContent)
