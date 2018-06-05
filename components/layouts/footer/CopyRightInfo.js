import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#4a4a4a',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTop: '0.4px solid #FFF',
    paddingLeft: theme.spacing.unit * 4.75,
    paddingRight: theme.spacing.unit * 7.5
  },
  iconWithText: {
    display: 'flex',
    color: theme.palette.common.white,
    flexDirection: 'row',
    alignItems: 'center'
  },
  socialMediaIcon: {
    paddingLeft: theme.spacing.unit * 5.3
  },
  copyRightInfo: {
    color: theme.palette.common.white,
    paddingLeft: theme.spacing.unit * 2.25
  }
})

const SubFooter = ({classes}) => (
  <div>
    <Paper className={classes.root} elevation={4}>
      <div className={classes.iconWithText}>
        <img src={'/static/images/splash.svg'} />
        <Typography className={classes.copyRightInfo} component='h3' variant={'body1'}>
          © 2016 LifCARE. All Rights Reserved
        </Typography>
      </div>
      <div>
        <img className={classes.socialMediaIcon} src={'/static/images/instagram.svg'} />
        <img className={classes.socialMediaIcon} src={'/static/images/facebook.svg'} />
        <img className={classes.socialMediaIcon} src={'/static/images/twitter.svg'} />
      </div>
    </Paper>
  </div>
)

export default withStyles(styles)(SubFooter)
