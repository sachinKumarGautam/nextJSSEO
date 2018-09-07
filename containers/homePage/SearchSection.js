import React, {Component} from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SearchMedicine from '../searchMedicine/index'
import Button from '@material-ui/core/Button'

const styles = theme => {
  return {
    imageStyle: {
      width: '100%',
      height: theme.spacing.unit * 40.75,
      backgroundImage: `url(/static/images/headerBg.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    textStyle: {
      ...theme.typography.title,
      textAlign: 'center',
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightBold,
      paddingTop: theme.spacing.unit * 27.125,
      marginBottom: theme.spacing.unit * 1.5
    },
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
      marginLeft: theme.spacing.unit * 24,
      marginRight: theme.spacing.unit * 24
    },
    button: {
      margin: theme.spacing.unit,
      backgroungColor: theme.palette.primary.main
    },
    buttonlabel: {
      ...theme.typography.caption,
      fontWeight: theme.typography.fontWeightBold,
      paddingLeft: theme.spacing.unit * 5.25,
      paddingRight: theme.spacing.unit * 5.25,
      color: theme.palette.secondary.main
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
    }
  }
}

class SearchSection extends Component {
  render () {
    return (
      <div className={this.props.classes.imageStyle} id='search-section'>
        <Typography
          variant='body1'
          className={this.props.classes.textStyle}
        >
          Never miss taking your medication for Diabetes
        </Typography>
        <div className={this.props.classes.searchWrapper}>
          <SearchMedicine
            searchMedicineState={this.props.searchMedicineState}
            checkPincodeState={this.props.checkPincodeState}
            searchMedicineLoading={this.props.searchMedicineLoading}
            addToCartHandler={this.props.addToCartHandler}
            cartState={this.props.cartState}
          />
          <Typography
            variant='body1'
            className={this.props.classes.orTextStyle}
          >
              OR
          </Typography>
          <input
            className={this.props.classes.pickerListInput}
            id='file'
            type='file'
            accept='image/*'
            // onChange={props.onImageSelection.bind(this)}
          />
          <label
            for='file'
          >
            <Button
              variant='raised'
              color='primary'
              className={this.props.classes.button}
              classes={{
                label: this.props.classes.buttonlabel
              }}
            >
              <label
                for='file'
              >
                  Upload Prscription
              </label>
            </Button>
          </label>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(SearchSection)
