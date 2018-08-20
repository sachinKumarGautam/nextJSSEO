import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  },
  progressWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

function CommonSpinner (props) {
  const { classes } = props
  return (
    <div className={classes.progressWrapper}>
      <CircularProgress className={classes.progress} size={50} thickness={2} />
    </div>
  )
}

export default withStyles(styles)(CommonSpinner)
