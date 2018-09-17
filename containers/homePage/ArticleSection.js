import React, {Component} from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { Grid } from '@material-ui/core'

const styles = theme => {
  return {
    articleWrapper: {
      paddingLeft: theme.spacing.unit * 5.9375,
      paddingRight: theme.spacing.unit * 4.625,
      backgroundColor: theme.palette.customGrey.grey50
    },
    articleTitle: {
      fontSize: theme.typography.pxToRem(20),
      letterSpacing: '2.2px',
      fontWeight: theme.typography.fontWeightBold,
      paddingTop: theme.spacing.unit * 5.125,
      marginBottom: theme.spacing.unit * 4.5
    },
    button: {
      margin: theme.spacing.unit
    },
    buttonlabel: {
      ...theme.typography.caption,
      fontWeight: theme.typography.fontWeightBold,
      paddingLeft: theme.spacing.unit * 5.25,
      paddingRight: theme.spacing.unit * 5.25,
      color: theme.palette.customGrey.grey500
    },
    buttonWrapperStyle: {
      paddingBottom: theme.spacing.unit * 8.75,
      textAlign: 'center',
      paddingTop: theme.spacing.unit * 5.65
    },
    title: {
      fontSize: theme.typography.pxToRem(18),
      fontWeight: theme.typography.fontWeightBold,
      paddingLeft: theme.spacing.unit * 3.25,
      paddingRight: theme.spacing.unit * 5.5,
      paddingTop: theme.spacing.unit * 2.125,
      paddingBottom: theme.spacing.unit * 1.125
    },
    description: {
      color: theme.palette.customGrey.grey500,
      lineHeight: theme.spacing.unit * 0.21375,
      paddingLeft: theme.spacing.unit * 3.25,
      paddingRight: theme.spacing.unit * 5.5,
      paddingBottom: theme.spacing.unit * 3.375
    },
    imageStyle: {
      width: '100%',
      height: theme.spacing.unit * 24
    },
    detailWrapper: {
      width: '100%',
      backgroundColor: theme.palette.secondary.main
    },
    articleListWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  }
}

const relatedArticle = [
  {
    image: '../../static/images/womanHair.jpg',
    label: 'Does loosing hair makes you lose your mind?',
    description: 'Well you need not worry or freak out anymore, as a fact losing 50 to 100 strands...'
  },
  {
    image: '../../static/images/images.jpeg',
    label: '4 Ways to grow Thick Eyebrows Naturally',
    description: 'Thick eyebrows have always been in demand. Thick, well-shaped eyebrows...'
  },
  {
    image: '../../static/images/jogging.jpg',
    label: 'Arthritis, can it lead to cardiovascular risk?',
    description: 'According to recent research, patients who have been diagnosed with...'
  }
]

class ArticleSection extends Component {
  render () {
    return (
      <div className={this.props.classes.articleWrapper}>
        <Typography
          variant='headline'
          className={this.props.classes.articleTitle}
        >
          Recently Published
        </Typography>
        <Grid container spacing={24}>
          {
            relatedArticle.map((item) => {
              return (
                <Grid item xs={4}>
                  <div className={this.props.classes.detailWrapper}>
                    <img src={item.image} className={this.props.classes.imageStyle} />
                    <Typography
                      variant='body2'
                      className={this.props.classes.title}
                    >
                      {item.label}
                    </Typography>
                    <Typography
                      variant='body2'
                      className={this.props.classes.description}
                    >
                      {item.description}
                    </Typography>
                  </div>
                </Grid>
              )
            })
          }
        </Grid>
        <div className={this.props.classes.buttonWrapperStyle}>
          <Button
            variant='raised'
            color='secondary'
            className={this.props.classes.button}
            classes={{
              label: this.props.classes.buttonlabel
            }}
            // onClick={this.onPlaceOrder.bind(this)}
          >
            READ MORE
          </Button>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ArticleSection)
