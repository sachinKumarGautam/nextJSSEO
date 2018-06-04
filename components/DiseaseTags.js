import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'

const styles = theme => {
  return {
    tags: {
      ...theme.typography.subheading,
      color: theme.palette.customGrey.grey600
    }
  }
}

const DiseaseTags = (props) => (
  <div>
    <Chip label='Basic Chip' className={props.classes.tags} />
  </div>
)

export default withStyles(styles)(DiseaseTags)
