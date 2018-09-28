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
  const { size } = props
  return (
    <CircularProgress
      className={props.customStyle}
      size={size || 50}
      thickness={props.thickness ? props.thickness : 4}
    />
  )
}

export default withStyles(styles)(CommonSpinner)
