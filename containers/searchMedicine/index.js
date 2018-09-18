import React from 'react'
import Router from 'next/router'
import Downshift from 'downshift'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '../../components/button'
import SearchIcon from '@material-ui/icons/Search'
import MedicineListDetails from '../../components/MedicineListDetails'
import TextErrorMessage
  from '../../components/activityIndicator/error/TextErrorMessage'
import { PRODUCT_SEARCH, PRODUCT_DETAILS } from '../../routes/RouteConstant'

import { CUSTOM_MESSGAE_SNACKBAR } from '../messages/errorMessages'
import debounce from 'lodash.debounce'
import { modifiyMedicineList } from '../../utils/common'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    flexGrow: 1,
    width: 'auto',
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
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 2,
    width: 'auto'
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
  },
  inputFormControl: {
    flexWrap: 'wrap',
    width: 'auto',
    paddingLeft: theme.spacing.unit * 4,
    borderColor: theme.palette.customGrey.grey200,
    border: `1px solid ${theme.palette.common.black}`,
    borderRadius: theme.spacing.unit * 4,
    backgroundColor: theme.palette.secondary.main
  },
  inputFocused: {
    border: `1px solid ${theme.palette.customGrey.grey100}`
  },
  searchButton: {
    position: 'absolute',
    right: 0,
    top: -(theme.spacing.unit * 2.2),
    height: theme.spacing.unit * 4,
    borderRadius: `0px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px 0px`
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: `0px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px 0px`,
    marginLeft: theme.spacing.unit * 2.5
  },
  iconColor: {
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit * 4
  },
  searchContentWrapper: {
    listStyle: 'none',
    paddingLeft: 0,
    marginTop: 0,
    marginBottom: 0
  },
  searchItem: {
    '&:not(:last-child)': {
      borderBottom: `1px solid ${theme.palette.customGrey.grey100}`,
      paddingBottom: theme.spacing.unit
    },
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  highlightedSearchItem: {
    backgroundColor: theme.palette.customGrey.grey50
  },
  selectedSearchItem: {
    fontWeight: theme.typography.fontWeightBold
  },
  progress: {
    position: 'absolute',
    left: theme.spacing.unit * 3.5,
    color: theme.palette.primary.main,
    zIndex: 999
  },
  errorMessage: {
    ...theme.typography.caption,
    color: theme.palette.customRed.red200,
    fontSize: theme.typography.pxToRem(11),
    textAlign: 'left',
    paddingLeft: theme.spacing.unit * 18,
    width: theme.spacing.unit * 80
  }
})

function renderInput (inputProps) {
  const {
    InputProps,
    classes,
    ref,
    onChange,
    searchMedicineIsLoading,
    ...other
  } = inputProps
  return (
    <div className={classes.searchBar}>
      {searchMedicineIsLoading &&
        <CircularProgress className={classes.progress} size={20} />}
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
        variant='flat'
        classes={{
          root: classes.searchButton
        }}
        onClick={
          InputProps.inputValue
            ? inputProps.onSearchClick.bind(this, InputProps.inputValue)
            : null
        }
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
  checkPincodeState,
  addToCartHandler
}) {
  const isHighlighted = highlightedIndex === index
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1
  const listStyle = isHighlighted
    ? highlightedSearchItem
    : isSelected ? selectedSearchItem : searchItemStyle
  return (
    <li {...itemProps} className={listStyle}>
      <MedicineListDetails
        itemDetails={suggestion}
        checkIfAlredyExistInCart={suggestion.is_exist_in_cart}
        openPicodeDialogFrom
        checkPincodeState={checkPincodeState}
        addToCartHandler={addToCartHandler}
      />
    </li>
  )
}

