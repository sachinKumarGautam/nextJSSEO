import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    title: {
      color: theme.palette.customGrey.grey600,
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: theme.spacing.unit * 2,
      transition: '0.2s'
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
    },
    hover: {
      color: theme.palette.primary.main,
      transition: '0.2s'
    },
    currentlyWorking: {
      padding: theme.spacing.unit * 2
    }
  }
}

const ListContent = (props) => {
  return (
    <div id={props.itemKey}>
      <div className={props.classes.titleWrapper}>
        <img src={props.src} />
        <Typography
          gutterBottom
          variant='title'
          component='h1'
          className={props.hover[props.itemKey] ? `${props.classes.title} ${props.classes.hover}` : props.classes.title}
        >
          {props.title}
        </Typography>
      </div>
      <ul>
        {
          props.content && props.content.map((item) => (
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
        {
          !props.content &&
          <Typography className={props.classes.currentlyWorking} variant={'body2'} component='div'>
                We are currently working on this section
          </Typography>
        }
      </ul>
    </div>
  )
}

export default withStyles(styles)(ListContent)
