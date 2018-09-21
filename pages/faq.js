// dependencies
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

// components
import withRoot from '../src/withRoot'
import Layout from '../components/layouts/Layout'
import FAQWrapper from '../containers/basicInformation/FAQ'

// page title
import { faq } from '../components/constants/PageTitle'

const styles = theme => ({
  root: {
    paddingBottom: theme.spacing.unit * 2,
    margin: '0 auto',
    marginTop: theme.spacing.unit * 7.5,
    width: '100%',
    minHeight: theme.spacing.unit * 100,
    maxWidth: theme.breakpoints.values.lg,
    minWidth: theme.breakpoints.values.md
  }
})

class Faq extends React.Component {
  render () {
    const { addToCartHandler, classes } = this.props
    return (
      <Layout
        title={faq.title}
        addToCartHandler={addToCartHandler}
      >
        <div>
          <Paper className={classes.root} elevation={1}>
            <FAQWrapper />
          </Paper>
        </div>
      </Layout>
    )
  }
}

export default (withRoot(withStyles(styles)(Faq)))