class SearchMedicine extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false,
      highlightedIndex: ''
    }
    this.searchMedicineOnChange = this.searchMedicineOnChange.bind(this)
    this.stateChangeHandler = this.stateChangeHandler.bind(this)
    this.onSearchClick = this.onSearchClick.bind(this)
    this.searchMedicineDebounce = debounce(this.searchMedicineDebounce, 350)
  }

  searchMedicineOnChange = event => {
    event.persist()
    this.searchMedicineDebounce(event)
  }

  searchMedicineDebounce (event) {
    if (event.target.value) {
      this.props.searchMedicineLoading(
        this.props.searchMedicineState,
        this.props.checkPincodeState.payload.id,
        event.target.value,
        0, // page number
        10, // page size,
        true // isHeader props is true
      )
    }
  }

  onSearchClick (medicineName) {
    const href = `${PRODUCT_SEARCH}?slug=${medicineName}`
    const as = `${PRODUCT_SEARCH}?slug=${medicineName}`
    Router.push(href, as)
  }

  stateChangeHandler = changes => {
    let { isOpen = this.state.isOpen, type, highlightedIndex } = changes
    const searchMedicineResult = this.props.searchMedicineState.payload
      .searchMedicineResult

    isOpen = type === Downshift.stateChangeTypes.blurInput
      ? this.state.isOpen
      : isOpen
    // restrict closing of search item list because of pincode dialog invokes blur event on search bar
    if (type === Downshift.stateChangeTypes.keyDownEnter) {
      this.handleOnEnterItem(
        searchMedicineResult,
        type,
        this.state.highlightedIndex
      )
    } else {
      this.setState({
        highlightedIndex: highlightedIndex
      })
    }

    this.setState({ isOpen })
  }

  handleOnEnterItem = (searchMedicineResult, type, prevHighlightedIndex) => {
    const slug = searchMedicineResult[prevHighlightedIndex].slug
    const city = this.props.checkPincodeState.payload.city
    const href = `${PRODUCT_DETAILS}?id=${slug}&location=${city}`
    const as = `${PRODUCT_DETAILS}/${slug}?location=${city}`
    Router.push(href, as)
  }

  render () {
    const {
      classes,
      searchMedicineState,
      checkPincodeState,
      addToCartHandler,
      cartState
    } = this.props
    const isOpen = this.state.isOpen
    const searchMedicineResult =
      searchMedicineState.payload.searchMedicineResult
    const searchMedicineIsLoading = searchMedicineState.isLoading
    const cartItems = cartState.payload.cart_items.payload
    return (
      <div className={classes.root}>
        {this.props.searchMedicineState.errorState.isError &&
          <TextErrorMessage
            errorMessage={
              this.props.searchMedicineState.errorState.error.response
                ? this.props.searchMedicineState.errorState.error.response.body
                  .error.message
                : CUSTOM_MESSGAE_SNACKBAR
            }
            customStyle={this.props.classes.errorMessage}
          />}
        <Downshift onStateChange={this.stateChangeHandler} isOpen={isOpen}>
          {({
            getInputProps,
            getItemProps,
            getMenuProps,
            isOpen,
            inputValue,
            selectedItem,
            highlightedIndex
          }) => (
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
                onSearchClick: this.onSearchClick,
                searchMedicineIsLoading
              })}
              {isOpen
                ? <Paper className={classes.paper} square>
                  <ul
                    {...getMenuProps()}
                    className={classes.searchContentWrapper}
                  >
                    {modifiyMedicineList(
                      searchMedicineResult,
                      cartItems
                    ).map((suggestion, index) =>
                      renderSuggestion({
                        suggestion,
                        index,
                        itemProps: getItemProps({
                          item: suggestion.name
                        }),
                        highlightedIndex,
                        selectedItem,
                        searchItemStyle: classes.searchItem,
                        highlightedSearchItem: `${classes.searchItem} ${classes.highlightedSearchItem}`,
                        selectedSearchItem: `${classes.searchItem} ${classes.selectedSearchItem}`,
                        checkPincodeState,
                        addToCartHandler
                      })
                    )}
                  </ul>
                </Paper>
                : null}
            </div>
          )}
        </Downshift>
      </div>
    )
  }
}

export default withStyles(styles)(SearchMedicine)
