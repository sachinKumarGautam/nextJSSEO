import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
  spinnerWrapper: {
    // margin: theme.spacing.unit * 2,
    position: 'relative',
    margin: 'auto'
  },
  progressWrapper: {
    margin: '0 auto',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

function CommonSpinner (props) {
  const { classes, customStyle, size } = props
  const loaderClassNames = `${classes.progressWrapper} ${classes.customStyle}`
  return (
    <CircularProgress
      className={props.customStyle}
      size={size || 50}
      thickness={2}
    />
  )
}

export default withStyles(styles)(CommonSpinner)
