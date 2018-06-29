import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

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
    button: {
      marginTop: theme.spacing.unit * 4
    },
    buttonRoot: {
      backgroundColor: '#ffffff'
    },
    buttonLabel: {
      color: theme.palette.customGrey.grey200
    },
    buttonWrapper: {
      display: 'flex',
      justifyContent: 'center'
    }
  }
}

class MedicineList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 0
    }
    this.onClickOfShowMore=this.onClickOfShowMore.bind(this)
  }

  //Represents to get medicine list when clicked on show more with page size and size per page.
  onClickOfShowMore () {
    this.props.getRelatedMedicinesLoading(
      this.props.medicineListState,
      'Multivitamin', // pass salt name
      (this.state.page + 1), // page number
      3 // page size
    )

    this.setState({
      page: this.state.page + 1
    })
  }

  render () {
    return (
      <div className={this.props.classes.medicineListWrapper}>
        <Typography
          gutterBottom
          variant='title'
          component='h1'
          className={this.props.classes.title}
        >
          Available medicines for Glimepiride
        </Typography>
        <Card elevation={1}>
          <CardContent>
            <ul className={this.props.classes.articleListWrapper}>
              {
                this.props.medicineListState.payload.map((itemDetails) => (
                  <li className={this.props.classes.listItem}>
                    <MedicineListDetails
                      itemDetails={itemDetails}
                    />
                  </li>
                ))
              }
            </ul>
          </CardContent>
        </Card>
        <div className={this.props.classes.buttonWrapper}>
          <Button
            size='medium'
            variant='outlined'
            className={this.props.classes.button}
            classes={{
              root: this.props.classes.buttonRoot,
              label: this.props.classes.buttonLabel
            }}
            onClick={this.onClickOfShowMore}
            label={'Show more'}
          />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(MedicineList)
