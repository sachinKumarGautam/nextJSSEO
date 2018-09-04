import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
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
  centerLoader: {
    color: theme.palette.primary.main,
    position: 'absolute',
    margin: '0 auto',
    top: '50%',
    left: '50%',
    marginTop: -(theme.spacing.unit * 1.5),
    marginLeft: -(theme.spacing.unit * 1.5)
  },
  loader: {
    color: theme.palette.common.white,
    position: 'absolute',
    top: '50%',
    marginTop: -(theme.spacing.unit * 1.5),
    marginLeft: -(theme.spacing.unit * 4.25)
  }
})

function getButtonLoaderClassNames (loaderColor, loaderPosition, classes) {
  let className = ''
  if (loaderPosition) className = classes.centerLoader
  else if (loaderColor) className = classes.centerLoader
  else className = classes.loader
  return className
}

const CommonButton = buttonProps => {
  const {
    classes,
    size,
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
    className,
    loaderPosition
  } = buttonProps
  return (
    <React.Fragment>
      <div className={classes.wrapper}>
        <Button
          variant={variant || null}
          className={
            isloading && !loaderPosition
              ? classNames(className, classes.buttonloader)
              : classNames(className, classes.button)
          }
          type={type || 'text'}
          size={size}
          color={color}
          href={href || null}
          mini={mini || null}
          disabled={
            (loaderPosition === 'center' && isloading) || disabled || null
          }
          fullWidth={fullWidth || null}
          classes={{
            root: classes.root || {},
            label: classes.label
          }}
          onClick={onClick}
        >
          {label}
        </Button>
        {isloading &&
          <CircularProgress
            size={loaderSize || 22}
            className={getButtonLoaderClassNames(
              loaderColor,
              loaderPosition,
              classes
            )}
          />}
      </div>
    </React.Fragment>
  )
}

export default withStyles(styles)(CommonButton)
