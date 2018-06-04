import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    title: {
      color: theme.palette.customGrey.grey600,
      fontWeight: theme.typography.fontWeightBold
    }
  }
}

const ListContent = (props) => (
  <div>
    <Typography
      gutterBottom
      variant='title'
      component='h1'
      className={props.classes.title}
    >
      {props.title}
    </Typography>
    <ul>
      <li>Glimepiride is used to Control high blood sugar which also helps prevent kidney damage.</li>
      <li>Glimepiride lowers blood sugar by causing the release of your body's natural insulin.</li>
      <li>Metformin works by helping to restore your body's proper response to the insulin you naturally produce.</li>
      <li>Metformin also decreases the amount of sugar that your liver makes and that your stomach/intestines absorb.</li>
    </ul>
  </div>
)

export default withStyles(styles)(ListContent)
