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
      ...theme.typography.body2,
      marginRight: theme.spacing.unit * 2.125,
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.customGrey.grey600
    },
    overview: {
      ...theme.typography.body2,
      color: theme.palette.customGrey.grey500
    }
  }
}

const ProductOverview = (props) => (
  <React.Fragment>
    {props.overview && <div className={props.classes.overviewWrapper}>
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
        {props.overview}
      </Typography>
    </div>}
  </React.Fragment>
)

export default withStyles(styles)(ProductOverview)
