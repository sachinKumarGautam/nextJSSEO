import React, {Component} from 'react'

// import Slider from 'react-slick'
import { withStyles } from '@material-ui/core/styles'
import SearchSection from './SearchSection'
import DiscountDetailSection from './DiscountDetailSection'
import RefillMedicineSection from './RefillMedicineSection'
import HealthManagementSection from './HealthManagementSection'
import MembershipCardDetail from './MembershipCardDetail'
import ArticleSection from './ArticleSection'

const styles = theme => {
  return {
    imageStyle: {
      width: '100%'
    }
  }
}

class HomePageWrapper extends Component {
  render () {
    // let settings = {
    //   dots: false,
    //   arrows: false,
    //   infinite: false,
    //   speed: 1000,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 2000
    // }
    return (
      // <Slider {...settings}>
      //   {
      //     this.props.homePageState.backGroundImage.payload.map((item) => {
      //       return (
      //         <div>
      //           <img src={item.image} className={this.props.classes.imageStyle} />
      //         </div>
      //       )
      //     })
      //   }
      // </Slider>
      <div>
        <SearchSection
          searchMedicineState={this.props.searchMedicineState}
          checkPincodeState={this.props.checkPincodeState}
          searchMedicineLoading={this.props.searchMedicineLoading}
          addToCartHandler={this.props.addToCartHandler}
          cartState={this.props.cartState}
        />
        <DiscountDetailSection />
        <RefillMedicineSection
          loginState={this.props.loginState}
        />
        <HealthManagementSection />
        <MembershipCardDetail
          incrementCartItemLoading={this.props.incrementCartItemLoading}
          cartState={this.props.cartState}
        />
        <ArticleSection />
      </div>
    )
  }
}

export default withStyles(styles)(HomePageWrapper)
