import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'

import { withStyles } from '@material-ui/core/styles'

import Button from '../../components/button'
import AddressDetailsCard from '../../components/AddressDetailsCard'

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
    }
  }
}

class Main extends Component {
  render () {
    return (
      <div>
        <p className={this.props.classes.nameStyle}>Addresses</p>
        <Grid container spacing={24}>
          {
            this.props.deliveryDetailsState.payload.map(deliveryDetail => {
              return (
                <Grid item xs={6}>
                  <AddressDetailsCard
                    deliveryDetail={deliveryDetail}
                  />
                </Grid>
              )
            })
          }
        </Grid>
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
