import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  button: {
    color: 'white',
    flexGrow: 0,
    borderRadius: theme.spacing.unit * 4
  }
})

const CommonButton = (buttonProps) => (
  <Button
    className={buttonProps.classes.button}
    {...buttonProps}
  >
    {buttonProps.label}
  </Button>
)

export default withStyles(styles)(CommonButton)
