import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Link from 'next/link'

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
    }
  },
  subHeaderText: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGrey.grey200,
    paddingLeft: theme.spacing.unit * 2.25
  },
  hover: {
    color: theme.palette.primary.main
  }
})

// IGNORE React.Component linter warning in js standard style

class Subheader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hover: {}
    }
    this.toggleHover = this.toggleHover.bind(this)
  }

  toggleHover (item) {
    this.setState((prevState) => ({
      hover: {
        [item]: !prevState.hover[item]
      }
    })
    )
  }

  render () {
    const {classes} = this.props

    return (
      <ul className={classes.horizontalSubheader}>
        <li>
          <a
            onMouseEnter={this.toggleHover.bind(this, 'orderMedicine')}
            onMouseLeave={this.toggleHover.bind(this, 'orderMedicine')}
            href='#'
            className={classes.subHeaderItem}
          >
            <img src='/static/images/order-med.svg' />
            <Typography
              variant={'body2'}
              className={this.state.hover.orderMedicine ? `${classes.subHeaderText} ${classes.hover}` : classes.subHeaderText}
              component='h1'>
                Order Medicine
            </Typography>
          </a>
        </li>
        <li>
          <Link href={`/refill-patients`}>
            <a
              onMouseEnter={this.toggleHover.bind(this, 'repeatPastMedicine')}
              onMouseLeave={this.toggleHover.bind(this, 'repeatPastMedicine')}
              className={classes.subHeaderItem}
            >
              <img src='/static/images/repeat-button.svg' />
              <Typography
                variant={'body2'}
                className={this.state.hover.repeatPastMedicine ? `${classes.subHeaderText} ${classes.hover}` : classes.subHeaderText}
                component='h1'>
                Refill Past Medicines
              </Typography>
            </a>
          </Link>
        </li>
        <li>
          <a
            onMouseEnter={this.toggleHover.bind(this, 'diseases')}
            onMouseLeave={this.toggleHover.bind(this, 'diseases')}
            href='#'
            className={classes.subHeaderItem}
          >
            <img src='/static/images/repeat-button.svg' />
            <Typography
              variant={'body2'}
              className={this.state.hover.diseases ? `${classes.subHeaderText} ${classes.hover}` : classes.subHeaderText}
              component='h1'>
                Diseases
            </Typography>
          </a>
        </li>
        <li>
          <a
            onMouseEnter={this.toggleHover.bind(this, 'healthContent')}
            onMouseLeave={this.toggleHover.bind(this, 'healthContent')}
            href='#'
            className={classes.subHeaderItem}
          >
            <img src='/static/images/blog.svg' />
            <Typography
              variant={'body2'}
              className={this.state.hover.healthContent ? `${classes.subHeaderText} ${classes.hover}` : classes.subHeaderText}
              component='h1'
            >Health & Content</Typography>
          </a>
        </li>
      </ul>
    )
  }
}

export default withStyles(styles)(Subheader)
