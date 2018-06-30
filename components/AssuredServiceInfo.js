import React from 'react'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    label: {
      ...theme.typography.body3,
      color: theme.palette.customGrey.grey600,
      marginLeft: theme.spacing.unit
    },
    assuredServiceWrapper: {
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing.unit
    }
  }
}

const AssuredServiceInfo = (props) => (
  <div className={props.classes.assuredServiceWrapper}>
    <img src={'/static/images/assured-service.svg'} />
    <Typography component='caption' className={props.classes.label}>
      Lifcare Assured Available
    </Typography>
  </div>
)

export default withStyles(styles)(AssuredServiceInfo)
