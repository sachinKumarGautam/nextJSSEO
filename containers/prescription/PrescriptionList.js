import React, { Component } from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import PrescriptionContentWrapper from './PrescriptionContentWrapper'
import Button from '../../components/button'

const styles = theme => ({
  card: {
    marginLeft: theme.spacing.unit * 6
  },
  cardContent: {
    paddingBottom: 0
  },
  title: {
    ...theme.typography.headline,
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit * 3
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
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit * 3,
    float: 'right'
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

class PrescriptionList extends Component {
  render () {
    return (
      <div>
        <Card elevation={'1'} className={this.props.classes.card}>
          <CardContent className={this.props.classes.cardContent}>
            <div className={this.props.classes.buttonWrapper}>
              <Typography
                gutterBottom
                variant='headline'
                component='h1'
                className={this.props.classes.title}
              >
                Prescriptions
              </Typography>
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
            </div>
            <PrescriptionContentWrapper
              prescriptionState={this.props.prescriptionState}
            />
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(PrescriptionList)
