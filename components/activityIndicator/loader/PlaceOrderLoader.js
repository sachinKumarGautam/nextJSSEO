import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Fade from '@material-ui/core/Fade'
import Zoom from '@material-ui/core/Zoom'

import DoneIcon from '@material-ui/icons/Done'

const styles = theme => ({
  // TODO:  need to do fix z-Index
  fullPageWrapper: {
    zIndex: 10410,
    height: '100%',
    width: '100%',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  itemVisible: {
    visibility: 'hidden'
  },
  spinnner: {
    position: 'fixed',
    zIndex: 1040,
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 64,
    height: 64,
    clear: 'both',
    border: `1px ${theme.palette.customGrey.grey200} solid`,
    borderTop: '1px white solid',
    WebkitAnimation: 'spin 1s infinite linear',
    animation: 'spin 1s infinite linear',
    borderRadius: '50%'
  },
  orderPlacedText: {
    marginTop: theme.spacing.unit * 4
  },
  doneIcon: {
    color: theme.palette.primary.main,
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 120,
    height: 120
  },
  successAnimationWrapper1: {
    position: 'fixed',
    zIndex: 1040,
    backgroundColor: theme.palette.primary.main,
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%) !important',
    width: 140,
    height: 140,
    clear: 'both',
    borderRadius: '50%'
  },
  successAnimationWrapper2: {
    position: 'fixed',
    zIndex: 1040,
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)  !important',
    width: 120,
    height: 120,
    clear: 'both',
    borderRadius: '50%'
  },
  paper: {
    height: '50px',
    width: '50px',
    backgroundColor: 'black'
  },
  '@keyframes spin': {
    from: {
      transform: 'translate3d(-50%, -50%, 0) rotate(0deg)'
    },
    to: {
      transform: 'translate3d(-50%, -50%, 0) rotate(360deg)'
    }
  }
})

class PlaceOrderLoader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isShowAnimation: false
    }
  }

  componentWillUnmount () {
    // Removing animation on unmount
    this.setState({
      isShowAnimation: false
    })
  }

  componentDidUpdate (prevProps) {
    if (
      !this.props.isLoading &&
      prevProps.isLoading &&
      prevProps.orderNumber !== this.props.orderNumber
    ) {
      this.setState({
        isShowAnimation: true
      })
      setTimeout(() => {
        this.setState({
          isShowAnimation: false
        })
      }, 2000)
    }
  }

  render () {
    const { classes, isLoading } = this.props
    const isShowAnimation = this.state.isShowAnimation
    return (
      <React.Fragment>
        {isLoading && <div className={classes.fullPageWrapper} />}
        {isLoading && <div className={classes.spinnner} />}
        <Fade
          {...(isShowAnimation ? { timeout: 650 } : {})}
          in={isShowAnimation}
        >
          <Paper
            elevation={1}
            className={
              !isShowAnimation
                ? `${classes.successAnimationWrapper1} ${classes.itemVisible}`
                : classes.successAnimationWrapper1
            }
          />
        </Fade>

        <Fade
          {...(isShowAnimation ? { timeout: 2000 } : {})}
          in={isShowAnimation}
        >
          <Paper
            elevation={1}
            className={
              !isShowAnimation
                ? `${classes.successAnimationWrapper2} ${classes.itemVisible}`
                : classes.successAnimationWrapper2
            }
          >
            <DoneIcon className={classes.doneIcon} />
          </Paper>
        </Fade>
        {/* <Fade in={isShowAnimation}>
          <div className={classes.orderPlacedText}>
            Order Placed
          </div>
        </Fade> */}
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(PlaceOrderLoader)
