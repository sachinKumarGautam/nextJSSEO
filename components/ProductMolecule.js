import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'

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
      backgroundColor: theme.palette.customGrey.grey50
    },
    popoverContent: {
      ...theme.typography.body3
    },
    popoverLink: {
      ...theme.typography.body3,
      color: theme.palette.primary.main,
      textDecoration: 'none'
    }
  }
}

class ProductMolecule extends Component {
  constructor (props) {
    super(props)
    this.state = {
      anchorEl: null,
      popperOpen: false
    }

    this.handlePopoverOpen = this.handlePopoverOpen.bind(this)
    this.handlePopoverClose = this.handlePopoverClose.bind(this)
  }

  handlePopoverOpen (event) {
    this.setState({ anchorEl: event.target })
  }

  handlePopoverClose () {
    this.setState({ anchorEl: null })
  }

  render () {
    const {classes} = this.props
    // const open = !!this.state.anchorEl

    return (
      <div>
        <a
          href='#'
          className={classes.moleculeTag}
          onClick={this.handlePopoverOpen}
          onMouseOver={this.handlePopoverOpen}
          // onMouseOut={this.handlePopoverClose}
        >
          Glimepiride (0.5mg)
        </a>
        <a
          href='#'
          className={classes.moleculeTag}
          onClick={this.handlePopoverOpen}
          onMouseOver={this.handlePopoverOpen}
          // onMouseOut={this.handlePopoverClose}
        >
          Metformin (1000mg)
        </a>
        <Popover
          classes={{
            paper: classes.paper
          }}
          open={Boolean(this.state.anchorEl)}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left'
          }}
          onClose={this.handlePopoverClose}
          // disableRestoreFocus
        >
          <Typography className={classes.popoverContent}>
            Metformin is used in the treatment of  type2 diabetes. It decreases the amount of sugar…
          </Typography>
          <a className={classes.popoverLink}>Read more..</a>
        </Popover>
      </div>
    )
  }
}

export default withStyles(styles)(ProductMolecule)
