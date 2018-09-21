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
    color: theme.palette.customGrey.grey200,
    textDecoration: 'none'
  }
})

const CompanyInfo = ({classes}) => (
  <div>
    <Typography className={classes.listHeaderText} variant='headline' color='default'>
        Categories
    </Typography>
    <div className={classes.iconWithText}>
      <Typography className={classes.listItemText} variant='subheading' component='h2'>
          <a href="https://blog.lifcare.in/tag/diabetes/" target="_blank" style={{textDecoration: 'none'}} className={classes.listItemText} >Diabetes</a>
      </Typography>
    </div>
    <div className={classes.iconWithText}>
      <Typography className={classes.listItemText} variant='subheading' component='h2'>
          <a href="https://blog.lifcare.in/tag/blood-pressure/" target="_blank" className={classes.listItemText} >Blood Pressure</a>
      </Typography>
    </div>
    <div className={classes.iconWithText}>
      <Typography className={classes.listItemText} variant='subheading' component='h2'>
          <a href="https://blog.lifcare.in/tag/arthritis/" target="_blank" className={classes.listItemText} >Arthritis</a>
      </Typography>
    </div>
    <div className={classes.iconWithText}>
      <Typography className={classes.listItemText} variant='subheading' component='h2'>
          <a href="https://blog.lifcare.in/tag/cancer/" target="_blank" className={classes.listItemText} >Cancer</a>
      </Typography>
    </div>
    <div className={classes.iconWithText}>
      <Typography className={classes.listItemText} variant='subheading' component='h2'>
          <a href="https://blog.lifcare.in/tag/brain/" target="_blank" className={classes.listItemText} >Brain</a>
      </Typography>
    </div>
  </div>
)

export default withStyles(styles)(CompanyInfo)
