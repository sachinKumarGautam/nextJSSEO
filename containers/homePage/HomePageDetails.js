import React, {Component} from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
  }
}

const HomePageWrapper = (props) => {
  return (
    <Card elevation={1}>
      <CardContent>
        hi
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(HomePageWrapper)
