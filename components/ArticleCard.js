import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const styles = theme => {
  return {
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    cardTitle: {
      ...theme.typography.subheading,
      color: theme.palette.customGrey.grey600
    },
    cardContent: {
      ...theme.typography.caption,
      color: theme.palette.customGrey.grey500,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }
  }
}

const ArticleCard = (props) => (
  <Card elevation={1}>
    <CardMedia
      className={props.classes.media}
      image={props.articleDetail.images[0]}
      title='article'
    />
    <CardContent>
      <Typography
        gutterBottom
        variant='subheading'
        component='h2'
        className={props.classes.cardTitle}
      >
        {props.articleDetail.title}
      </Typography>
      <Typography component='p' className={props.classes.cardContent}>
        {props.articleDetail.body}
      </Typography>
    </CardContent>
  </Card>
)

export default withStyles(styles)(ArticleCard)
