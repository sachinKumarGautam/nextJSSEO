// dependencies
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

// components
import withRoot from '../src/withRoot'
import Layout from '../components/layouts/Layout'
import AboutUs from '../containers/basicInformation/AboutUs'

// page title
import { aboutUs } from '../components/constants/PageTitle'

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

class About extends React.Component {
  render () {
    const { addToCartHandler, classes } = this.props
    return (
      <Layout
        title={aboutUs.title}
        addToCartHandler={addToCartHandler}
      >
        <div>
          <Paper className={classes.root} elevation={1}>
            <AboutUs />
          </Paper>
        </div>
      </Layout>
    )
  }
}

export default (withRoot(withStyles(styles)(About)))
