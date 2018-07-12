import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  iconWithText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: theme.spacing.unit * 1.125
  },
  listHeaderText: {
    ...theme.typography.body1,
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 2.5,
    fontWeight: theme.typography.fontWeightBold
  },
  listItemText: {
    ...theme.typography.body1,
    color: theme.palette.customGrey.grey200
  }
})

const CompanyInfo = ({classes}) => (
  <div>
    <Typography className={classes.listHeaderText} variant='headline' color='default'>
        Categories
    </Typography>
    <div className={classes.iconWithText}>
      <Typography className={classes.listItemText} variant='subheading' component='h2'>
          Diabetes
      </Typography>
    </div>
    <div className={classes.iconWithText}>
      <Typography className={classes.listItemText} variant='subheading' component='h2'>
          Blood pressure
      </Typography>
    </div>
    <div className={classes.iconWithText}>
      <Typography className={classes.listItemText} variant='subheading' component='h2'>
        Hypertension
      </Typography>
    </div>
    <div className={classes.iconWithText}>
      <Typography className={classes.listItemText} variant='subheading' component='h2'>
        Cardiac
      </Typography>
    </div>
    <div className={classes.iconWithText}>
      <Typography className={classes.listItemText} variant='subheading' component='h2'>
        Arthritis
      </Typography>
    </div>
  </div>
)

export default withStyles(styles)(CompanyInfo)
