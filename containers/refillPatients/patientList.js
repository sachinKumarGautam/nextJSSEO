import React, { Component } from 'react'

import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import SendIcon from '@material-ui/icons/Send'

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white
      }
    }
  },
  primary: {},
  icon: {}
})

class PatientList extends Component {
  render () {
    const { classes } = this.props
    return (
      <div>
        <MenuList>
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <SendIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary='Jyoti Arora' />
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary='Shankar K.' />
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary='Amit Kumar' />
          </MenuItem>
        </MenuList>
      </div>
    )
  }
}

export default withStyles(styles)(PatientList)
