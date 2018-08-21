import { withStyles } from '@material-ui/core/styles'
import Loader from '../../components/activityIndicator/loader'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 2,
    width: '100%',
    minHeight: theme.typography.pxToRem(150),
    display: 'block',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  noCarePointsIcon: {
    height: theme.spacing.unit * 7,
    position: 'relative',
    display: 'block',
    margin: '0 auto'
  },
  noCarePointsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 3
  }
})

const NoCarePoints = ({ isLoading, classes, carePointList }) => (
  <React.Fragment>
    {(isLoading || !carePointList.length) &&
      <div className={classes.root}>
        <Loader loaderType={'commonSpinner'} isLoading={isLoading} />
        {!isLoading &&
          !carePointList.length &&
          <div className={classes.noCarePointsWrapper}>
            <img
              className={classes.noCarePointsIcon}
              src='/static/images/ic_no_prescription_found@2x.png'
            />
            <Typography variant={'subheading'}>No care points</Typography>
          </div>}
      </div>}
  </React.Fragment>
)

export default withStyles(styles)(NoCarePoints)
