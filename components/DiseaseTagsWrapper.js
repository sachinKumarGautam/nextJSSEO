import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import DiseseTags from './DiseaseTags'

const styles = theme => {
  return {
    diseaseTagsWrapper: {
      display: 'flex',
      alignItems: 'flex-start'
    },
    label: {
      ...theme.typography.body2,
      marginRight: theme.spacing.unit * 1.125,
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.customGrey.grey600
    }
  }
}

const DiseaseTagsWrapper = (props) => (
  <div className={props.classes.diseaseTagsWrapper}>
    <p className={props.classes.label}>
      Primary Uses:
    </p>
    <p><DiseseTags diseases={props.diseases ? props.diseases : []} /></p>
  </div>
)

export default withStyles(styles)(DiseaseTagsWrapper)
