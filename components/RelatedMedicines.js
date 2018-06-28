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
      marginBottom: theme.spacing.unit * 8,
      maxWidth: 252
    },
    listItem: {
      '&:not(:last-child)': {
        borderBottom: `1px solid ${theme.palette.customGrey.grey100}`,
        paddingBottom: theme.spacing.unit * 2
      },
      marginTop: theme.spacing.unit * 2
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
      Available medicines for {props.moleculeName}
    </Typography>
    <Card elevation={1}>
      <CardContent>
        <ul className={props.classes.articleListWrapper}>
          {props.medicineList.map((item, index) => (
            <li className={props.classes.listItem}>
              <RelatedMedicinesCard itemDetails={item} />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
    <a className={props.classes.viewAllLink}>view all</a>
  </div>
)

export default withStyles(styles)(RelatedMedicines)
