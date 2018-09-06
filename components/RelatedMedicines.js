import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import RelatedMedicinesCard from './RelatedMedicinesCard'

import { PRODUCT_SEARCH } from '../routes/RouteConstant'
import SideListItemsLoader from './activityIndicator/loader/SideListItemLoader'
import ActivityIndicator from './activityIndicator'

import Link from 'next/link'
import ComponentSpecificError
  from './activityIndicator/error/ComponentSpecificError'

import Router from 'next/router'
import { modifiyMedicineList } from '../utils/common'

const styles = theme => {
  return {
    title: {
      ...theme.typography.title,
      color: theme.palette.customGrey.grey600
    },
    articleListWrapper: {
      listStyle: 'none',
      paddingLeft: 0,
      paddingBottom: 0
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

class RelatedMedicines extends React.Component {
  tryAgain () {
    const { query } = Router

    this.props.getRelatedMedicinesLoading(
      this.props.medicineListState,
      query.molecule_id, // pass salt name //query.name
      0, // page number
      3 // page size
    )
  }
  render () {
    const medicineList = this.props.medicineList
    const cartItems = this.props.cartState.payload.cart_items.payload
    return (
      <div className={this.props.classes.relatedMedicinesWrapper}>
        <Typography
          gutterBottom
          variant='title'
          component='h1'
          className={this.props.classes.title}
        >
          Available medicines for {this.props.moleculeName}
        </Typography>
        <Card elevation={1}>
          <ActivityIndicator
            isLoading={this.props.isLoadingMedicineList}
            LoaderComp={<SideListItemsLoader />}
            isError={this.props.medicineListState.errorState.isError}
            ErrorComp={
              <ComponentSpecificError
                error={this.props.medicineListState.errorState.error}
                tryAgain={this.tryAgain.bind(this)}
              />
            }
          >
            <CardContent>
              <ul className={this.props.classes.articleListWrapper}>
                {modifiyMedicineList(
                  medicineList,
                  cartItems
                ).map((item, index) => (
                  <li className={this.props.classes.listItem}>
                    <RelatedMedicinesCard
                      checkPincodeState={this.props.checkPincodeState}
                      checkIfAlredyExistInCart={item.is_exist_in_cart}
                      itemDetails={item}
                      addToCartHandler={this.props.addToCartHandler}
                    />
                  </li>
                ))}
              </ul>
            </CardContent>
          </ActivityIndicator>
        </Card>
        <Link
          as={`${PRODUCT_SEARCH}/?molecule-name=${this.props.moleculeName}`}
          href={`${PRODUCT_SEARCH}?molecule-name=${this.props.moleculeName}`}
        >
          <a className={this.props.classes.viewAllLink}>view all</a>
        </Link>
      </div>
    )
  }
}

export default withStyles(styles)(RelatedMedicines)
