import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Link from 'next/link'
import Router from 'next/router'

import { REFILL_PATIENTS, HOME_PAGE } from '../../../routes/RouteConstant'

import { getReplacedString } from '../../../utils/replaceConstants'

const styles = theme => ({
  horizontalSubheader: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    margin: theme.spacing.unit * 1.2,
    marginTop: 0
  },
  subHeaderItem: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'row',
    '&:hover': {
      color: theme.palette.primary.main
    },
    '&active, &link': {
      color: theme.palette.primary.main
    }
  },
  subHeaderText: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGrey.grey500,
    paddingLeft: theme.spacing.unit * 2.25,
    cursor: 'pointer'
  },
  hover: {
    color: theme.palette.primary.main
  }
  // linkDisabled: {
  //   pointerEvents: 'none', // This makes it not clickable
  //   opacity: 0.6 // This grays it out to look disabled
  // }
})

// IGNORE React.Component linter warning in js standard style

class Subheader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hover: {}
    }
    this.toggleHover = this.toggleHover.bind(this)
    this.redirectToRefill = this.redirectToRefill.bind(this)
  }

  toggleHover (item) {
    this.setState(prevState => ({
      hover: {
        [item]: !prevState.hover[item]
      }
    }))
  }

  redirectToRefill () {
    if (this.props.isAuthenticated) {
      const url = getReplacedString(REFILL_PATIENTS)
      Router.push(url)
    } else {
      this.props.openLoginModal.call(this)
    }
  }

  render () {
    const { classes } = this.props

    return (
      <ul className={classes.horizontalSubheader}>
        <li>
          <Link href={HOME_PAGE}>
            <a
              onMouseEnter={this.toggleHover.bind(this, 'orderMedicine')}
              onMouseLeave={this.toggleHover.bind(this, 'orderMedicine')}
              href='#'
              className={classes.subHeaderItem}
            >
              {/* <img
                src='/static/images/order-med.svg'
              /> */}
              <Typography
                variant={'body2'}
                className={
                  this.state.hover.orderMedicine
                    ? `${classes.subHeaderText} ${classes.hover}`
                    : classes.subHeaderText
                }
                component='h1'
              >
                Order Medicine
              </Typography>
            </a>
          </Link>
        </li>
        <li>
          <a
            onClick={this.redirectToRefill}
            onMouseEnter={this.toggleHover.bind(this, 'repeatPastMedicine')}
            onMouseLeave={this.toggleHover.bind(this, 'repeatPastMedicine')}
            className={classes.subHeaderItem}
          >
            {/* <img src='/static/images/repeat-button.svg' /> */}
            <Typography
              variant={'body2'}
              className={
                this.state.hover.repeatPastMedicine
                  ? `${classes.subHeaderText} ${classes.hover}`
                  : classes.subHeaderText
              }
              component='h1'
            >
              Refill Past Medicines
            </Typography>
          </a>
        </li>
        <li>
          <a
            onMouseEnter={this.toggleHover.bind(this, 'diseases')}
            onMouseLeave={this.toggleHover.bind(this, 'diseases')}
            href='https://blog.lifcare.in/'
            target='_blank'
            className={classes.subHeaderItem}
          >
            {/* <img src='/static/images/repeat-button.svg' /> */}
            <Typography
              variant={'body2'}
              className={
                this.state.hover.diseases
                  ? `${classes.subHeaderText} ${classes.hover}`
                  : classes.subHeaderText
              }
              component='h1'
            >
              Diseases
            </Typography>
          </a>
        </li>
        <li>
          <a
            onMouseEnter={this.toggleHover.bind(this, 'healthContent')}
            onMouseLeave={this.toggleHover.bind(this, 'healthContent')}
            href='https://blog.lifcare.in/'
            target='_blank'
            className={classes.subHeaderItem}
          >
            {/* <img src='/static/images/blog.svg' /> */}
            <Typography
              variant={'body2'}
              className={
                this.state.hover.healthContent
                  ? `${classes.subHeaderText} ${classes.hover}`
                  : classes.subHeaderText
              }
              component='h1'
            >
              Health & Content
            </Typography>
          </a>
        </li>
      </ul>
    )
  }
}

export default withStyles(styles)(Subheader)
