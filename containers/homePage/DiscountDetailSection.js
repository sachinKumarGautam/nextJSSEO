import React, {Component} from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SearchMedicine from '../searchMedicine/index'
import Button from '@material-ui/core/Button'

const styles = theme => {
  return {
    discountWrapper: {
      width: '100%',
      height: theme.spacing.unit * 13.625,
      display: 'flex',
      flexDirection: 'row',
      paddingTop: theme.spacing.unit * 4.375,
      paddingBottom: theme.spacing.unit * 4.375,
      backgroundColor: theme.palette.customGrey.grey50,
      justifyContent: 'center'
    },
    firstTextStyle: {
      ...theme.typography.headline,
      textAlign: 'center',
      color: theme.palette.customGrey.grey500,
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: theme.spacing.unit * 31.375,
      marginRight: theme.spacing.unit * 2
    },
    lastText: {
      ...theme.typography.headline,
      color: theme.palette.customGrey.grey500,
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 31.375
    },
    discountStyle: {
      ...theme.typography.headline,
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightBold,
      border: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing.unit * 1.5,
      paddingTop: 0
    }
  }
}

class DiscountDetailSection extends Component {
  render () {
    return (
      <div className={this.props.classes.discountWrapper}>
        <Typography
          variant='body1'
          className={this.props.classes.firstTextStyle}
        >
          Get
        </Typography>
        <Typography
          variant='body1'
          className={this.props.classes.discountStyle}
        >
          15% OFF
        </Typography>
        <Typography
          variant='body1'
          className={this.props.classes.lastText}
        >
          discount on first order
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(DiscountDetailSection)
