// dependencies
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

// components
import withRoot from '../src/withRoot'
import Layout from '../components/layouts/Layout'
import PrivacyPolicy from '../containers/basicInformation/PrivacyPolicy'

// page title
import { privacyPolicy } from '../components/constants/PageTitle'

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

class Privacy extends React.Component {
  render () {
    const { addToCartHandler, classes } = this.props
    return (
      <Layout
        title={privacyPolicy.title}
        addToCartHandler={addToCartHandler}
      >
        <div>
          <Paper className={classes.root} elevation={1}>
            <PrivacyPolicy />
          </Paper>
        </div>
      </Layout>
    )
  }
}

export default (withRoot(withStyles(styles)(Privacy)))
