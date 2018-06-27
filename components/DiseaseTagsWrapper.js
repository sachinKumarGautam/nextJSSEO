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
      ...theme.typography.subheading,
      marginRight: theme.spacing.unit,
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
    <p><DiseseTags diseases={props.diseases} /></p>
  </div>
)

export default withStyles(styles)(DiseaseTagsWrapper)
