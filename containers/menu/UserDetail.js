import React from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    nameMenuStyle: {
      ...theme.typography.subheading,
      paddingLeft: theme.spacing.unit * 6.75,
      color: theme.palette.customGreen.green300,
      paddingTop: theme.spacing.unit * 1.5,
      paddingBottom: theme.spacing.unit * 1.5
    }
  }
}

const UserDetail = (props) => {
  return (
    <div className={props.classes.nameMenuStyle}>
      Hi {props.customerState.payload.full_name}
    </div>
  )
}

export default withStyles(styles)(UserDetail)
