import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  iconWithText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.unit * 2.25
  },
  listHeaderText: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 2.25
  },
  listItemText: {
    color: theme.palette.primary.main,
    marginLeft: theme.spacing.unit * 1.5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'inherit'
  }
})

const ContactUs = ({classes}) => (
  <div>
    <Typography className={classes.listHeaderText} variant='headline' color='default'>
        Contact Us
    </Typography>
    <div className={classes.iconWithText}>
      <img src={'/static/images/email-s-copy-3.svg'} />
      <Typography className={classes.listItemText} variant='subheading' component='h2'>
        <a className={classes.linkStyle} href='mailto:care@lifcare.in'>care@lifcare.in</a>
        <a className={classes.linkStyle} href='mailto:careers@lifcare.in'>careers@lifcare.in</a>
      </Typography>
    </div>
    <div className={classes.iconWithText}>
      <img src={'/static/images/cal-copy.svg'} />

      <Typography className={classes.listItemText} variant='subheading' component='h2'>
        <a className={classes.linkStyle} href='tel:8302032000'>83020-32000</a>
        <a className={classes.linkStyle} href='tel:01139443944'>011 3944 3944</a>
        <a className={classes.linkStyle} href='tel:014139443944'>0141 3944 3944</a>
      </Typography>
    </div>
  </div>
)

export default withStyles(styles)(ContactUs)
