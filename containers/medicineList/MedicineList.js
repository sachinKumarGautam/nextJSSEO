import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import withRoot from '../../src/withRoot'

import Button from '../../components/button'
import MedicineListDetails from '../../components/MedicineListDetails'

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

  // Represents to get medicine list when clicked on show more with page size and size per page.
  onClickOfShowMore () {
    this.props.getRelatedMedicinesLoading(
      this.props.medicineListState,
      'Multivitamin', // pass salt name
      (this.state.page + 1), // page number
      10 // page size
    )

    this.setState({
      page: this.state.page + 1
    })
  }

  render () {
    const {
      medicineListState,
      incrementCartItemLoading,
      cartState,
      classes,
      checkPincodeState,
      checkPincodeLoading
    } = this.props
    return (
      <div className={classes.medicineListWrapper}>
        <Typography
          gutterBottom
          variant='title'
          component='h1'
          className={classes.title}
        >
          Available medicines for {this.props.moleculeName}
        </Typography>
        <Card elevation={1}>
          <CardContent>
            <ul className={classes.articleListWrapper}>
              {
                medicineListState.map((itemDetails) => (
                  <li className={classes.listItem}>
                    <MedicineListDetails
                      itemDetails={itemDetails}
                      checkPincodeState={checkPincodeState}
                      checkPincodeLoading={checkPincodeLoading}
                      incrementCartItemLoading={incrementCartItemLoading}
                      cartState={cartState}
                    />
                  </li>
                ))
              }
            </ul>
          </CardContent>
        </Card>
        { medicineListState && !this.props.query.productName &&
          <div className={classes.buttonWrapper}>
            <Button
              size='medium'
              variant='outlined'
              disabled={medicineListState.isLoading}
              loaderColor={'primary'}
              isloading={medicineListState.isLoading}
              classes={{
                root: classes.buttonRoot,
                label: classes.buttonLabel
              }}
              onClick={this.onClickOfShowMore}
              label={'Show more'}
            />
          </div>}
      </div>
    )
  }
}

export default withRoot(withStyles(styles)(MedicineList))
