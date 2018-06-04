import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import ArticleCard from './ArticleCard'

const styles = theme => {
  return {
    title: {
      color: theme.palette.customGrey.grey600,
      fontWeight: theme.typography.fontWeightBold
    },
    imageTitle: {
      marginRight: theme.spacing.unit * 2
    },
    articleListWrapper: {
      listStyle: 'none',
      marginTop: theme.spacing.unit * 4,
      paddingLeft: 0
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
      <ul className={props.classes.articleListWrapper}>
        <li>
          <ArticleCard />
        </li>
        <li>
          <ArticleCard />
        </li>
        <li>
          <ArticleCard />
        </li>
      </ul>
    </aside>
  </div>
)

export default withStyles(styles)(RelatedArticles)
