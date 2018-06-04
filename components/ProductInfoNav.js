import React from 'react'

import { withStyles } from '@material-ui/core/styles'
/*
  product uses icon
  side effects icon
  how it works icon
  precautions icon
*/

const styles = theme => {
  return {
    listWrapper: {
      listStyle: 'none',
      display: 'block',
      marginTop: theme.spacing.unit * 4
    },
    list: {
      display: 'inline-block',
      marginRight: theme.spacing.percentageUnit
    },
    listLink: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    linkLabel: {
      display: 'block',
      fontSize: '0.75rem',
      marginTop: theme.spacing.unit
    }
  }
}

const ProductBrand = (props) => (
  <div>
    <ui className={props.classes.listWrapper}>
      <li className={props.classes.list}>
        <a className={props.classes.listLink}>
          <img src={'/static/images/uses-nav.svg'} />
          <span className={props.classes.linkLabel}>
            USES
          </span>
        </a>
      </li>
      <li className={props.classes.list}>
        <a className={props.classes.listLink}>
          <img src={'/static/images/side-effects-nav.svg'} />
          <span className={props.classes.linkLabel}>
            SIDE EFFECTS
          </span>
        </a>
      </li>
      <li className={props.classes.list}>
        <a className={props.classes.listLink}>
          <img src={'/static/images/how-it-works-nav.svg'} />
          <span className={props.classes.linkLabel}>
            HOW IT WORKS
          </span>
        </a>
      </li>
      <li className={props.classes.list}>
        <a className={props.classes.listLink}>
          <img src={'/static/images/precautions-nav.svg'} />
          <span className={props.classes.linkLabel}>
            PRECAUTIONS
          </span>
        </a>
      </li>
    </ui>
  </div>
)

export default withStyles(styles)(ProductBrand)
