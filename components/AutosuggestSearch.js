import React from 'react'
import Downshift from 'downshift'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
// import MenuItem from '@material-ui/core/MenuItem'
import Button from './button'
import SearchIcon from '@material-ui/icons/Search'
import MedicineListDetails from './MedicineListDetails'

const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' }
]

function renderInput (inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps

  return (
    <div className={classes.searchBar}>
      <TextField
        InputProps={{
          disableUnderline: true,
          inputRef: ref,
          classes: {
            formControl: classes.inputFormControl,
            focused: classes.inputFocused
          },
          ...InputProps
        }}
        {...other}
      />
      <Button
        color='primary'
        classes={{
          root: classes.searchButton
        }}
        label={<SearchIcon className={classes.iconColor} />}
      />
    </div>
  )
}

function renderSuggestion ({
  suggestion,
  index,
  itemProps,
  highlightedIndex,
  selectedItem,
  searchItemStyle,
  highlightedSearchItem,
  selectedSearchItem,
  checkPincodeLoading,
  checkPincodeState
}) {
  const isHighlighted = highlightedIndex === index
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1

  const listStyle = isHighlighted ? highlightedSearchItem : (isSelected ? selectedSearchItem : searchItemStyle)

  return (
    <li
      {...itemProps}
      className={listStyle}
    >
      <MedicineListDetails
        checkPincodeLoading={checkPincodeLoading}
        checkPincodeState={checkPincodeState}
      />
    </li>
  )
}

function getSuggestions (inputValue) {
  let count = 0

  return suggestions.filter(suggestion => {
    const keep =
      (!inputValue || suggestion.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
      count < 4

    if (keep) {
      count += 1
    }

    return keep
  })
}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    flexGrow: 1,
    width: theme.spacing.unit * 80,
    margin: '0 auto',
    position: 'relative'
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
  },
  inputFormControl: {
    flexWrap: 'wrap',
    width: theme.spacing.unit * 80,
    paddingLeft: theme.spacing.unit * 2,
    borderColor: theme.palette.customGrey.grey200,
    border: '1px solid black',
    borderRadius: theme.spacing.unit * 2,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.16)'
  },
  inputFocused: {
    border: '1px solid #80c241'
  },
  searchButton: {
    borderColor: theme.palette.customGrey.grey200,
    position: 'absolute',
    right: 0,
    height: theme.spacing.unit * 4,
    borderRadius: `0px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px 0px`
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: `0px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px 0px`
  },
  iconColor: {
    color: theme.palette.customGrey.grey500
  },
  searchContentWrapper: {
    listStyle: 'none',
    paddingLeft: 0,
    marginTop: 0,
    marginBottom: 0
  },
  searchItem: {
    '&:not(:last-child)': {
      borderBottom: `1px solid ${theme.palette.customGrey.grey100}`
    },
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  highlightedSearchItem: {
    backgroundColor: theme.palette.customGrey.grey50
  },
  selectedSearchItem: {
    fontWeight: theme.typography.fontWeightBold
  }
})

class IntegrationDownshift extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      classes,
      checkPincodeLoading,
      checkPincodeState
    } = this.props

    return (
      <div className={classes.root}>
        <Downshift>
          {({ getInputProps, getItemProps, getMenuProps, isOpen, inputValue, selectedItem, highlightedIndex }) => (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                InputProps: getInputProps({
                  placeholder: 'Search a country (start with a)',
                  id: 'integration-downshift-simple'
                })
              })}
              {isOpen ? (
                <Paper className={classes.paper} square>
                  <ul
                    {...getMenuProps()}
                    className={classes.searchContentWrapper}
                  >
                    {getSuggestions(inputValue).map((suggestion, index) =>
                      renderSuggestion({
                        suggestion,
                        index,
                        itemProps: getItemProps({
                          item: suggestion.label
                        }),
                        checkPincodeLoading,
                        checkPincodeState,
                        highlightedIndex,
                        selectedItem,
                        searchItemStyle: classes.searchItem,
                        highlightedSearchItem: `${classes.searchItem} ${classes.highlightedSearchItem}`,
                        selectedSearchItem: `${classes.searchItem} ${classes.selectedSearchItem}`
                      })
                    )}
                  </ul>
                </Paper>
              ) : null}
            </div>
          )}
        </Downshift>
      </div>
    )
  }
}

export default withStyles(styles)(IntegrationDownshift)
