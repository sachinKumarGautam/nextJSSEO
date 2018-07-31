import React, {Component} from 'react'

import Slider from 'react-slick'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    imageStyle: {
      width: '100%'
    }
  }
}

class HomePageWrapper extends Component {
  render () {
    let settings = {
      dots: false,
      arrows: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    }
    return (
      <Slider {...settings}>
        {
          this.props.homePageState.backGroundImage.payload.map((item) => {
            return (
              <div>
                <img src={item.image} className={this.props.classes.imageStyle} />
              </div>
            )
          })
        }
      </Slider>
    )
  }
}

export default withStyles(styles)(HomePageWrapper)
