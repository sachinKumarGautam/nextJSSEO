import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'

const styles = theme => {
  return {
    contentWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: theme.spacing.unit * 10.25
    },
    healthCoachTitle: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: theme.spacing.unit * 5.5
    },
    healthCoachDescription: {
      fontSize: theme.typography.pxToRem(16),
      marginLeft: theme.spacing.unit * 5.5,
      marginBottom: theme.spacing.unit * 4
    },
    captionImageStyle: {
      width: theme.spacing.unit * 5,
      marginBottom: theme.spacing.unit * 4.125,
      marginLeft: theme.spacing.unit * 5.5
    },
    captionTextStyle: {
      fontSize: theme.typography.pxToRem(12),
      marginLeft: theme.spacing.unit * 6
    }
  }
}

class HealthCoachDetail extends Component {
  render () {
    return (
      <div className={this.props.classes.contentWrapper}>
        <div>
          <img src='/static/images/doctor2.png' />
        </div>
        <div>
          <Typography
            variant='body2'
            className={this.props.classes.healthCoachTitle}
          >
            Health Coach
          </Typography>
          <Typography
            variant='body2'
            className={this.props.classes.healthCoachDescription}
          >
            Our Life Coaches help you determine the right diet and lifestyle interventions for you. Every month!
          </Typography>
          <Grid container>
            <Grid item xs={2}>
              <img src='/static/images/food.svg' className={this.props.classes.captionImageStyle} />
              <Typography
                variant='body1'
                className={this.props.classes.captionTextStyle}
              >
                DIET
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <img src='/static/images/exercise.svg' className={this.props.classes.captionImageStyle} />
              <Typography
                variant='body1'
                className={this.props.classes.captionTextStyle}
              >
                EXERCISE
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <img src='/static/images/sleep.svg' className={this.props.classes.captionImageStyle} />
              <Typography
                variant='body1'
                className={this.props.classes.captionTextStyle}
              >
                LIFESTYLE CHOICES
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <img src='/static/images/noun-weight-loss-118506.svg' className={this.props.classes.captionImageStyle} />
              <Typography
                variant='body1'
                className={this.props.classes.captionTextStyle}
              >
                WEIGHT MANAGEMENT
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(HealthCoachDetail)
