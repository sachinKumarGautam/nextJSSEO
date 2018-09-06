import { withStyles } from '@material-ui/core/styles'
import CheckIcon from '@material-ui/icons/Check'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  alreadyAdded: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    display: 'inline-block'
  },
  outerWrapper: {
    display: 'flex'
  }
})

const AlreadyAdded = ({ classes }) => (
  <div className={classes.outerWrapper}>
    <CheckIcon color={'primary'} />
    <Typography component={'h4'} className={classes.alreadyAdded}>
      Added
    </Typography>
  </div>
)

export default withStyles(styles)(AlreadyAdded)
