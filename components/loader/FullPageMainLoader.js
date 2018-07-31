import { withStyles } from '@material-ui/core/styles'
import Backdrop from '@material-ui/core/Backdrop'
import Styles from './simpleLoader.css'

import './simpleLoader.css'

const styles = theme => ({
  mainDiv: {
    zIndex: 10400
  },
  outerWrapper: {
    position: 'fixed',
    zIndex: 10400,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  innerWrapper: {
    zIndex: 'inherit',
    position: 'fixed',
    zIndex: 10400,
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 64,
    height: 64,
    clear: 'both',
    border: `1px ${theme.palette.customGrey.grey500} solid`,
    borderTop: '1px white solid',
    WebkitAnimation: 'spCircRot 1s infinite linear',
    animation: 'spCircRot 1s infinite linear',
    borderRadius: '50%'
  },
  leaf: {
    zIndex: 10400,
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
    // top: '50%',
    // left: '50%',
    // width: 32,
    // height: 32,
    // clear: 'both',
    // zIndex: 10402,
    // margin: '20px auto',
    // border: `1px ${theme.palette.customGrey.grey500} solid`,
    // borderTop: '1px white solid',
    // WebkitAnimation: 'spCircRot 1s infinite linear',
    // animation: 'spCircRot 1s infinite linear',
    // borderRadius: '50%',
  },
  circle: {
    width: 64,
    height: 64,
    clear: 'both',
    zIndex: 10402,
    // margin: '20px auto',
    border: `1px ${theme.palette.customGrey.grey500} solid`,
    borderTop: '1px white solid'
    // WebkitAnimation: 'spCircRot 1s infinite linear',
    // animation: 'spCircRot 1s infinite linear',
    // borderRadius: '50%'
  },
  '@keyframes spCircRot': {
    from: {
      transform: 'rotate(0deg, -50%, -50%)'
    },
    to: {
      transform: 'rotate(359deg, -50%, -50%)'
    }
  }
})

const FullPageMainLoader = ({ classes }) => {
  return (
    <div className={classes.mainDiv}>
      <Backdrop open className={classes.outerWrapper} />
      <div className={classes.innerWrapper} />
      {/* <img className={classes.leaf} src='/static/images/logo.svg' /> */}
    </div>
  )
}

export default withStyles(styles)(FullPageMainLoader)
