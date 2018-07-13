import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 1.5,
    backgroundColor: theme.palette.customGrey.grey500,
    paddingLeft: theme.spacing.unit * 4.75,
    paddingRight: theme.spacing.unit * 7.5,
    borderRadius: 0,
    borderTop: `solid 0.8px ${theme.palette.customGrey.grey250}`
  },
  iconWithText: {
    display: 'flex',
    color: theme.palette.common.white,
    flexDirection: 'row',
    alignItems: 'center'
  },
  socialMediaIcon: {
    marginLeft: theme.spacing.unit * 5.88,
    width: theme.spacing.unit * 2.5,
    height: theme.spacing.unit * 2.5
  },
  copyRightInfo: {
    ...theme.typography.caption,
    color: theme.palette.common.white,
    paddingLeft: theme.spacing.unit * 2.125
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
