import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    flexGrow: 0,
    // borderRadius: theme.spacing.unit * 4,
    // position: 'relative',
    width: '100%'
  },
  wrapper: {
    position: 'relative',
    // // width: 'auto',
    // display: 'block',
    // overflow: 'auto',
    // border: '1px solid black',
    // borderRadius: theme.spacing.unit * 4,
    // height: '100%'
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonLabel: {
    // position: 'absolute',
    // left: '0',
    // top: '0'
  },
  // container: {
  //   boxSizing: 'border-box',
  //   margin: '40px auto',
  //   padding: 5,
  //   width: 600,
  //   borderRadius: 10,
  //   background: '#FFF'
  // },
  bar: {
    borderRadiusRight: theme.spacing.unit * 4,
    borderTopLeftRadius: theme.spacing.unit * 4,
    height: '40px',
    position: 'absolute',
    left: '0',
    top: '0',
    // borderRadius: 10,
    background: '#80c241',
    opacity: '0.5',
    WebkitAnimationName: 'progress',
    animationName: 'progress',
    animationIterationCount: 'infinite',
    // animationDirection: 'alternate',
    animationDuration: '4s',
    WebkitAnimationDuration: '2s',
    WebkitAnimationTimingFunction: 'linear',
    animationTimingFunction: 'linear'
  },
  '@keyframes progress': {
    '0%': {
      width: '0%'
    },
    '30%': {
      width: '50%'
    },
    '70%': {
      width: '80%'
    },
    '100%': {
      width: '100%'
    }
  }
})

const CommonButton = (buttonProps) => {
  const { classes, isLoading, loaderSize } = buttonProps
  return (
    <div
      className={classes.wrapper}
    >
      <Button
        className={classes.button}
        disableRipple
        disabled={buttonProps.isLoading} // buttonProps.isLoading
        {...buttonProps}
      >
        {buttonProps.label}
      </Button>
      {isLoading && 
        <CircularProgress 
            size={loaderSize ? loaderSize : 24} 
            className={classes.buttonProgress}        
        />
        }
    </div>
  )
}

export default withStyles(styles)(CommonButton)
