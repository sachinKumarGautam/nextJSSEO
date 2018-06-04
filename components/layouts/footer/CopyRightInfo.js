import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#4a4a4a',
    borderTop: '0.8px solid #FFF',
  },
  iconWithText: {
    marginLeft: theme.spacing.unit * 4.75,
    display: 'flex',
    color: theme.palette.common.white,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

const SubFooter = ({classes}) => (
  <div>
    <Paper className={classes.root} elevation={4}>
      <div className={classes.iconWithText}>
        <img src={'/static/images/splash.svg'} />
        <Typography component='h3'>
          © 2016 LifCARE. All Rights Reserved
        </Typography>
      </div>
    </Paper>
  </div>
)

export default withStyles(styles)(SubFooter)
