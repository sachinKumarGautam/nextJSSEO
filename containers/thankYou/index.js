import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 12,
    paddingBottom: theme.spacing.unit * 12,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
    maxWidth: theme.breakpoints.values.lg,
    minWidth: theme.breakpoints.values.md,
    margin: '0 auto',
    textAlign: 'center',
    marginTop: theme.spacing.unit * 12
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  }
})

const ThankYou = (props) => (
  <div>
    <Paper className={props.classes.root} elevation={1}>
        <Typography variant="display2" gutterBottom>Thank You for placing order </Typography>
    </Paper>
  </div>
)

export default withStyles(styles)(ThankYou)
