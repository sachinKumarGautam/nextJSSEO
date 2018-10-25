import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import CompanyInfo from './CompanyInfo'
import ContactUs from './ContantUs'
import Categories from './Categories'
import OurApp from './OurApp'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 5.37,
    paddingLeft: theme.spacing.unit * 9.75,
    paddingRight: theme.spacing.unit * 18.875,
    paddingBottom: theme.spacing.unit * 4.25,
    backgroundColor: theme.palette.customGrey.grey500
  },
  footerInnerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  footerContent : {
    color : "#9b9b9b"
  },
  footerHeading : {
    fontWeight : "bold",
    fontSize : "16px",
    color : '#fff'
  },
  aboveFooter : {
    fontFamily : "Lato, sans-serif"
  }
})

const SubFooter = ({classes}) => (
  <Paper
    className={classes.root}
    elevation={1}
    component='div'
    square
  >
    <div className = {classes.aboveFooter}>
      <p className = {classes.footerHeading}>Welcome to LifCare - your one-stop solution for all chronic disease management needs!</p>
      <div className={classes.footerContent}>
        <p>LifCare is a subscription-based online pharmacy for chronic patients suffering from diabetes, hypertension, asthma, arthritis, gastritis, kidney, cardiac & neuro illnesses etc.</p>
        <p>All LifCare members get exclusive benefits like FLAT discounts on every Online medicine order for the lifetime along with privileges like free doctor teleconsultation, diet counselling, and diagnostic lab tests for health checkups etc.</p>
        <p>The official online medicine shopping app by LifCare allows additional benefits like easy one-click medicine re-fills, monthly reminders and additional discounts applicable only on the mobile app.</p>
      </div>
    </div>
    <br/>
    <div className={classes.footerInnerWrapper}>
      <CompanyInfo />
      <ContactUs />
      <Categories />
      <OurApp />
    </div>
  </Paper>
)

export default withStyles(styles)(SubFooter)
