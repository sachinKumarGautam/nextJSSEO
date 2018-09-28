import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Search from '../../components/layouts/headerV2/Search'
import Slider from 'react-slick'
import { Grid } from '@material-ui/core'

const styles = theme => {
  return {
    imageStyle: {
      width: '100%',
      height: theme.spacing.unit * 52.5,
      backgroundImage: `url(https://res.cloudinary.com/lfcr/image/upload/c_crop,h_1268,q_auto:low,w_1900/v1538141138/media/happy_family.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    textStyle: {
      ...theme.typography.title,
      fontSize: theme.typography.pxToRem(32),
      textAlign: 'right',
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightBold,
      paddingTop: theme.spacing.unit * 35.5,
      marginBottom: theme.spacing.unit * 2.75,
      marginRight: theme.spacing.unit
    },
    diseaseText: {
      ...theme.typography.title,
      fontSize: theme.typography.pxToRem(32),
      textAlign: 'left',
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightBold
    },
    slickGridStyle: {
      paddingTop: theme.spacing.unit * 33.12
    }
  }
}

class SearchSection extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      adaptiveHeight: true,
      nextArrow: <br />,
      prevArrow: <br />,
      cssEase: 'linear',
      vertical: true
    }
    const disease = ['Hypertension', 'Kidney', 'Heart', 'Thyroid', 'Diabetes']
    return (
      <div className={this.props.classes.imageStyle} id='search-section'>
        <Grid container>
          <Grid lg={8} xs={8}>
            <Typography
              variant='body1'
              className={this.props.classes.textStyle}
            >
              Never miss taking your medication for
            </Typography>
          </Grid>
          <Grid lg={4} xs={4} className={this.props.classes.slickGridStyle}>
            <Slider {...settings}>
              {disease.map(disease => {
                return (
                  <div>
                    <Typography
                      variant='body1'
                      className={this.props.classes.diseaseText}
                    >
                      {disease}
                    </Typography>
                  </div>
                )
              })}
            </Slider>
          </Grid>
        </Grid>
        <Search
          searchMedicineState={this.props.searchMedicineState}
          checkPincodeState={this.props.checkPincodeState}
          searchMedicineLoading={this.props.searchMedicineLoading}
          addToCartHandler={this.props.addToCartHandler}
          cartState={this.props.cartState}
          uploadPrescriptionLoading={this.props.uploadPrescriptionLoading}
          resetSearchMedicineState={this.props.resetSearchMedicineState}
          loginState={this.props.loginState}
          updateIsCartOpenLoginFlag={this.props.updateIsCartOpenLoginFlag}
        />
      </div>
    )
  }
}

export default withStyles(styles)(SearchSection)
