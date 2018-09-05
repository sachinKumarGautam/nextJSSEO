import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import PriceDetails from '../orderDetails/PriceDetails'
import TotalAmount from '../cartDetails/TotalAmount'

const styles = theme => ({
  card: {
    marginLeft: theme.spacing.unit * 3
  },
  cardContent: {
    padding: 0
  },
  myCartText: {
    ...theme.typography.title,
    fontSize: theme.typography.pxToRem(18),
    color: theme.palette.common.white,
    paddingTop: theme.spacing.unit * 1.5,
    paddingBottom: theme.spacing.unit * 1.5,
    paddingLeft: theme.spacing.unit * 4.37,
    fontWeight: theme.typography.fontWeightBold
  },
  titleStyle: {
    backgroundColor: theme.palette.customGreen.green300
  },
  cardStyle: {
    '&:last-child': {
      paddingBottom: 0
    }
  }
})

const MyCartDetails = (props) => {
  return (
    <Card elevation={'1'} className={props.classes.card}>
      <CardContent
        className={props.classes.cardContent}
        classes={{
          root: props.classes.cardStyle
        }}
      >
        <div className={props.classes.titleStyle}>
          <Typography
            variant='h1'
            className={props.classes.myCartText}
          >
            MY CART
          </Typography>
        </div>
        <PriceDetails
          orderDetailsState={props.cartState.orderResponse}
        />
        <TotalAmount
          cartState={props.cartState.orderResponse}
        />
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(MyCartDetails)
