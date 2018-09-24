import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  outerWrapper: {
    margin: '0 auto',
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: theme.spacing.unit * 2,
    alignItems: 'center'
  },
  img: {
    width: theme.typography.pxToRem(283),
    height: theme.typography.pxToRem(185),
    objectFit: 'contain'
  },
  mainText: {
    fontSize: theme.typography.pxToRem(30),
    marginTop: theme.typography.pxToRem(35),
    letterSpacing: '0',
    fontWeight: theme.typography.fontWeightNormal,
    color: theme.palette.customGrey.grey500
  },
  subText: {
    fontSize: theme.spacing.unit * 2.25,
    color: theme.palette.customGrey.grey200
  }
})

const UnderConstruction = ({ classes }) => (
  <div className={classes.outerWrapper}>
    <img src='/static/images/paymentPendingIcon.svg' alt='construction-image' />
    <Typography
      className={classes.subText}
      gutterBottom
      variant={'title'}
      component='h4'
    >
      We are working to get you the details soon
    </Typography>
  </div>
)

export default withStyles(styles)(UnderConstruction)
