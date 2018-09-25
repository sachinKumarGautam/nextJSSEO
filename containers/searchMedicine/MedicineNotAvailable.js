import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  paper: {
    position: 'absolute',
    maxHeight: theme.spacing.unit * 50,
    overflow: 'scroll',
    zIndex: 1,
    left: 0,
    right: 0,
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 2,
    width: 'auto'
  }
})

const MedicineNotAvailable = ({ classes }) => {
  return (
    <Paper className={classes.paper}>
      <Typography>
        This Medicine is not available with us currently.
      </Typography>
    </Paper>
  )
}

export default withStyles()(MedicineNotAvailable)
