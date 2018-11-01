import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
const styles = theme => {
    return {
        articleWrapper: {
            paddingLeft: theme.spacing.unit * 5.9375,
            paddingRight: theme.spacing.unit * 4.625,
            backgroundColor: theme.palette.customGrey.grey50,
            paddingBottom: theme.spacing.unit * 8.75,
            paddingTop: theme.spacing.unit * 5.125
          },
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
      },
      footerContent : {
            ...theme.typography.body2,
            color : theme.palette.customGrey.grey500,
            wordBreak : 'normal',
            whiteSpace : 'normal'
        },
        footerHeading : {
            ...theme.typography.subheading,
            color: theme.palette.customGrey.grey500,
            fontWeight: theme.typography.fontWeightBold,
            marginBottom: theme.spacing.unit,
            fontSize: theme.typography.pxToRem(16),
            marginTop: theme.spacing.unit * 4
        },
        foortersubpoints : {
            ...theme.typography.body2,
            color: theme.palette.customGrey.grey500
        },
        footerhyperlink : { 
            ...theme.typography.body2,
            color: theme.palette.primary.main,
            fontWeight: theme.typography.fontWeightBold,
        },
        lastContent: {
            ...theme.typography.body2,
            color : theme.palette.customGrey.grey500,
            marginBottom: theme.spacing.unit * 4
        }
    }
  }

  class HomePageContent extends Component {
    render(){
        return(
            <div className={this.props.classes.articleWrapper}>
                
                <Typography variant={'subheading'} className={this.props.classes.footerHeading}>
                    LifCare - Your trusted partner in effortless online medicine delivery in India!
                </Typography>
                <Typography variant={'body2'} className={this.props.classes.footerContent}>
                    LifCare is a leading subscription-based online pharmacy in India that caters to patients with chronic diseases like Diabetes, Hypertension, Gastritis, Asthma, Arthritis, Kidney, Cardiac, Neuro conditions etc. The primary goal at LifCare is to provide complete convenience and accessibility of medicines to all chronic patients at a very affordable price. LifCare currently serves 3,00,000+ chronic patients across Delhi NCR, Rajasthan and Uttar Pradesh for their monthly medicine needs.
                </Typography>
                <Typography variant={'subheading'} className={this.props.classes.footerHeading}>
                    We are a one-stop solution for all your chronic disease management needs!
                </Typography>
                <Typography variant={'body2'} className={this.props.classes.footerContent}>
                    LifCare not only gets your medicines delivered to your doorstep every month proactively, but also provides related services like,
                </Typography>
                <Typography variant={'body2'} className={this.props.classes.foortersubpoints}>
                    <ul>
                        <li>Diagnostic lab tests at home </li>
                        <li>Free doctor tele-consultation</li>
                        <li>Diet & Lifestyle counseling </li>
                    </ul>    
                </Typography>
                <Typography variant={'subheading'} className={this.props.classes.footerHeading}>
                    Hassle-Free Online Medicine Shopping App & Medicine Home Delivery
                </Typography>
                <Typography variant={'body2'} className={this.props.classes.footerContent}>
                Purchase medicines from LifCare’s online medicine app and get additional discounts applicable only on the mobile app. Make medicine shopping even more convenient -
                </Typography>
                <Typography variant={'body2'} className={this.props.classes.foortersubpoints}>
                    <ul>
                        <li>Simply upload your prescription on the mobile app</li>
                        <li>Let our in-house doctors provide free consultation over the phone</li>
                        <li>Purchase medicines from our online medicine store</li>
                        <li>Have them delivered to your house every month</li>
                    </ul>    
                </Typography>

                <Typography variant={'subheading'} className={this.props.classes.footerHeading}>
                    FREE On-Call Doctor and Diet Consultation
                </Typography>
                <Typography variant={'body2'} className={this.props.classes.footerContent}>
                    LifCare offers free doctor consultation by professional doctors specialized in your therapeutic area. You can take a second opinion with LifCare doctors who will address all your disease and medicine related queries elaborately. You can also avail diet and lifestyle counseling from expert certified dietitians and nutritionists.
                </Typography>

                <Typography variant={'subheading'} className={this.props.classes.footerHeading}>
                    Pathology Lab Tests & full body health checkups from Home
                </Typography>
                <Typography variant={'body2'} className={this.props.classes.footerContent}>
                LifCare provides full body health checkup through 83 pathological tests at discounted prices from home. Lab assistants will collect samples from your house and the results would be shared with you online, without you having to wait for hours at a diagnostic center.
All our tests are conducted by NABL- certified labs under the supervision of a highly skilled lab professional.
                </Typography>

                <Typography variant={'subheading'} className={this.props.classes.footerHeading}>
                    We are waiting for your call 
                </Typography>
                <Typography variant={'body2'} className={this.props.classes.footerContent}>
                We are constantly on the path of helping more and more people get their medicines on time and we'd love to have you on board with us on this journey.
Call us on 8302032000 or drop us an e-mail at <a className={this.props.classes.footerhyperlink} href='mailto:care@lifcare.in'>care@lifcare.in</a> to connect with us. You can also download our mobile app from <a className={this.props.classes.footerhyperlink} href="https://play.google.com/store/apps/details?id=com.lifcare.launch&hl=en">Google PlayStore</a> and <a className={this.props.classes.footerhyperlink} href="https://itunes.apple.com/in/app/lifcare/id1254964377?mt=8">iOS AppStore</a>.
                </Typography>
            </div>
        )
    }
  }

  export default withStyles(styles)(HomePageContent)


