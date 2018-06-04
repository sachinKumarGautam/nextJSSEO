import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  horizontalSubheader: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    margin: theme.spacing.unit * 1.2,
    marginTop: 0
  },
  subHeaderItem: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'row'
  },
  subHeaderText: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGrey.grey200,
    paddingLeft: theme.spacing.unit * 2.25
  }
})
const Subheader = ({classes}) => (
  <ul className={classes.horizontalSubheader}>
    <li>
      <a href='#' className={classes.subHeaderItem}>
        <img src='/static/images/order-med.svg' />
        <Typography
          variant={'body2'}
          className={classes.subHeaderText}
          component='h1'>
            Order Medicine
        </Typography>
      </a>
    </li>
    <li>
      <a href='#' className={classes.subHeaderItem}>
        <img src='/static/images/repeat-button.svg' />
        <Typography
          variant={'body2'}
          className={classes.subHeaderText}
          component='h1'>
          Refill Past Medicines
        </Typography>
      </a>
    </li>
    <li>
      <a href='#' className={classes.subHeaderItem}>
        <img src='/static/images/repeat-button.svg' />
        <Typography
          variant={'body2'}
          className={classes.subHeaderText}
          component='h1'>
            Diseases
        </Typography>
      </a>
    </li>
    <li>
      <a href='#' className={classes.subHeaderItem}>
        <img src='/static/images/blog.svg' />
        <Typography variant={'body2'} className={classes.subHeaderText} component='h1'>Health & Content</Typography>
      </a>
    </li>
  </ul>
)

export default withStyles(styles)(Subheader)
