import { withStyles } from '@material-ui/core/styles'
import CheckIcon from '@material-ui/icons/Check'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  alreadyAdded: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit / 2,
    display: 'inline-block'
  },
  outerWrapper: {
    display: 'flex'
  },
  checkIcon: {
    width: theme.spacing.unit * 2.25
  }
})

const AlreadyAdded = ({ classes }) => (
  <div className={classes.outerWrapper}>
    <CheckIcon className={classes.checkIcon} color={'primary'} />
    <Typography component={'h4'} className={classes.alreadyAdded}>
      Added
    </Typography>
  </div>
)

export default withStyles(styles)(AlreadyAdded)
