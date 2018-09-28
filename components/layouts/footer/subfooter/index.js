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
  }
})

const SubFooter = ({classes}) => (
  <Paper
    className={classes.root}
    elevation={1}
    component='div'
    square
  >
    <div className={classes.footerInnerWrapper}>
      <CompanyInfo />
      <ContactUs />
      <Categories />
      <OurApp />
    </div>
  </Paper>
)

export default withStyles(styles)(SubFooter)
