import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#4a4a4a',
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
  },
  footerInnerWrapper: {
    maxWidth: theme.breakpoints.values.lg,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '0 auto'
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'inherit'
  }
})

const SubFooter = ({classes}) => (
  <Paper className={classes.root} elevation={4}>
    <div className={classes.footerInnerWrapper}>
      <div className={classes.iconWithText}>
        <img src={'/static/images/splash.svg'} />
        <Typography className={classes.copyRightInfo} component='h3' variant={'body1'}>
            © 2018 LifCARE. All Rights Reserved
        </Typography>
      </div>
      <div>
        <a
          href='https://www.instagram.com/lifcare_pharmacy'
          target='blank'
          className={classes.linkStyle}
        >
          <img className={classes.socialMediaIcon} src={'/static/images/instagram.svg'} />
        </a>
        <a
          className={classes.linkStyle}
          target='blank'
          href='https://www.facebook.com/LifCare/'
        >
          <img className={classes.socialMediaIcon} src={'/static/images/facebook.svg'} />
        </a>
        <a
          className={classes.linkStyle}
          target='blank'
          href='https://twitter.com/lifcare'
        >
          <img className={classes.socialMediaIcon} src={'/static/images/twitter.svg'} />
        </a>
      </div>
    </div>
  </Paper>
)

export default withStyles(styles)(SubFooter)
