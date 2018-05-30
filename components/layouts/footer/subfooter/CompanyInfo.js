import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  iconWithText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  listHeaderText: {
    color: theme.palette.common.white
  },
  listItemText: {
    color: theme.palette.common.white
  }
})

const CompanyInfo = ({classes}) => (
  <div>
    <Typography className={classes.listHeaderText} variant='headline' color='default' gutterBottom>
        Company
    </Typography>
    <div className={classes.iconWithText}>
      <img src={'/static/images/info-outline.svg'} />
      <Typography className={classes.itemText} variant='subheading' gutterBottom component='h2'>
          About us
      </Typography>
    </div>
    <div className={classes.iconWithText}>
      <img src={'/static/images/info-outline.svg'} />
      <Typography variant='subheading' gutterBottom component='h2'>
        Career
      </Typography>
    </div>
    <div className={classes.iconWithText}>
      <img src={'/static/images/privacy.svg'} />
      <Typography variant='subheading' gutterBottom component='h2'>
        Privacy policy
      </Typography>
    </div>
  </div>
)

export default withStyles(styles)(CompanyInfo)
