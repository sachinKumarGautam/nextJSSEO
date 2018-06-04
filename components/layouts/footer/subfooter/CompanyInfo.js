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
    color: theme.palette.customGrey.lightGrey,
    marginLeft: theme.spacing.unit * 1.5
  }
})

const CompanyInfo = ({classes}) => (
  <div>
    <Typography className={classes.listHeaderText} variant='headline' color='default'>
        Company
    </Typography>
    <div className={classes.iconWithText}>
      <img src={'/static/images/info-outline.svg'} />
      <Typography className={classes.listItemText} variant="subheading"  component='h2'>
          About us
      </Typography>
    </div>
    <div className={classes.iconWithText}>
      <img src={'/static/images/info-outline.svg'} />
      <Typography className={classes.listItemText} variant='subheading'  component='h2'>
        Career
      </Typography>
    </div>
    <div className={classes.iconWithText}>
      <img src={'/static/images/privacy.svg'} />
      <Typography className={classes.listItemText} variant='subheading' component='h2'>
        Privacy policy
      </Typography>
    </div>
  </div>
)

export default withStyles(styles)(CompanyInfo)
