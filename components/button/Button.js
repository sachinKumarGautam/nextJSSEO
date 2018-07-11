import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import CircularProgress from '@material-ui/core/CircularProgress'
import {SignalCellularNull} from '@material-ui/icons'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    flexGrow: 1,
    position: 'relative',
    transition: 'padding-right .3s ease-out',
    boxShadow: 'none',
    padding: `${theme.spacing.unit / 1.6}px ${theme.spacing.unit * 1.25}px`
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
  const {
    classes,
    isloading,
    loaderSize,
    loaderColor,
    label,
    href,
    mini,
    variant,
    disabled,
    fullWidth,
    color,
    type,
    onClick,
    className
  } = buttonProps
  return (
    <div>
      <div
        className={classes.wrapper}
      >
        <Button
          className={isloading
            ? classNames(className, classes.buttonloader)
            : classNames(className, classes.button)
          }
          type={type || SignalCellularNull}
          color={color}
          href={href || null}
          mini={mini || null}
          disabled={disabled || null}
          fullWidth={fullWidth || null}
          variant={variant || null}
          classes={{
            root: classes.root || {},
            label: classes.label
          }}
          onClick={onClick}
        >
          {label}
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
