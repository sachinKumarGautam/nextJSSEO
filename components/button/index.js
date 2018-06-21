import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  button: {
    flexGrow: 0,
    borderRadius: theme.spacing.unit * 4,
    position: 'absolute'
  },
  wrapper: {
    position: 'relative',
    border: '1px solid black',
    borderRadius: theme.spacing.unit * 4,
    height: '100%'
  },
  buttonLabel: {
    position: 'absolute',
    left: '0'
  },
  container: {
    boxSizing: 'border-box',
    margin: '40px auto',
    padding: 5,
    width: 600,
    borderRadius: 10,
    background: '#FFF'
  },
  bar: {
    // borderRadiusRight: theme.spacing.unit * 4,
    // borderTopLeftRadius: theme.spacing.unit * 4,
    height: '40px',
    position: 'absolute',
    left: '0',
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

  /* ANIMATION
  ----------------------------------------- */

  // @-webkit-keyframes progress {
  //   0%    { width: 0%; }
  //   30%   { width: 50% }
  //   70%   { width: 80% }
  //   100%  { width: 100%; }
  // }

})

const CommonButton = (buttonProps) => (
  <div
    className={buttonProps.classes.wrapper}
  >
    <Button
      className={buttonProps.classes.button}
      disableRipple
      // disabled={buttonProps.isLoading}
      {...buttonProps}
    >
      {buttonProps.label}
      <span 
      className={buttonProps.isLoading ? buttonProps.classes.bar : buttonProps.classes.buttonLabel}
      />
    </Button>
    
  </div>
)

export default withStyles(styles)(CommonButton)
