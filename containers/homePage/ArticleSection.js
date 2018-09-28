import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
import Router from 'next/router'

const styles = theme => {
  return {
    articleWrapper: {
      paddingLeft: theme.spacing.unit * 5.9375,
      paddingRight: theme.spacing.unit * 4.625,
      backgroundColor: theme.palette.customGrey.grey50,
      paddingBottom: theme.spacing.unit * 8.75
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
      paddingBottom: theme.spacing.unit * 3.75
    },
    imageStyle: {
      width: '100%',
      height: theme.spacing.unit * 19
    },
    detailWrapper: {
      cursor: 'pointer',
      width: theme.spacing.unit * 37.5,
      backgroundColor: theme.palette.secondary.main,
      textDecoration: 'none'
    },
    articleListWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  }
}

class ArticleSection extends Component {
  render() {
    return (
      <div className={this.props.classes.articleWrapper}>
        <Typography
          variant='headline'
          className={this.props.classes.articleTitle}
        >
          Recently Published
        </Typography>
        <div className={this.props.classes.articleListWrapper}>
          {
            this.props.publishedContent.map((item) => {
              return (
                <a className={this.props.classes.detailWrapper} href={item.web_link} target='_blank'>
                  <img src={item.images[0]} className={this.props.classes.imageStyle} />
                  <Typography
                    variant='body2'
                    className={this.props.classes.title}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant='body2'
                    className={this.props.classes.description}
                  >
                    {item.body}
                  </Typography>
                </a>
              )
            })
          }
        </div>
        {/* <div className={this.props.classes.buttonWrapperStyle}>
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
        </div> */}
      </div>
    )
  }
}

export default withStyles(styles)(ArticleSection)
