import { withStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

function CartIcon (props) {
  const { classes } = props
  return (
    <div>
      <IconButton color='primary' className={classes.button} aria-label='Add to shopping cart'>
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  )
}

export default withStyles(styles)(CartIcon)
