import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import ReactTooltip from 'react-tooltip'

import Link from 'next/link'

const styles = theme => {
  return {
    moleculeTag: {
      ...theme.typography.subheading,
      textDecoration: 'none',
      borderBottom: '1px dashed',
      marginRight: theme.spacing.unit * 2,
      color: theme.palette.customGrey.grey600
    },
    paper: {
      padding: theme.spacing.unit,
      width: theme.spacing.unit * 25,
      backgroundColor: `${theme.palette.customGrey.grey50} !important`,
      pointerEvents: 'auto !important',
      '&:after': {
        borderRightColor: `${theme.palette.customGrey.grey50} !important`
      },
      '&:hover': {
        visibility: 'visible !important',
        opacity: '1 !important'
      },
      borderRadius: '4px'
    },
    popoverContent: {
      ...theme.typography.body3
    },
    popoverLink: {
      ...theme.typography.body3,
      color: theme.palette.primary.main,
      textDecoration: 'none'
    },
    horizontalItem: {
      display: 'flex',
      flexDirection: 'row'

    }
  }
}

const PopoverContent = (props) => (
  <div>
    <Typography className={props.styles.popoverContent}>
      Metformin is used in the treatment of  type2 diabetes. It decreases the amount of sugar…
    </Typography>
    <Link as={`/molecule-details/Multivitamin`} href={`/molecule-details?id=5a61a295ae8bdc26685f2b09`}>
      <a className={props.styles.popoverLink}>Read more..</a>
    </Link>
  </div>
)

class ProductMolecule extends Component {
  render () {
    const {classes} = this.props

    return (
      <div className={classes.horizontalItem}>
        {
          this.props.salts && this.props.salts.length && this.props.salts.map((item) => (
            <div>
              <a
                href='#'
                className={classes.moleculeTag}
                // onClick={this.handlePopoverOpen}
                data-tip
                data-for='moleculeItem'
                // onMouseOver={this.handlePopoverOpen}
                // onMouseOut={this.handlePopoverClose}
              >
                {item.name}
              </a>
              {/* <ReactTooltip
              id='moleculeItem'
              effect='solid'
              place='right'
              className={classes.paper}
              delayHide={1000}
              delayShow={1000}
            >
              <PopoverContent styles={classes} />
            </ReactTooltip> */}
            </div>
          )
          )
        }
      </div>
    )
  }
}

export default withStyles(styles)(ProductMolecule)
