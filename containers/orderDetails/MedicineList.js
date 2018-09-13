import React from 'react'

import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import ProductName from '../../components/ProductName'
import ProductBrand from '../../components/ProductBrand'
import ProductPackSize from '../../components/ProductPackSize'

import {
  DELIVERY_OPTION_URGENT,
  IN_STOCK
} from '../../components/constants/Constants'

const styles = theme => ({
  medicineListWrapper: {
    paddingLeft: theme.spacing.unit * 2.5,
    paddingTop: theme.spacing.unit * 2.5,
    marginBottom: theme.spacing.unit * 2.5
  },
  medicineText: {
    fontSize: theme.spacing.unit * 2,
    color: theme.palette.customGrey.grey500
  },
  medicineNameWrapper: {
    ...theme.typography.body2,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing.unit / 4,
    fontSize: theme.spacing.unit * 1.75
  },
  companyNameWrapper: {
    ...theme.typography.caption,
    marginBottom: theme.spacing.unit / 4,
    fontSize: theme.spacing.unit * 1.5
  },
  packType: {
    ...theme.typography.caption,
    fontSize: theme.spacing.unit * 1.5
  },
  amount: {
    ...theme.typography.subheading,
    fontSize: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 5.5
  },
  amountWrapper: {
    textAlign: 'right'
  },
  quantity: {
    fontSize: theme.spacing.unit * 1.75,
    marginRight: theme.spacing.unit * 5.5
  },
  estimatedPrice: {
    fontSize: theme.spacing.unit * 1.5,
    marginRight: theme.spacing.unit * 5.5,
    color: theme.palette.customGrey.grey200
  },
  deliveryByText: {
    fontSize: theme.spacing.unit * 1.5,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGrey.grey500
  },
  medicineWrapper: {
    marginTop: theme.spacing.unit * 1.25,
    marginBottom: theme.spacing.unit * 1.25
  }
})

const MedicineList = (props) => {
  return (
    <div className={props.classes.medicineListWrapper}>
      <Typography
        className={props.classes.medicineText}
      >
        Medicines
      </Typography>
      <Divider />
      {
        props.orderItems.map(orderItem => {
          return (
            <div>
              <Grid
                container
                className={props.classes.medicineWrapper}
              >
                <Grid item xs={8}>
                  <ProductName
                    customStyle={props.classes.medicineNameWrapper}
                    name={orderItem.name}
                    serviceType={orderItem.available_service_type}
                    deliveryOption={orderItem.available_delivery_option}
                  />
                  <ProductBrand
                    customStyle={props.classes.companyNameWrapper}
                    brand={orderItem.brand_name}
                    withoutImage
                  />
                  <ProductPackSize
                    customStyle={props.classes.packType}
                    packType={orderItem.pack_type}
                    packSize={orderItem.per_pack_qty}
                    withoutImage
                  />
                  <Typography className={props.classes.deliveryByText}>
                    {
                      orderItem.available_delivery_option === DELIVERY_OPTION_URGENT
                        ? (
                          orderItem.stock_availability === IN_STOCK
                            ? `Delivery by today`
                            : (orderItem.min_delivery_day >= 0 && orderItem.max_delivery_day &&
                        `Delivery by ${orderItem.max_delivery_day} days`)
                        )
                        : (
                          orderItem.stock_availability === IN_STOCK
                            ? (orderItem.min_delivery_day >= 0 && orderItem.max_delivery_day &&
                        `Delivery within ${orderItem.min_delivery_day}-${orderItem.max_delivery_day} days`)
                            : (orderItem.min_delivery_day >= 0 && orderItem.max_delivery_day &&
                        `Delivery by ${orderItem.max_delivery_day} days`)
                        )
                    }
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <div className={props.classes.amountWrapper}>
                    <Typography className={props.classes.amount}>
                      &#8377; {orderItem.mrp}
                    </Typography>
                    <Typography className={props.classes.quantity}>
                      X {orderItem.quantity}
                    </Typography>
                    <Typography className={props.classes.estimatedPrice}>
                      Estimated Price*
                    </Typography>
                  </div>
                </Grid>
              </Grid>
              <Divider />
            </div>
          )
        })
      }
    </div>
  )
}

export default withStyles(styles)(MedicineList)
