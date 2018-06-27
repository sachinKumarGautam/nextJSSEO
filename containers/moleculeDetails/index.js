import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '@material-ui/core/Grid'

import BreadCrumbs from '../../components/BreadCrumbs'
import MoleculeDetails from './MoleculeDetails'
import MoleculeDetailsContent from './MoleculeDetailsContent'
import RelatedMedicines from '../../components/RelatedMedicines'
import RelatedArticles from '../../components/RelatedArticles'

/*
  bread crumbs
  Molecule Details
  Molecule related content
  aside related medicines
  aside related articles
*/

class MoleculeDetailsWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hover: {}
    }
  }

  toggleHover (item) {
    this.setState((prevState) => ({
      hover: {
        [item]: !prevState.hover[item]
      }
    })
    )
  }

  render () {
    console.log('inner state', this.props.moleculeDetailsState)
    return (
      <div>
        <BreadCrumbs />
        <Grid container spacing={24}>
          <Grid item xs={8}>
            <section>
              <MoleculeDetails
                toggleHover={this.toggleHover.bind(this)}
                hover={this.state.hover}
              />
            </section>
            <section>
              <MoleculeDetailsContent
                hover={this.state.hover}
              />
            </section>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={3}>
            <RelatedMedicines />
            <RelatedArticles />
          </Grid>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    moleculeDetailsState: state.moleculeDetailsState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoleculeDetailsWrapper)
