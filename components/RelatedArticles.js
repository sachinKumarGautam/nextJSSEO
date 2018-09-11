import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import ArticleCard from './ArticleCard'

import Router from 'next/router'

const styles = theme => {
  return {
    relatedArticlesWrapper: {
      maxWidth: 252
    },
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
    },
    viewAllLink: {
      ...theme.typography.caption,
      display: 'block',
      float: 'right',
      color: theme.palette.primary.main,
      paddingRight: theme.spacing.unit * 5,
      fontWeight: theme.typography.fontWeightMedium
    },
    listItem: {
      cursor: 'pointer',
      '&:not(:last-child)': {
        marginBottom: theme.spacing.unit * 4
      }
    }
  }
}

const RelatedArticles = (props) => (
  <div className={props.classes.relatedArticlesWrapper}>
    <Typography
      gutterBottom
      variant='title'
      component='h1'
      className={props.classes.title}
    >
      <img src={'/static/images/related-articles.svg'} className={props.classes.imageTitle} />
      Articles
    </Typography>
    <aside>
      <ul className={props.classes.articleListWrapper}>
        {
          props.publishedContent.map((articleDetail) => {
            return (
              <li
                className={props.classes.listItem}
                onClick={() => Router.push(articleDetail.web_link)}
              >
                <ArticleCard
                  articleDetail={articleDetail}
                />
              </li>
            )
          })
        }
      </ul>
      {/* <a className={props.classes.viewAllLink}>view all</a> */}
    </aside>
  </div>
)

export default withStyles(styles)(RelatedArticles)
