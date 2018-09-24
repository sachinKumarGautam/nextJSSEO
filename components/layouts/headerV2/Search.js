import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SearchMedicine from '../../../containers/searchMedicine/index'
import Router from 'next/router'
import { CART_DETAILS } from '../../../routes/RouteConstant'
import { getReplacedString } from '../../../utils/replaceConstants'

const styles = theme => {
  return {
    orTextStyle: {
      ...theme.typography.caption,
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: theme.spacing.unit * 1.25,
      marginRight: theme.spacing.unit * 1.25
    },
    searchWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: theme.spacing.unit * 24,
      paddingRight: theme.spacing.unit * 24,
      paddingBottom: theme.spacing.unit * 2
    },
    pickerListInput: {
      width: '0.1px',
      height: '0.1px',
      opacity: 0,
      overflow: 'hidden',
      position: 'absolute',
      zIndex: -1
    },
    pickerListLabel: {
      width: theme.spacing.unit * 12.5,
      textAlign: 'center',
      background: theme.palette.common.white,
      padding: theme.spacing.unit * 1.875,
      color: theme.palette.customGrey.grey200,
      borderRadius: theme.spacing.unit * 0.25,
      fontWeight: theme.typography.fontWeightLight,
      flexShrink: 0,
      marginRight: theme.spacing.unit * 0.625,
      border: `1px dashed ${theme.palette.customGrey.grey200}`,
      marginTop: theme.spacing.unit * 1.25,
      marginLeft: theme.spacing.unit * 6.25
    },
    labelStyle: {
      ...theme.typography.caption,
      fontWeight: theme.typography.fontWeightBold,
      paddingLeft: theme.spacing.unit * 5.25,
      paddingRight: theme.spacing.unit * 5.25,
      color: theme.palette.secondary.main,
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      backgroundColor: theme.palette.primary.main,
      cursor: 'pointer',
      display: 'block',
      textAlign: 'center',
      borderRadius: theme.spacing.unit * 3,
      lineHeight: 1.07,
      letterSpacing: '0.3px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 2px 3px rgba(0,0,0,0.24)'
    }
  }
}

class Search extends Component {
  onImageSelection (event) {
    if (!this.props.cartState.payload.uid) {
      const isShowNoCartIdDialog = true

      this.props.updateShowNoCartIdDialogFlag(
        this.props.cartState,
        isShowNoCartIdDialog
      )
    } else {
      this.props.uploadPrescriptionLoading(
        this.props.cartState,
        event.target.files[0],
        true
      )
    }
  }

  componentDidUpdate (prevProps) {
    if (
      this.props.cartState.prescriptionDetails.isHomePage !==
      prevProps.cartState.prescriptionDetails.isHomePage
    ) {
      const url = getReplacedString(CART_DETAILS)
      return Router.push(url)
    }
  }
  render () {
    return (
      <div className={this.props.classes.searchWrapper}>
        <SearchMedicine
          searchMedicineState={this.props.searchMedicineState}
          checkPincodeState={this.props.checkPincodeState}
          searchMedicineLoading={this.props.searchMedicineLoading}
          addToCartHandler={this.props.addToCartHandler}
          cartState={this.props.cartState}
          resetSearchMedicineState={this.props.resetSearchMedicineState}
        />
        <Typography variant='body1' className={this.props.classes.orTextStyle}>
          OR
        </Typography>
        <input
          className={this.props.classes.pickerListInput}
          id='file'
          type='file'
          accept='image/*'
          onChange={this.onImageSelection.bind(this)}
        />
        <label
          for='file'
          className={this.props.classes.labelStyle}
        >
          Upload Prescription
        </label>
      </div>
    )
  }
}

export default withStyles(styles)(Search)
