import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'

const styles = theme => {
  return {
    tags: {
      ...theme.typography.body2,
      color: theme.palette.customGrey.grey600,
      marginRight: theme.spacing.unit * 1.25,
      backgroundColor: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.customGrey.grey100}`,
      display: 'flex',
      justifyContent: 'center'
    }
  }
}

const DiseaseTags = props => (
  <div>
    {props.diseases.map((disease, index) => (
      <Chip label={disease} className={props.classes.tags} />
    ))}
  </div>
)

export default withStyles(styles)(DiseaseTags)
