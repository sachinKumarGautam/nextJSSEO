import { withStyles } from '@material-ui/core/styles'
import Styles from './simpleLoader.css'
import Paper from '@material-ui/core/Paper'
import Grow from '@material-ui/core/Grow'
import DoneIcon from '@material-ui/icons/Done'

const styles = theme => ({
  // TODO:  need to do fix ZIndex
  mainDiv: {
    zIndex: 10410,
    height: '100%',
    width: '100%'
  },
  innerWrapper: {
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
  mainDiv: {
    // top: '50%',
    // left: '50%',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%) !important'
  },
  doneIcon: {
    color: theme.palette.primary.main,
    position: 'fixed',
    zIndex: 1040,
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
    transform: 'translate(-50%, -50%) !important',
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
    if (!this.props.isLoading && prevProps.isLoading) {
      this.setState({
        isShowAnimation: true
      })
      // setTimeout(() => {
      //   this.setState({
      //     isShowAnimation: false
      //   })
      // }, 2000)
    }
  }

  render () {
    const { classes, isLoading } = this.props
    return (
      <div>
        {<div className={classes.innerWrapper} />}
        <Grow
          {...(this.state.isShowAnimation ? { timeout: 1050 } : {})}
          in={this.state.isShowAnimation}
        >
          <Paper
            elevation={1}
            className={`${classes.successAnimationWrapper1}`}
          />
        </Grow>

        <Grow
          {...(this.state.isShowAnimation ? { timeout: 550 } : {})}
          in={this.state.isShowAnimation}
        >
          <Paper elevation={1} className={classes.successAnimationWrapper2}>
            <DoneIcon className={classes.doneIcon} />
          </Paper>
        </Grow>
        <Grow
          {...(this.state.isShowAnimation ? { timeout: 650 } : {})}
          in={this.state.isShowAnimation}
        >
          <div className={classes.orderPlacedText}>
            Order Placed
          </div>
        </Grow>
      </div>
    )
  }
}

export default withStyles(styles)(PlaceOrderLoader)
