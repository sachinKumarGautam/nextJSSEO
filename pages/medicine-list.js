import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer/Footer'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Paper from '@material-ui/core/Paper'

import MedicineListWrapper from '../containers/medicineList'

const styles = theme => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
    maxWidth: theme.breakpoints.values.lg,
    minWidth: theme.breakpoints.values.md,
    margin: '0 auto',
    marginTop: theme.spacing.unit * 12
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  }
})

const MedicineList = (props) => (
  <div>
    <Header />
    <div className={props.classes.root}>
      <MedicineListWrapper />
    </div>
    <Footer />
  </div>
)

export default withRoot(withStyles(styles)(MedicineList))
