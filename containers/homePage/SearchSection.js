import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Search from '../../components/layouts/headerV2/Search'

const styles = theme => {
  return {
    imageStyle: {
      width: '100%',
      height: theme.spacing.unit * 52.5,
      backgroundImage: `url(/static/images/headerBg.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    textStyle: {
      ...theme.typography.title,
      fontSize: theme.typography.pxToRem(32),
      textAlign: 'center',
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightBold,
      paddingTop: theme.spacing.unit * 35.5,
      marginBottom: theme.spacing.unit * 2.75
    }
  }
}

class SearchSection extends Component {
  render () {
    return (
      <div className={this.props.classes.imageStyle} id='search-section'>
        <Typography variant='body1' className={this.props.classes.textStyle}>
          Never miss taking your medication for Diabetes
        </Typography>
        <Search
          searchMedicineState={this.props.searchMedicineState}
          checkPincodeState={this.props.checkPincodeState}
          searchMedicineLoading={this.props.searchMedicineLoading}
          addToCartHandler={this.props.addToCartHandler}
          cartState={this.props.cartState}
          uploadPrescriptionLoading={this.props.uploadPrescriptionLoading}
          resetSearchMedicineState={this.props.resetSearchMedicineState}
        />
      </div>
    )
  }
}

export default withStyles(styles)(SearchSection)
