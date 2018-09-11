import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import ReactTooltip from 'react-tooltip'

import Link from 'next/link'

import { MOLECULE_DETAILS } from '../routes/RouteConstant'
const styles = theme => {
  return {
    moleculeTag: {
      ...theme.typography.body2,
      textDecoration: 'none',
      borderBottom: `1px dashed ${theme.palette.customGrey.grey200}`,
      marginRight: theme.spacing.unit * 3.375,
      color: theme.palette.customGrey.grey600,
      '&:hover': {
        color: theme.palette.primary.main,
        borderBottom: `1px dashed ${theme.palette.primary.main}`
      }
    },
    paper: {
      padding: theme.spacing.unit * 1.5,
      boxShadow: '0 0 6px 0 rgba(224, 224, 224, 0.72)',
      maxWidth: theme.spacing.unit * 25,
      backgroundColor: `${theme.palette.customGrey.grey50} !important`,
      pointerEvents: 'auto !important',
      '&:after': {
        borderBottomColor: `${theme.palette.customGrey.grey50} !important`
      },
      '&:hover': {
        visibility: 'visible !important',
        opacity: '1 !important'
      },
      opacity: '1 !important',
      borderRadius: '4px'
    },
    popoverContent: {
      fontSize: theme.typography.pxToRem(12),
      color: theme.palette.customGrey.grey500,
      marginBottom: theme.spacing.unit
    },
    popoverLink: {
      ...theme.typography.body3,
      color: theme.palette.primary.main,
      fontSize: theme.typography.pxToRem(14),
      textDecoration: 'none'
    },
    horizontalItem: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  }
}

const PopoverContent = props => (
  <div>
    {props.item.description
      ? <Typography className={props.styles.popoverContent}>
        {props.item.description}
      </Typography>
      : null}
    <Link
      as={`${MOLECULE_DETAILS}/${props.item.slug}`}
      href={`${MOLECULE_DETAILS}?id=${props.item.slug}`}
    >
      <a className={props.styles.popoverLink}>Read more..</a>
    </Link>
  </div>
)

class ProductMolecule extends Component {
  render () {
    const { classes } = this.props

    return (
      <div className={classes.horizontalItem}>
        {this.props.salts &&
          this.props.salts.length &&
          this.props.salts.map((item, index) => {
            let popperId = 'moleculeItem' + index
            return (
              <div>
                <a
                  href='#'
                  className={classes.moleculeTag}
                  // onClick={this.handlePopoverOpen}
                  data-tip
                  data-for={popperId}
                  // onMouseOver={this.handlePopoverOpen}
                  // onMouseOut={this.handlePopoverClose}
                >
                  {item.name}
                </a>
                <ReactTooltip
                  id={popperId}
                  effect='solid'
                  place='bottom'
                  className={classes.paper}
                  delayHide={250}
                  delayShow={250}
                >
                  <PopoverContent item={item} styles={classes} />
                </ReactTooltip>
              </div>
            )
          })}
      </div>
    )
  }
}

export default withStyles(styles)(ProductMolecule)
