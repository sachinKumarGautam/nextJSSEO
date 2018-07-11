import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import CompanyInfo from './CompanyInfo'
import ContactUs from './ContantUs'
import Categories from './Categories'
import OurApp from './OurApp'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 7,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
    backgroundColor: '#4a4a4a',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  footerInnerWrapper: {
    maxWidth: '1366px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
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
