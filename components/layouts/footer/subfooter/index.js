import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
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
    // marginTop: theme.spacing.unit * 3
  }
})

const SubFooter = ({classes}) => (
  <section>
    <Paper
      className={classes.root}
      elevation={1}
      component='div'
      square
    >
      <CompanyInfo />
      <ContactUs />
      <Categories />
      <OurApp />
    </Paper>
  </section>
)

export default withStyles(styles)(SubFooter)
