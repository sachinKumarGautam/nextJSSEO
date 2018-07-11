import React, {Component} from 'react'

import Slider from "react-slick";
import { withStyles } from '@material-ui/core/styles'

// import '../../pages/index.css'

const styles = theme => {
  return {
    container: {
      margin: '0 auto',
      padding: '35px 0px',
      color: '#333',
      background: '##80c241',
    }
  }
}

class HomePageWrapper extends Component {
  render () {
    let settings= {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    }
    return (
      <div className={this.props.classes.container}>
        <Slider {...settings}>
          {
            this.props.homePageState.backGroundImage.payload.map((item) => {
              return (
                <div>
                  <img src={item.image}/>
                </div>
              )
            })
          }
        </Slider>
      </div>
    )
  }
}

export default withStyles(styles)(HomePageWrapper)
