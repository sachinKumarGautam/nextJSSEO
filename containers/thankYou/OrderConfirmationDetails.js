import React, { Component } from 'react'

import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'

import ThankyouDetails from './ThankyouDetails'
import RefillDetails from './RefillDetails'
import Button from '../../components/button'

const styles = theme => ({
  card: {
    marginBottom: theme.spacing.unit * 30
  },
  cardContent: {
    paddingBottom: 0
  },
  buttonViewRoot: {
    border: `1px solid ${theme.palette.customGreen.green300}`
  },
  buttonViewLabel: {
    color: theme.palette.customGreen.green300,
    fontWeight: theme.typography.fontWeightBold
  },
  buttonViewStyle: {
    ...theme.typography.body2,
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 3.25,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    textAlign: 'center',
    marginRight: theme.spacing.unit * 2.37
  },
  buttonHomeRoot: {
    border: `1px solid ${theme.palette.customGrey.grey500}`
  },
  buttonHomeLabel: {
    color: theme.palette.customGrey.grey500,
    fontWeight: theme.typography.fontWeightBold
  },
  buttonHomeStyle: {
    ...theme.typography.body2,
    paddingLeft: theme.spacing.unit * 9.12,
    paddingRight: theme.spacing.unit * 9,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    textAlign: 'center'
  },
  buttonWrapper: {
    marginLeft: theme.spacing.unit * 5.25,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing.unit * 5.37
  }
})

const OrderConfirmationDetails = (props) => {
  return (
    <Card elevation={'1'} className={props.classes.card}>
      <CardContent className={props.classes.cardContent}>
        <ThankyouDetails
          cartState={props.cartState}
        />
        <Divider />
        <RefillDetails
          submitRefillDateLoading={props.submitRefillDateLoading}
          thankYouState={props.thankYouState}
          cartState={props.cartState}
        />
        <div className={props.classes.buttonWrapper}>
          <Button
            size='small'
            variant='outlined'
            color='primary'
            classes={{
              root: props.classes.buttonViewRoot,
              label: props.classes.buttonViewLabel
            }}
            className={props.classes.buttonViewStyle}
            // onClick={this.handleClickOpen}
            label={'VIEW YOUR ORDER'}
          />
          <Button
            size='small'
            variant='outlined'
            color='primary'
            classes={{
              root: props.classes.buttonHomeRoot,
              label: props.classes.buttonHomeLabel
            }}
            className={props.classes.buttonHomeStyle}
            // onClick={this.handleClickOpen}
            label={'HOME'}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(OrderConfirmationDetails)
