import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    overviewWrapper: {
      display: 'flex',
      alignItems: 'flex-start'
    },
    label: {
      ...theme.typography.subheading,
      marginRight: theme.spacing.unit,
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.customGrey.grey600
    },
    overview: {
      ...theme.typography.subheading,
      color: theme.palette.customGrey.grey500
    }
  }
}

const ProductOverview = (props) => (
  <div className={props.classes.overviewWrapper}>
    <Typography
      gutterBottom
      component='h5'
      className={props.classes.label}
    >
      Overview:
    </Typography>
    <Typography
      gutterBottom
      component='h5'
      className={props.classes.overview}
    >
      Glycomet-GP 0.5 Forte Tablet is used in the treatment of
      type 2 diabetes.
    </Typography>
  </div>
)

export default withStyles(styles)(ProductOverview)
