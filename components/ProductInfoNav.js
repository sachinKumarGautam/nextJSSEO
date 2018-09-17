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
      alignItems: 'center',
      textDecoration: 'none',
      color: theme.palette.customGrey.grey600,
      '&:hover': {
        transitionDelay: '2s',
        color: theme.palette.primary.main
      }
    },
    linkLabel: {
      ...theme.typography.body3,
      display: 'block',
      marginTop: theme.spacing.unit,
      fontWeight: theme.typography.fontWeightBold,
      fontFamily: theme.typography.fontFamily,
      transition: '2s',
      '&:hover': {
        transitionDelay: '2s'
      }
    },
    hover: {
      color: theme.palette.primary.main,
      transitionDelay: '2s',
      cursor: 'pointer'
    }
  }
}

function scrollTo (id) {
  var ele = document.getElementById(id)
  const option = {
    top: ele.offsetTop - 130,
    left: ele.offsetLeft,
    behavior: 'smooth'
  }
  window.scrollTo(option)
  return false
}

const ProductBrand = (props) => (
  <div>
    <ui className={props.classes.listWrapper}>
      <li className={props.classes.list}>
        <a
          className={props.hover.uses ? `${props.classes.listLink} ${props.classes.hover}` : props.classes.listLink}
          onMouseEnter={props.toggleHover.bind(this, 'uses')}
          onMouseLeave={props.toggleHover.bind(this, 'uses')}
          onClick={scrollTo.bind(this, 'uses')}
        >
          <img src={props.hover.uses ? '/static/images/uses-nav-green.svg' : '/static/images/uses-nav.svg'} />
          <span className={props.classes.linkLabel}>
            USES
          </span>
        </a>
      </li>
      <li className={props.classes.list}>
        <a
          className={props.hover.sideEffects ? `${props.classes.listLink} ${props.classes.hover}` : props.classes.listLink}
          onMouseEnter={props.toggleHover.bind(this, 'sideEffects')}
          onMouseLeave={props.toggleHover.bind(this, 'sideEffects')}
          onClick={scrollTo.bind(this, 'sideEffects')}
        >
          <img src={props.hover.sideEffects ? '/static/images/side-effects-nav-green.svg' : '/static/images/side-effects-nav.svg'} />
          <span className={props.classes.linkLabel}>
            SIDE EFFECTS
          </span>
        </a>
      </li>
      <li className={props.classes.list}>
        <a
          className={props.hover.howItWorks ? `${props.classes.listLink} ${props.classes.hover}` : props.classes.listLink}
          onMouseEnter={props.toggleHover.bind(this, 'howItWorks')}
          onMouseLeave={props.toggleHover.bind(this, 'howItWorks')}
          onClick={scrollTo.bind(this, 'howItWorks')}
        >
          <img src={props.hover.howItWorks ? '/static/images/how-it-works-nav-green.svg' : '/static/images/how-it-works-nav.svg'} />
          <span className={props.classes.linkLabel}>
            HOW IT WORKS
          </span>
        </a>
      </li>
      <li className={props.classes.list}>
        <a
          className={props.hover.precautions ? `${props.classes.listLink} ${props.classes.hover}` : props.classes.listLink}
          onMouseEnter={props.toggleHover.bind(this, 'precautions')}
          onMouseLeave={props.toggleHover.bind(this, 'precautions')}
          onClick={scrollTo.bind(this, 'precautions')}
        >
          <img src={props.hover.precautions ? '/static/images/precautions-nav-green.svg' : '/static/images/precautions-nav.svg'} />
          <span className={props.classes.linkLabel}>
            PRECAUTIONS
          </span>
        </a>
      </li>
    </ui>
  </div>
)

export default withStyles(styles)(ProductBrand)
