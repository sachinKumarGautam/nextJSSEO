import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import withRoot from '../../src/withRoot'

import Button from '../../components/button'
import MedicineListDetails from '../../components/MedicineListDetails'
import MultipleMedicineLoader
  from '../../components/activityIndicator/loader/medicineListLoader/MultipleMedicineLoader'
import ActivityIndicator from '../../components/activityIndicator'

import { modifiyMedicineList } from '../../utils/common'

import { NO_MEDICINE_LIST } from '../messages/noDataMessage'

const styles = theme => {
  return {
    title: {
      ...theme.typography.subheading,
      color: theme.palette.customGrey.grey600,
      paddingBottom: theme.spacing.unit * 3
    },
    articleListWrapper: {
      listStyle: 'none',
      paddingLeft: 0
    },
    medicineListWrapper: {
      marginBottom: theme.spacing.unit * 8,
      maxWidth: theme.spacing.unit * 81,
      margin: '0 auto'
    },
    listItem: {
      '&:not(:last-child)': {
        borderBottom: `1px solid ${theme.palette.customGrey.grey100}`,
        paddingBottom: theme.spacing.unit * 2
      },
      borderBottom: `1px solid ${theme.palette.customGrey.grey100}`,
      paddingBottom: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 2
    },
    buttonRoot: {
      // backgroundColor: '#ffffff',
    },
    buttonLabel: {
      color: theme.palette.customGrey.grey200
    },
    buttonWrapper: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing.unit * 4
    },
    noMedicineText: {
      color: theme.palette.customGrey.grey500,
      textAlign: 'center',
      marginTop: theme.spacing.unit * 1.25,
      fontWeight: theme.typography.fontWeightBold
    }
  }
}

class MedicineList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 0
    }
    this.onClickOfShowMore = this.onClickOfShowMore.bind(this)
  }

  componentDidMount () {
    this.setState({
      page: this.state.page + 1
    })
  }

  // Represents to get medicine list when clicked on show more with page size and size per page.
  onClickOfShowMore () {
    if (this.props.productName) {
      this.props.searchMedicineLoading(
        this.props.searchMedicineState,
        this.props.checkPincodeState.payload.id,
        this.props.productName,
        this.state.page + 1, // page number
        10, // page size,
        false // is header props is false
      )
    } else {
      this.props.getRelatedMedicinesLoading(
        this.props.medicineListState,
        this.props.moleculeName, // pass salt name
        this.state.page + 1, // page number
        10, // page size,
        true
      )
    }

    this.setState({
      page: this.state.page + 1
    })

    this.props.updateIsShowMore()
  }

  render () {
    const {
      medicineListState,
      classes,
      checkPincodeState,
      addToCartHandler,
      isLoading,
      cartState
    } = this.props
    const cartItems = cartState.payload.cart_items.payload

    return (
      <div className={classes.medicineListWrapper}>
        <Typography
          gutterBottom
          variant='title'
          component='h1'
          className={classes.title}
        >
          Available medicines for
          {' '}
          {this.props.moleculeName
            ? this.props.moleculeName
            : this.props.productName}
        </Typography>
        <Card elevation={1}>
          <ActivityIndicator
            isLoading={isLoading}
            LoaderComp={<MultipleMedicineLoader />}
          >
            <CardContent>
              {medicineListState.length
                ? <ul className={classes.articleListWrapper}>
                  {modifiyMedicineList(
                    medicineListState,
                    cartItems
                  ).map(itemDetails => (
                    <li className={classes.listItem}>
                      <MedicineListDetails
                        isLoading={isLoading}
                        checkIfAlredyExistInCart={
                          itemDetails.is_exist_in_cart
                        }
                        itemDetails={itemDetails}
                        addToCartHandler={addToCartHandler}
                        checkPincodeState={checkPincodeState}
                      />
                    </li>
                  ))}
                </ul>
                : <Typography
                  gutterBottom
                  variant='body2'
                  className={classes.noMedicineText}
                >
                  {NO_MEDICINE_LIST}
                </Typography>}

            </CardContent>
          </ActivityIndicator>
        </Card>
        {
          medicineListState.length &&
          this.state.page !== this.props.searchMedicineState.payload.totalPages
            ? (
              <div className={classes.buttonWrapper}>
                <Button
                  size='medium'
                  variant='outlined'
                  disabled={isLoading}
                  loaderColor={'primary'}
                  loaderPosition={'center'}
                  isloading={isLoading}
                  classes={{
                    root: classes.buttonRoot,
                    label: classes.buttonLabel
                  }}
                  onClick={this.onClickOfShowMore}
                  label={'Show more'}
                />
              </div>
            ) : null
        }
      </div>
    )
  }
}

export default withRoot(withStyles(styles)(MedicineList))
