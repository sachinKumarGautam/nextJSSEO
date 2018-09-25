import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  paper: {
    height: theme.spacing.unit * 5,
    zIndex: 1,
    left: 0,
    right: 0,
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 2,
    width: 'auto',
    boxShadow: 'none'
  },
  text: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  }
})

const MedicineNotAvailable = ({ classes }) => {
  return (
    <Paper className={classes.paper}>
      <Typography className={classes.text}>
        This Medicine is not available with us currently.
      </Typography>
    </Paper>
  )
}

export default withStyles(styles)(MedicineNotAvailable)
