import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import RelatedMedicinesCard from './RelatedMedicinesCard'

const styles = theme => {
  return {
    title: {
      color: theme.palette.customGrey.grey600,
      fontWeight: theme.typography.fontWeightBold
    },
    card: {
      maxWidth: 252
    },
    articleListWrapper: {
      listStyle: 'none',
      paddingLeft: 0
    },
    viewAllLink: {
      ...theme.typography.caption,
      display: 'block',
      float: 'right',
      paddingRight: theme.spacing.unit * 5,
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      marginTop: theme.spacing.unit
    },
    relatedMedicinesWrapper: {
      marginBottom: theme.spacing.unit * 8
    }
  }
}

const RelatedMedicines = (props) => (
  <div className={props.classes.relatedMedicinesWrapper}>
    <Typography
      gutterBottom
      variant='title'
      component='h1'
      className={props.classes.title}
    >
      Available medicines for Glimepiride
    </Typography>
    <Card className={props.classes.card} elevation={1}>
      <CardContent>
        <ul className={props.classes.articleListWrapper}>
          <li>
            <RelatedMedicinesCard />
          </li>
          <li>
            <RelatedMedicinesCard />
          </li>
          <li>
            <RelatedMedicinesCard />
          </li>
        </ul>
      </CardContent>
    </Card>
    <a className={props.classes.viewAllLink}>view all</a>
  </div>
)

export default withStyles(styles)(RelatedMedicines)
