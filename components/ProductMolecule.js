import React from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    moleculeTag: {
      ...theme.typography.subheading,
      textDecoration: 'none',
      borderBottom: '1px dashed',
      marginRight: theme.spacing.unit * 2,
      color: theme.palette.customGrey.grey600
    }
  }
}

const ProductMolecule = (props) => (
  <div>
    <a href='#' className={props.classes.moleculeTag}>
      Glimepiride (0.5mg)
    </a>
    <a href='#' className={props.classes.moleculeTag}>
      Metformin (1000mg)
    </a>
  </div>
)

export default withStyles(styles)(ProductMolecule)
