import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '@material-ui/core/Grid'

import BreadCrumbs from '../../components/BreadCrumbs'
import MoleculeDetails from './MoleculeDetails'
import MoleculeDetailsContent from './MoleculeDetailsContent'
import RelatedMedicines from '../../components/RelatedMedicines'
import RelatedArticles from '../../components/RelatedArticles'
import {
  getRelatedMedicinesLoading
} from '../medicineList/medicineListActions'

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
    this.setState(prevState => ({
      hover: {
        [item]: !prevState.hover[item]
      }
    }))
  }

  render () {
    return (
      <div>
        <BreadCrumbs />
        <Grid container spacing={24}>
          <Grid item xs={8}>
            <section>
              <MoleculeDetails
                toggleHover={this.toggleHover.bind(this)}
                hover={this.state.hover}
                moleculeDetailsStatePayload={
                  this.props.moleculeDetailsStatePayload
                }
              />
            </section>
            <section>
              <MoleculeDetailsContent
                hover={this.state.hover}
                moleculeDetailsStatePayload={
                  this.props.moleculeDetailsStatePayload
                }
              />
            </section>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={3}>
            <RelatedMedicines
              moleculeName={this.props.moleculeDetailsStatePayload.name}
              addToCartHandler={this.props.addToCartHandler}
              isLoadingMedicineList={this.props.medicineListState.isLoading}
              medicineList={this.props.medicineListState.payload}
              isLoadingRelatedMedicine={this.props.medicineListState.isLoading}
              checkPincodeState={this.props.checkPincodeState}
              cartState={this.props.cartState}
              medicineListState={this.props.medicineListState}
              getRelatedMedicinesLoading={this.props.actions.getRelatedMedicinesLoading}
            />
            <RelatedArticles />
          </Grid>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    moleculeDetailsStatePayload: state.moleculeDetailsState.payload,
    medicineListState: state.medicineListState,
    cartState: state.cartState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      getRelatedMedicinesLoading
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  MoleculeDetailsWrapper
)
