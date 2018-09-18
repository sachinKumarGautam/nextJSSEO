import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import {
  RETIRED_STATUS,
  IN_ACTIVE_STATUS,
  RETIRED_STATUS_MAPPING,
  TEMPORARY_SUSPENDED_STATUS,
  TEMPORARY_SUSPENDED_STATUS_MAPPING
} from './constants/Constants'

const styles = theme => {
  return {
    status: {
      ...theme.typography.body3,
      color: theme.palette.customBlack.black1000,
      marginBottom: theme.spacing.unit,
      marginLeft: theme.spacing.unit,
      display: 'inline-block',
      borderRadius: theme.spacing.unit,
      backgroundColor: theme.palette.customGrey.grey100,
      padding: `${theme.spacing.unit / 8}px ${theme.spacing.unit}px`
    }
  }
}

const ProductStatus = (props) => (
  <Typography
    gutterBottom
    variant={props.variant}
    component='h3'
    className={`${props.classes.status} ${props.customStyle}`}
  >
    {
      (props.status === RETIRED_STATUS || props.status === IN_ACTIVE_STATUS)
        ? RETIRED_STATUS_MAPPING
        : (
          props.status === TEMPORARY_SUSPENDED_STATUS
            ? TEMPORARY_SUSPENDED_STATUS_MAPPING
            : props.status
        )
    }
  </Typography>
)

export default withStyles(styles)(ProductStatus)
