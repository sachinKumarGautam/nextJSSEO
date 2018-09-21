// dependencies
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

// components
import withRoot from '../src/withRoot'
import Layout from '../components/layouts/Layout'
import TermsAndCondition from '../containers/basicInformation/TermsAndCondition'

// page title
import { terms } from '../components/constants/PageTitle'

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

class Terms extends React.Component {
  render () {
    const { addToCartHandler, classes } = this.props
    return (
      <Layout
        title={terms.title}
        addToCartHandler={addToCartHandler}
      >
        <div>
          <Paper className={classes.root} elevation={1}>
            <TermsAndCondition />
          </Paper>
        </div>
      </Layout>
    )
  }
}

export default (withRoot(withStyles(styles)(Terms)))
