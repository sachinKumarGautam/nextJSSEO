import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  iconWithText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',

    marginBottom: theme.spacing.unit * 2.25
  },
  img: {
    width: theme.spacing.unit * 12.75,
    height: theme.spacing.unit * 5
  },
  img2: {
    width: theme.spacing.unit * 12.75,
    height: theme.spacing.unit * 4
  },
  listHeaderText: {
    ...theme.typography.body1,
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 2.5,
    fontWeight: theme.typography.fontWeightBold
  },
  listItemText: {
    color: theme.palette.customGrey.grey200,
    marginLeft: theme.spacing.unit * 1.5
  }
})

const OurApp = ({classes}) => (
  <div>
    <Typography className={classes.listHeaderText} variant='headline' color='default'>
        Our App
    </Typography>
    <div className={classes.iconWithText}>
      <a href='https://play.google.com/store/apps/details?id=com.lifcare.launch&hl=en' target='_blank'>
        <img className={classes.img} src={'/static/images/asset-1.svg'} />
      </a>
    </div>
    <div className={classes.iconWithText}>
      <a target='_blank' href='https://itunes.apple.com/in/app/lifcare/id1254964377?mt=8'>
        <img className={classes.img2} src={'/static/images/appStore.png'} />
      </a>
    </div>
  </div>
)

export default withStyles(styles)(OurApp)
