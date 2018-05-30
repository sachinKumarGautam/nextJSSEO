import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CompanyInfo from './CompanyInfo'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 7,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
    backgroundColor: '#4a4a4a'
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
    </Paper>
  </section>
)

export default withStyles(styles)(SubFooter)
