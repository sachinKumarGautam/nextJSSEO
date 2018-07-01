import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    flexGrow: 1,
    paddingRight: 'auto',
    position: 'relative',
    transition: 'padding-right .3s ease-out',
    boxShadow: 'none'
  },
  buttonloader: {
    flexGrow: 1,
    paddingRight: theme.spacing.unit * 5,
    position: 'relative',
    transition: 'padding-right .2s ease-in',
    boxShadow: 'none'
  },
  wrapper: {
    position: 'relative'
  },
  loaderPrimary: {
    color: theme.palette.primary.main,
    position: 'absolute',
    top: '50%',
    marginTop: -(theme.spacing.unit * 1.5),
    marginLeft: -(theme.spacing.unit * 4.25)
  },
  loader: {
    color: theme.palette.common.white,
    position: 'absolute',
    top: '50%',
    marginTop: -(theme.spacing.unit * 1.5),
    marginLeft: -(theme.spacing.unit * 4.25)
  }
})

const CommonButton = (buttonProps) => {
  const { classes, isloading, loaderSize, loaderColor } = buttonProps
  return (
    <div>
      <div
        className={classes.wrapper}
      >
        <Button
          className={isloading ? classes.buttonloader : classes.button}
          {...buttonProps}
        >
          {buttonProps.label}
        </Button>
        {isloading && <CircularProgress
          size={loaderSize || 22}
          className={loaderColor ? classes.loaderPrimary : classes.loader}
        />}
      </div>
    </div>
  )
}

export default withStyles(styles)(CommonButton)
