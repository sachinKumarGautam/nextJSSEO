import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import {
  DELIVERY_OPTION_URGENT,
  SERVICE_TYPE_LFASSURED
} from '../components/constants/Constants'

const styles = theme => {
  return {
    title: {
      ...theme.typography.title,
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.customGrey.grey600,
      marginBottom: theme.spacing.unit * 1.5,
      marginRight: theme.spacing.unit,
      display: 'inline-block'
    }
  }
}

const ProductName = (props) => (
  <React.Fragment>
    <Typography
      className={`${props.classes.title} ${props.customStyle}`}
      gutterBottom
      variant={props.variant}
      component='h1'
    >
      {props.name}
    </Typography>
    {
      props.deliveryOption === DELIVERY_OPTION_URGENT &&
      <img src='/static/images/express-delivery-icon.svg' />
    }
    {
      props.serviceType === SERVICE_TYPE_LFASSURED &&
      <img src='/static/images/assured-service.svg' />
    }
  </React.Fragment>
)

export default withStyles(styles)(ProductName)
