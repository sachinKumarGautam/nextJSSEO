import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import MedicineListContent from './medicineListContent'
import Button from '../../components/button'

const styles = theme => {
  return {
    title: {
      color: theme.palette.customGrey.grey600,
      fontSize: theme.typography.fontSize + 2,
      paddingBottom: theme.spacing.unit * 4,
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

const MedicineList = (props) => (
  <div className={props.classes.medicineListWrapper}>
    <Typography
      gutterBottom
      variant='title'
      component='h1'
      className={props.classes.title}
    >
      Available medicines for Glimepiride
    </Typography>
    <Card elevation={1}>
      <CardContent>
        <ul className={props.classes.articleListWrapper}>
          <li className={props.classes.listItem}>
            <MedicineListContent />
          </li>
          <li className={props.classes.listItem}>
            <MedicineListContent />
          </li>
          <li className={props.classes.listItem}>
            <MedicineListContent />
          </li>
        </ul>
      </CardContent>
    </Card>
    <div className={props.classes.buttonWrapper}>
      <Button
        size='medium'
        variant='outlined'
        className={props.classes.button}
        classes={{
          root: props.classes.buttonRoot,
          label: props.classes.buttonLabel
        }}
        onClick={this.handleClickOpen}
        label={'Show more'}
      />
    </div>
  </div>
)

export default withStyles(styles)(MedicineList)
