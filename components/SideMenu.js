import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import withRoot from '../src/withRoot'

import MenuItems from './MenuItems'
import SideListItemsLoader from '../components/activityIndicator/loader/SideListItemLoader'
import ActivityIndicator from '../components/activityIndicator'
import { logoutWithReload } from '../utils/removePersistState'

const styles = theme => {
  return {
    nameStyle: {
      ...theme.typography.subheading,
      marginBottom: theme.spacing.unit * 2,
      color: theme.palette.customGrey.grey500
    },
    orderStyle: {
      ...theme.typography.caption,
      color: theme.palette.customGrey.grey500,
      marginTop: theme.spacing.unit,
      marginLeft: theme.spacing.unit * -2
    },
    menuStyle: {
      ...theme.typography.caption,
      color: theme.palette.customGrey.grey500,
      paddingTop: theme.spacing.unit,
      marginLeft: theme.spacing.unit * -2
    }
  }
}

class SideMenu extends Component {
  logout = () => {
    logoutWithReload()
  }

  render () {
    const { isLoading } = this.props
    return (
      <ActivityIndicator
       isLoading={isLoading}
       LoaderComp={<SideListItemsLoader />}
      >
      <div>
        <p className={this.props.classes.nameStyle}>
          {this.props.customerState.payload.full_name}
        </p>
        <MenuItems
          customOrderStyle={this.props.classes.orderStyle}
          customMenuStyle={this.props.classes.menuStyle}
          isSideMenu
          logout={this.logout}
        />
      </div>
      </ActivityIndicator>
    )
  }
}

function mapStateToProps (state) {
  return {
    customerState: state.customerState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRoot(withStyles(styles)(SideMenu))
)
