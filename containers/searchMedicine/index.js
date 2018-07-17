import React from 'react'
import Router from 'next/router'
import Downshift from 'downshift'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
// import MenuItem from '@material-ui/core/MenuItem'
import Button from '../../components/button'
import SearchIcon from '@material-ui/icons/Search'
import MedicineListDetails from '../../components/MedicineListDetails'

import { MEDICINE_LIST_PRODUCT } from '../../routes/RouteConstant'

// import { commonWrapperHOC } from '../../components/HOCWrapper/CommonWrapper'

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
    maxHeight: theme.spacing.unit * 50,
    overflow: 'scroll',
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
    border: `1px solid ${theme.palette.common.black}`,
    borderRadius: theme.spacing.unit * 2,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.16)'
  },
  inputFocused: {
    border: `1px solid ${theme.palette.primary.main}`
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

function renderInput (inputProps) {
  const { InputProps, classes, ref, onChange, ...other } = inputProps
  return (
    <div className={classes.searchBar}>
      <TextField
        InputProps={{
          disableUnderline: true,
          // inputRef: ref,
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
        onClick={InputProps.inputValue ? inputProps.onSearchClick.bind(this, InputProps.inputValue) : null}
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
  onSelectItem,
  checkPincodeLoading,
  checkPincodeState,
  cartState,
  incrementCartItemLoading,
  addToCartHandler
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
        itemDetails={suggestion}
        openPicodeDialogFrom
        incrementCartItemLoading={incrementCartItemLoading}
        cartState={cartState}
        checkPincodeLoading={checkPincodeLoading}
        checkPincodeState={checkPincodeState}
        addToCartHandler={addToCartHandler}
      />
    </li>
  )
}

function getSuggestions (searchMedicineResult) {
  return searchMedicineResult
}

class SearchMedicine extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.searchMedicineOnChange = this.searchMedicineOnChange.bind(this)
    this.stateChangeHandler = this.stateChangeHandler.bind(this)
    this.onSelectItem = this.onSelectItem.bind(this)
    this.onSearchMedicine = this.onSearchMedicine.bind(this)
  }

  searchMedicineOnChange (event) {
    if (event.target.value.length > 3) {
      this.props.searchMedicineLoading(
        this.props.searchMedicineState,
        this.props.checkPincodeState.payload.id,
        event.target.value
      )
    }
  }

  onSelectItem () {
  }

  onSearchMedicine (medicineName) {
    const href = `${MEDICINE_LIST_PRODUCT}?productName=${medicineName}`
    const as = `${MEDICINE_LIST_PRODUCT}/${medicineName}`
    Router.push(href, as)
  }

  stateChangeHandler = changes => {
    let {
      isOpen = this.state.isOpen,
      inputValue = this.state.inputValue,
      type
    } = changes

    // console.log('this.state.isOpen : ', this.state.isOpen)
    // console.log('isOpen : ', isOpen)
    console.warn('type : ', type, Downshift.stateChangeTypes)

    isOpen = (type === Downshift.stateChangeTypes.blurInput)
      ? this.state.isOpen : isOpen
    // || type === Downshift.stateChangeTypes.clickItem
    this.setState({
      isOpen,
      inputValue
    })
  }

  render () {
    const {
      classes,
      searchMedicineState,
      checkPincodeLoading,
      checkPincodeState,
      cartState,
      incrementCartItemLoading,
      addToCartHandler
    } = this.props
    const isOpen = this.state.isOpen
    const searchMedicineResult = searchMedicineState.payload.searchMedicineResult
    return (
      <div className={classes.root}>
        <Downshift
          onStateChange={this.stateChangeHandler}
          // onOuterClick={this.onOuterClick}
          // onSelectItem={this.onSelectItem}
          isOpen={isOpen}
        >
          {({ getInputProps, getItemProps, getMenuProps, isOpen, inputValue, selectedItem, highlightedIndex }) => (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                InputProps: getInputProps({
                  placeholder: 'Search medicine...',
                  id: 'search-medicine',
                  autoFocus: true,
                  onChange: this.searchMedicineOnChange,
                  inputValue
                }),
                onSearchClick: this.onSearchMedicine
              })}
              {isOpen ? (
                <Paper className={classes.paper} square>
                  <ul
                    {...getMenuProps()}
                    className={classes.searchContentWrapper}
                  >
                    {getSuggestions(searchMedicineResult).map((suggestion, index) =>
                      renderSuggestion({
                        suggestion,
                        index,
                        itemProps: getItemProps({
                          item: suggestion.name
                        }),
                        highlightedIndex,
                        selectedItem,
                        onSelectItem: this.onSelectItem,
                        searchItemStyle: classes.searchItem,
                        highlightedSearchItem: `${classes.searchItem} ${classes.highlightedSearchItem}`,
                        selectedSearchItem: `${classes.searchItem} ${classes.selectedSearchItem}`,
                        checkPincodeLoading,
                        checkPincodeState,
                        cartState,
                        incrementCartItemLoading,
                        addToCartHandler
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

export default withStyles(styles)(SearchMedicine)
