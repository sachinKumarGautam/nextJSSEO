import { withStyles } from '@material-ui/core/styles'
import SingleCardLoader from './SingleCardLoader'

const styles = theme => {
  return {
    multipleLoaderWrapper: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-around',
      '&: not(: first-child)': {
        marginLeft: theme.typography.pxToRem(20)
      }
    }
  }
}

const MultipleCardLoader = ({ classes }) => (
  <div className={classes.multipleLoaderWrapper}>
    <SingleCardLoader />
    <SingleCardLoader />
  </div>
)

export default withStyles(styles)(MultipleCardLoader)
