import { withStyles } from '@material-ui/core/styles'
import Styles from './simpleLoader.css'

const styles = theme => ({
  loader: {
    width: 100,
    height: 100,
    borderRadius: '100%',
    position: 'relative',
    margin: '0 auto'
  },
  span: {
    display: 'inline-block',
    width: 20,
    height: 20,
    borderRadius: '100%',
    backgroundColor: '#3498db',
    margin: '35px 5',
    opacity: 0,
    '&:nth-child(1))': {
      animation: 'opacitychange 1s ease-in-out infinite'
    },
    '&:nth-child(1))': {
      animation: 'opacitychange 1s ease-in-out infinite'
    },
    '&:nth-child(2))': {
      animation: 'opacitychange 1s ease-in-out 0.33s infinite'
    },
    '&:nth-child(3))': {
      animation: 'opacitychange 1s ease-in-out 0.66s infinite'
    },
    '@keyframes opacitychange': {
      '0%': {
        opacity: 0
      },
      '100%': {
        opacity: 0
      },
      '60%': {
        opacity: 1
      }
    }
  }
})

const DotsLoader = ({ classes }) => {
  return (
    <div className='loader' id='loader-4'>
      <span className={classes.span} />
      <span className={classes.span} />
      <span className={classes.span} />
    </div>
  )
}

export default withStyles(styles)(DotsLoader)
