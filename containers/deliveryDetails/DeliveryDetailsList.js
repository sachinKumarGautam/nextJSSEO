import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import { withStyles } from '@material-ui/core/styles'

import AddDeliveryAddressButton from './AddDeliveryAddressButton'
import DeliveryDetailForm from './DeliveryDetailsForm'
import AddressDetailsCardWrapper from './AddressDetailsCardWrapper'

const styles = theme => {
  return {
    card: {
      marginLeft: theme.spacing.unit * 6
    },
    cardContent: {
      paddingBottom: 0
    },
    nameStyle: {
      ...theme.typography.subheading,
      marginBottom: theme.spacing.unit * 4,
      color: theme.palette.customGrey.grey500,
      fontWeight: theme.typography.fontWeightBold
    },
    buttonRoot: {
      border: `1px solid ${theme.palette.primary.main}`
    },
    buttonLabel: {
      ...theme.typography.body3,
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightBold,
      paddingLeft: theme.spacing.unit * 4,
      paddingRight: theme.spacing.unit * 4
    },
    buttonWrapper: {
      textAlign: 'right',
      marginTop: theme.spacing.unit,
      marginRight: theme.spacing.unit * 3.75
    },
    title: {
      ...theme.typography.headline,
      color: theme.palette.customGrey.grey500,
      marginLeft: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 4
    },
    titleWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    addressDetailsCardWrapper: {
      padding: theme.spacing.unit * 1.25
    }
  }
}

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      openDeliveryFormDialog: false
    }
    this.openDeliveryFormModal = this.openDeliveryFormModal.bind(this)
    this.closeDeliveryFormModal = this.closeDeliveryFormModal.bind(this)
  }

  openDeliveryFormModal () {
    this.setState({
      openDeliveryFormDialog: true
    })
  }

  closeDeliveryFormModal () {
    this.setState({
      openDeliveryFormDialog: false
    })
  }

  render () {
    return (
      <Card elevation={'1'} className={this.props.classes.card}>
        <CardContent className={this.props.classes.cardContent}>
          <div className={this.props.classes.titleWrapper}>
            <Typography
              gutterBottom
              variant='title'
              component='h1'
              className={this.props.classes.title}
            >
              Address
            </Typography>
            <div className={this.props.classes.buttonWrapper}>
              <AddDeliveryAddressButton
                buttonRoot={this.props.classes.buttonRoot}
                buttonLabel={this.props.classes.buttonLabel}
                onClick={this.openDeliveryFormModal.bind(this)}
              />
              <DeliveryDetailForm
                onSubmit={this.props.submitDeliveryDetailsLoading}
                openDeliveryFormDialog={this.state.openDeliveryFormDialog}
                customerState={this.props.customerState}
                deliveryDetailsState={this.props.deliveryDetailsState}
                deliveryFormState={this.props.deliveryDetailsState.deliveryFormState}
                closeDeliveryFormModal={this.closeDeliveryFormModal}
                checkPincodeDetailLoading={this.props.checkPincodeDetailLoading}
                updateAddressFormValue={this.props.updateAddressFormValue}
                getLocalityDetailListLoading={this.props.getLocalityDetailListLoading}
                checkPincodeState={this.props.checkPincodeState}
              />
            </div>
          </div>
          <AddressDetailsCardWrapper
            payload={this.props.deliveryDetailsState.payload}
            addressDetailsCardWrapper={this.props.classes.addressDetailsCardWrapper}
          />
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Main)
