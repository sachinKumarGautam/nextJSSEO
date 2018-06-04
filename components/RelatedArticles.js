import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => {
  return {
    title: {
      color: theme.palette.customGrey.grey600,
      fontWeight: theme.typography.fontWeightBold
    },
    imageTitle: {
      marginRight: theme.spacing.unit * 2
    }
  }
}

const RelatedArticles = (props) => (
  <div>
    <Typography
      gutterBottom
      variant='title'
      component='h1'
      className={props.classes.title}
    >
      <img src={'/static/images/related-articles.svg'} className={props.classes.imageTitle} />
      Related Articles
    </Typography>
    <aside>
      <ul>
        <li>
          article 1
        </li>
        <li>
          article 2
        </li>
        <li>
          article 3
        </li>
      </ul>
    </aside>
  </div>
)

export default withStyles(styles)(RelatedArticles)
