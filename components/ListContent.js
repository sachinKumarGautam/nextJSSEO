import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    title: {
      color: theme.palette.customGrey.grey600,
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: theme.spacing.unit * 2
    },
    titleWrapper: {
      display: 'flex',
      alignItems: 'baseline'
    },
    content: {
      marginBottom: theme.spacing.unit * 2
    },
    contentBody: {
      color: theme.palette.customGrey.grey500
    }
  }
}

const ListContent = (props) => (
  <div>
    <div className={props.classes.titleWrapper}>
      <img src={props.src} />
      <Typography
        gutterBottom
        variant='title'
        component='h1'
        className={props.classes.title}
      >
        {props.title}
      </Typography>
    </div>
    <ul>
      {
        props.content.map((item) => (
          <li className={props.classes.content}>
            <Typography
              gutterBottom
              variant='body1'
              className={props.classes.contentBody}
            >
              {item}
            </Typography>
          </li>
        ))
      }
    </ul>
  </div>
)

export default withStyles(styles)(ListContent)
