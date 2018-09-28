import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from 'react-slick'
import ActivityIndicator from '../../components/activityIndicator/index'
import ComponentSpecificError
  from '../../components/activityIndicator/error/ComponentSpecificError'

const styles = theme => {
  return {
    articleWrapper: {
      paddingLeft: theme.spacing.unit * 5.9375,
      paddingRight: theme.spacing.unit * 4.625,
      display: 'flex',
      flexDirectrion: 'row'
    },
    articleTitle: {
      fontSize: theme.typography.pxToRem(20),
      letterSpacing: '2.2px',
      fontWeight: theme.typography.fontWeightBold,
      marginTop: theme.spacing.unit * 27.5,
      // marginBottom: theme.spacing.unit * 27.5,
      marginRight: theme.spacing.unit * 3.625,
      marginLeft: theme.spacing.unit * 8.75
    },
    testimonalStyle: {
      width: '94% !important',
      backgroundColor: theme.palette.secondary.main,
      paddingLeft: theme.spacing.unit * 3.125,
      paddingRight: theme.spacing.unit * 3.125,
      paddingTop: theme.spacing.unit * 4.125,
      paddingBottom: theme.spacing.unit * 4.625,
      boxShadow: `0 0 6px 0 ${theme.palette.customGrey.grey900}`,
      margin: theme.spacing.unit
    },
    userReview: {
      color: theme.palette.customGrey.grey450,
      marginTop: theme.spacing.unit * 3.3,
      height: theme.spacing.unit * 32
    },
    userReviewWrapper: {
      width: '76%',
      marginTop: theme.spacing.unit * 9.375,
      marginBottom: theme.spacing.unit * 14.125,
      marginLeft: theme.spacing.unit * 4
    },
    invertedCommaStyle: {
      margin: '0 auto'
    },
    customerProfile: {
      width: theme.spacing.unit * 6.5,
      height: theme.spacing.unit * 6.5,
      borderRadius: theme.spacing.unit * 4.5,
      marginRight: theme.spacing.unit * 2
    },
    userName: {
      fontSize: theme.typography.pxToRem(12),
      fontWeight: theme.typography.fontWeightBold,
      lineHeight: theme.spacing.unit * 0.2925,
      letterSpacing: '2px'
    },
    userAge: {
      fontSize: theme.typography.pxToRem(12),
      color: theme.palette.customGrey.grey450
    },
    userDetailWrapper: {
      display: 'flex',
      flexDirection: 'row',
      height: theme.spacing.unit * 10
    }
  }
}

class Testimonals extends Component {
  render () {
    let settings = {
      dots: false,
      speed: 500,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 2,
      nextArrow: <img src='/static/images/shape.svg' />,
      prevArrow: <img src='/static/images/leftArrow.svg' />,
      autoplay: false
    }
    return (
      <ActivityIndicator
        isError={this.props.homePageState.userReview.errorState.isError}
        ErrorComp={
          <ComponentSpecificError
            error={this.props.homePageState.userReview.errorState.error}
            noButton
          />
        }
      >
        <div className={this.props.classes.articleWrapper}>
          <div>
            <Typography
              variant='headline'
              className={this.props.classes.articleTitle}
            >
              What people say about our services
            </Typography>
          </div>
          <div className={this.props.classes.userReviewWrapper}>
            <Slider {...settings}>
              {this.props.homePageState.userReview.payload.map(item => {
                //   return <div>"a"</div>;
                return (
                  <div className={this.props.classes.testimonalStyle}>
                    <img
                      src='/static/images/invalid-name.svg'
                      className={this.props.classes.invertedCommaStyle}
                    />
                    <Typography
                      variant='body2'
                      className={this.props.classes.userReview}
                    >
                      {item.body}
                    </Typography>
                    <div className={this.props.classes.userDetailWrapper}>
                      <div>
                        <img
                          src={item.profile_image}
                          className={this.props.classes.customerProfile}
                        />
                      </div>
                      <div>
                        <Typography
                          variant='body2'
                          className={this.props.classes.userName}
                        >
                          {item.prefix}. {item.first_name} {item.last_name}
                        </Typography>
                        <Typography
                          variant='body2'
                          className={this.props.classes.userAge}
                        >
                          {item.gender === 'male' ? 'Male' : 'Female'}, {item.age}
                        </Typography>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </ActivityIndicator>
    )
  }
}

export default withStyles(styles)(Testimonals)
