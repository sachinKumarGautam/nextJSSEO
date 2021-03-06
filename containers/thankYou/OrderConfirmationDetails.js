import React from 'react'

import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'

import ThankyouDetails from './ThankyouDetails'
import RefillDetails from './RefillDetails'
import Button from '../../components/button'

import Router from 'next/router'

import ActivityIndicator from '../../components/activityIndicator/index'
import CommonContentLoader
  from '../../components/activityIndicator/loader/CommonContentLoader'
import SnackbarErrorMessage from '../../components/activityIndicator/error/SnackbarErrorMessage'

import { HOME_PAGE } from '../../routes/RouteConstant'

const styles = theme => ({
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

const OrderConfirmationDetails = props => {
  return (
    <Card elevation={'1'}>
      <ActivityIndicator
        isLoading={props.cartState.isLoading}
        LoaderComp={<CommonContentLoader />}
        isError={
          props.thankYouState.errorState.isError
        }
        ErrorComp={
          <SnackbarErrorMessage
            error={
              props.thankYouState.errorState.error
            }
          />
        }
        bottomError
      >
        <CardContent className={props.classes.cardContent}>
          <ThankyouDetails cartState={props.cartState} constantsState={props.constantsState} />
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
              onClick={props.viewYouOrder}
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
              onClick={() => {
                Router.push({ pathname: HOME_PAGE })
              }}
              label={'HOME'}
            />
          </div>
        </CardContent>
      </ActivityIndicator>
    </Card>
  )
}

export default withStyles(styles)(OrderConfirmationDetails)
