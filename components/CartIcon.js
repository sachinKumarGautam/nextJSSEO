import { withStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
})

function CartIcon (props) {
  const { classes } = props
  return (
    <div>
      <IconButton color='primary' className={classes.button} aria-label='Add to shopping cart'>
        <Badge className={classes.margin} badgeContent={4} color='primary'>
          <AddShoppingCartIcon />
        </Badge>
      </IconButton>
    </div>
  )
}

export default withStyles(styles)(CartIcon)
