import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import CompanyInfo from './CompanyInfo'
import ContactUs from './ContantUs'
import Categories from './Categories'
import OurApp from './OurApp'
import Typography from '@material-ui/core/Typography'

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
    ...theme.typography.body1,
    color : theme.palette.customGrey.grey200,
    marginBottom: theme.spacing.unit * 2
  },
  footerHeading : {
    ...theme.typography.subheading,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing.unit * 3,
    fontSize: theme.typography.pxToRem(16)
  },
  lastContent: {
    ...theme.typography.body1,
    color : theme.palette.customGrey.grey200,
    marginBottom: theme.spacing.unit * 4
  }
})

const SubFooter = ({classes}) => (
  <Paper
    className={classes.root}
    elevation={1}
    component='div'
    square
  >
    <div>
      <Typography variant={'subheading'} className={classes.footerHeading}>
        Welcome to LifCare - your one-stop solution for all chronic disease management needs!
      </Typography>
      <Typography variant={'body2'} className={classes.footerContent}>
        LifCare is a subscription-based online pharmacy for chronic patients suffering from diabetes, hypertension, asthma, arthritis, gastritis, kidney, cardiac & neuro illnesses etc.
      </Typography>
      <Typography variant={'body2'} className={classes.footerContent}>
        All LifCare members get exclusive benefits like FLAT discounts on every Online medicine order for the lifetime along with privileges like free doctor teleconsultation, diet counselling, and diagnostic lab tests for health checkups etc.
      </Typography>
      <Typography variant={'body2'} className={classes.lastContent}>
        The official online medicine shopping app by LifCare allows additional benefits like easy one-click medicine re-fills, monthly reminders and additional discounts applicable only on the mobile app.
      </Typography>
    </div>
    
    <div className={classes.footerInnerWrapper}>
      <CompanyInfo />
      <ContactUs />
      <Categories />
      <OurApp />
    </div>
  </Paper>
)

export default withStyles(styles)(SubFooter)
