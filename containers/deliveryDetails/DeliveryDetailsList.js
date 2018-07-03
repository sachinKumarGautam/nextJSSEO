import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'

import Button from '../../components/button'
import AddressDetailsCardWrapper from './AddressDetailsCardWrapper'

const styles = theme => {
  return {
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
      color: theme.palette.primary.main
    },
    buttonWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: theme.spacing.unit * 3.75,
      marginRight: theme.spacing.unit * 3.75
    },
    title: {
      ...theme.typography.headline,
      color: theme.palette.customGrey.grey500,
      marginLeft: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 6
    }
  }
}

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      addressIdSelected: 0
    }
  }

  saveAddressSelected(addressIdSelected) {
    this.setState({
      addressIdSelected: addressIdSelected
    })

    this.props.saveAddressSelected(
      this.props.deliveryDetailsState,
      addressIdSelected
    )
  }

  render () {
    return (
      <div>
        <Typography
          gutterBottom
          variant='title'
          component='h1'
          className={this.props.classes.title}
        >
          Addresses
        </Typography>
        <AddressDetailsCardWrapper
          payload={this.props.deliveryDetailsState.payload}
          saveAddressSelected={this.saveAddressSelected.bind(this)}
        />
        <div className={this.props.classes.buttonWrapper}>
          <Button
            size='small'
            variant='outlined'
            color='primary'
            classes={{
              root: this.props.classes.buttonRoot,
              label: this.props.classes.buttonLabel
            }}
            style={{float: 'right'}}
            label={'ADD NEW ADDRESS'}
          />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Main)
