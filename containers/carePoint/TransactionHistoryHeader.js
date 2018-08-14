import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'

const styles = theme => ({
  transactionHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: `1px solid ${theme.palette.customGrey.grey300}`
  },
  transactionTitle: {
    color: theme.palette.customGrey.grey500,
    fontWeight: theme.typography.fontWeightBold,
    marginLeft: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 2
  },
  radioGroupStyle: {
    margintop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'row'
  },
  radioButtonStyle: {
    ...theme.typography.body3,
    color: theme.palette.customGrey.grey500
  },
  radioSize: {
    height: theme.spacing.unit * 4,
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit * 5
  },
  size: {
    fontSize: theme.spacing.unit * 2
  }
})

class TransactionHistoryHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      radioValue: 'all'
    }
  }
  onClickOfRadio (event, value) {
    this.props.getCarePointDetailsLoading(
      this.props.carePointState,
      this.props.customerState.payload.id,
      value
    )

    this.setState({
      radioValue: value
    })
  }

  render () {
    return (
      <div className={this.props.classes.transactionHeaderWrapper}>
        <div className={this.props.classes.carePointWrapper}>
          <Typography
            variant='subheading'
            className={this.props.classes.transactionTitle}
          >
            Transaction history
          </Typography>
        </div>
        <div>
          <RadioGroup
            className={this.props.classes.radioGroupStyle}
            value={this.state.radioValue}
            onChange={this.onClickOfRadio.bind(this)}
          >
            <FormControlLabel
              value='bonus'
              control={
                <Radio
                  color='primary'
                  className={this.props.classes.radioSize}
                  icon={<RadioButtonUncheckedIcon className={this.props.classes.size} />}
                  checkedIcon={<RadioButtonCheckedIcon className={this.props.classes.size} />}
                />
              }
              label='CARE POINTS'
              classes={{
                label: this.props.classes.radioButtonStyle
              }}
            />
            <FormControlLabel
              value='cash'
              control={
                <Radio
                  color='primary'
                  className={this.props.classes.radioSize}
                  icon={<RadioButtonUncheckedIcon className={this.props.classes.size} />}
                  checkedIcon={<RadioButtonCheckedIcon className={this.props.classes.size} />}
                />}
              label='CARE POINTS +'
              classes={{
                label: this.props.classes.radioButtonStyle
              }}
            />
            <FormControlLabel
              value='all'
              control={
                <Radio
                  color='primary'
                  className={this.props.classes.radioSize}
                  icon={<RadioButtonUncheckedIcon className={this.props.classes.size} />}
                  checkedIcon={<RadioButtonCheckedIcon className={this.props.classes.size} />}
                />
              }
              label='ALL'
              classes={{
                label: this.props.classes.radioButtonStyle
              }}
            />
          </RadioGroup>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(TransactionHistoryHeader)
