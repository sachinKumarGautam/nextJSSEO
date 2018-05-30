import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
})

const SubFooter = ({classes}) => (
  <div>
    <Paper className={classes.root} elevation={4}>
      <Typography variant='headline' component='h3'>
          This is where copyright info will be
      </Typography>
    </Paper>
  </div>
)

export default withStyles(styles)(SubFooter)
