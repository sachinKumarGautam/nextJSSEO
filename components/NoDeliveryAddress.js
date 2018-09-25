import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  noAddress: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    display: 'flex',
    marginLeft: theme.spacing.unit
  },
  img: {
    width: theme.spacing.unit * 3.75,
    height: theme.spacing.unit * 3.75
  }
})

const NoDeliveryAddress = ({ classes }) => (
  <div className={classes.noAddress}>
    <img className={classes.img} src='/static/images/no-address.png' />
    <Typography className={classes.text}>
      Please add a delivery address{' '}
    </Typography>
  </div>
)

export default withStyles(styles)(NoDeliveryAddress)
