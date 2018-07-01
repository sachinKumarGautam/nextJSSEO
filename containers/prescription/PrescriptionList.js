import React, { Component } from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import PrescriptionContent from './PrescriptionContent'
import Button from '../../components/button'

const styles = theme => ({
  card: {
    marginLeft: theme.spacing.unit * 6
  },
  cardContent: {
    paddingBottom: 0,
  },
  title: {
    ...theme.typography.headline,
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit * 3
  },
  prescriptionContentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  buttonRoot: {
    border: `1px solid ${theme.palette.primary.main}`
  },
  buttonLabel: {
    ...theme.typography.body3,
    color: theme.palette.customGreen.green300,
    fontWeight: theme.typography.fontWeightBold,
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 5
  },
  button: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 21,
    marginRight: theme.spacing.unit * 3,
    float: 'right'
  }
})

class PrescriptionList extends Component {
  render () {
    return (
      <div>
        <Card elevation={'1'} className={this.props.classes.card}>
          <CardContent className={this.props.classes.cardContent}>
            <Typography
              gutterBottom
              variant='headline'
              component='h1'
              className={this.props.classes.title}
            >
              Prescriptions
            </Typography>
            <div className={this.props.classes.prescriptionContentWrapper}>
              {
                this.props.prescriptionState.payload.map((prescriptionDetails) => {
                  return prescriptionDetails.prescription.map((prescription) => {
                    return (
                      <PrescriptionContent
                        prescriptionDetails={prescriptionDetails}
                        prescription={prescription}
                      />
                    )
                  })
                })
              }
            </div>
            <Button
              size='medium'
              variant='outlined'
              className={this.props.classes.button}
              classes={{
                root: this.props.classes.buttonRoot,
                label: this.props.classes.buttonLabel
              }}
              onClick={this.handleClickOpen}
              label={'UPLOAD PRESCRIPTION'}
            />
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(PrescriptionList)
