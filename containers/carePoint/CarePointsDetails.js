import React, { Component } from 'react'

import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import CarePointAmount from './CarePointAmount'
import CarePointsDescription from './CarePointsDescription'
import TransactionHistoryHeader from './TransactionHistoryHeader'
import TransactionHistory from './TransactionHistory'

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
    fontWeight: theme.typography.fontWeightBold,
    marginLeft: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 5
  }
})

class CarePointsDetails extends Component {
  render () {
    return (
      <Card elevation={'1'} className={this.props.classes.card}>
        <CardContent className={this.props.classes.cardContent}>
          <Typography
            gutterBottom
            variant='title'
            component='h1'
            className={this.props.classes.title}
          >
            Care Points
          </Typography>
          <div>
            <CarePointAmount
              carePointAmountDetails={this.props.carePointState.payload.customer_wallet}
            />
            <Divider/>
            <CarePointsDescription/>
            <TransactionHistoryHeader
              carePointState={this.props.carePointState}
              getCarePointDetailsLoading={this.props.getCarePointDetailsLoading}
            />
            {
              this.props.carePointState.payload.customer_wallet_transactions.content.map((carePointsDetails) => {
                return (
                  <div>
                    <TransactionHistory
                      carePointsDetails={carePointsDetails}
                    />
                    <Divider/>
                  </div>
                )
              })
            }
          </div>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(CarePointsDetails)
