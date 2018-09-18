import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Link from 'next/link'
import Router from 'next/router'

import { HOME_PAGE } from '../../../routes/RouteConstant'

import { getReplacedString } from '../../../utils/replaceConstants'
import { Grid } from '@material-ui/core'
import {scrollTo} from '../../../utils/scrollToSections'
import {SCROLL_TO_TOP_HEIGHT} from '../../constants/Constants'

const styles = theme => ({
  horizontalSubheader: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none'
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
})

class Subheader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hover: {}
    }
    this.toggleHover = this.toggleHover.bind(this)
    this.redirectToHealth = this.redirectToHealth.bind(this)
  }

  toggleHover (item) {
    this.setState(prevState => ({
      hover: {
        [item]: !prevState.hover[item]
      }
    }))
  }

  redirectToHealth () {
    const url = getReplacedString(HOME_PAGE)
    const height = this.props.isHomePage ? SCROLL_TO_TOP_HEIGHT : 0
    Router.push(url).then(() => {
      return scrollTo('health-management', height)
    })
  }

  render () {
    const { classes } = this.props

    return (
      <Grid container>
        <Grid item xs={4}>
          <Link href={HOME_PAGE} passHref >
            <a
              onMouseEnter={this.toggleHover.bind(this, 'home')}
              onMouseLeave={this.toggleHover.bind(this, 'home')}
              href='#'
              className={classes.subHeaderItem}
            >
              <Typography
                variant={'body2'}
                className={
                  this.state.hover.home
                    ? `${classes.subHeaderText} ${classes.hover}`
                    : classes.subHeaderText
                }
                component='h1'
              >
                  Home
              </Typography>
            </a>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <a
            onClick={this.redirectToHealth}
            onMouseEnter={this.toggleHover.bind(this, 'health')}
            onMouseLeave={this.toggleHover.bind(this, 'health')}
            className={classes.subHeaderItem}
          >
            <Typography
              variant={'body2'}
              className={
                this.state.hover.health
                  ? `${classes.subHeaderText} ${classes.hover}`
                  : classes.subHeaderText
              }
              component='h1'
            >
              Health
            </Typography>
          </a>
        </Grid>
        <Grid item xs={4}>
          <a
            onClick={this.redirectToHealth}
            onMouseEnter={this.toggleHover.bind(this, 'consultation')}
            onMouseLeave={this.toggleHover.bind(this, 'consultation')}
            className={classes.subHeaderItem}
          >
            <Typography
              variant={'body2'}
              className={
                this.state.hover.consultation
                  ? `${classes.subHeaderText} ${classes.hover}`
                  : classes.subHeaderText
              }
              component='h1'
            >
              Consultation
            </Typography>
          </a>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Subheader)
