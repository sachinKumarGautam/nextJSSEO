import React from 'react'
import Downshift from 'downshift'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    flexGrow: 1,
    width: theme.spacing.unit * 41.75,
    margin: '0 auto',
    position: 'relative'
  },
  paper: {
    position: 'absolute',
    maxHeight: theme.spacing.unit * 20,
    overflow: 'scroll',
    zIndex: 1,
    left: 0,
    right: 0,
    width: theme.spacing.unit * 41.75
  },
  inputFormControl: {
    ...theme.typography.body1,
    color: theme.palette.customGrey.grey400,
    flexWrap: 'wrap',
    width: theme.spacing.unit * 41.75,
    borderColor: theme.palette.customGrey.grey200,
    borderBottom: `1px solid ${theme.palette.customGrey.grey200}`,
    borderRadius: 0,
    marginTop: theme.spacing.unit * 2
  },
  inputFocused: {
    borderBottom: `2px solid ${theme.palette.primary.main}`
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: `0px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px 0px`
  },
  searchItem: {
    ...theme.typography.caption,
    color: theme.palette.customGrey.grey400,
    '&:not(:last-child)': {
      ...theme.typography.caption,
      color: theme.palette.customGrey.grey400,
      borderBottom: `1px solid ${theme.palette.customGrey.grey100}`
    },
    padding: theme.spacing.unit * 2
  },
  highlightedSearchItem: {
    ...theme.typography.caption,
    color: theme.palette.customGrey.grey400,
    backgroundColor: theme.palette.customGrey.grey50
  },
  selectedSearchItem: {
    ...theme.typography.caption,
    color: theme.palette.customGrey.grey400,
    fontWeight: theme.typography.fontWeightBold
  },
  searchContentWrapper: {
    listStyle: 'none',
    padding: 0,
    marginTop: 0,
    marginBottom: 0
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
  onSelectItem
}) {
  const isHighlighted = highlightedIndex === index
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1

  const listStyle = isHighlighted ? highlightedSearchItem : (isSelected ? selectedSearchItem : searchItemStyle)
  return (
    <li
      {...itemProps}
      className={listStyle}
    >
      {suggestion.locality}
    </li>
  )
}

function getSuggestions (locationSearchResult) {
  return locationSearchResult
}

class LocationSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.searchLocalityOnChange = this.searchLocalityOnChange.bind(this)
    this.onSelectItem = this.onSelectItem.bind(this)
  }

  searchLocalityOnChange (event) {
    this.props.getLocalityDetailListLoading(
      this.props.deliveryDetailsState,
      this.props.deliveryDetailsState.addressForm.pincode,
      this.props.deliveryDetailsState.addressForm.state,
      this.props.deliveryDetailsState.addressForm.city,
      event.target.value
    )
    this.props.onChange(event.target.value)
    this.setState({
      isOpen: this.props.deliveryDetailsState.addressLocalityList.payload.length > 0
    })
  }

  onSelectItem (itemDetails) {
    this.props.onChange(itemDetails)
    this.setState({
      isOpen: false
    })
  }

  render () {
    const {
      classes,
      deliveryDetailsState
    } = this.props
    const locationSearchResult = deliveryDetailsState.addressLocalityList.payload
    const locality = deliveryDetailsState.addressForm.locality
    const isOpen = this.state.isOpen

    return (
      <div className={classes.root}>
        <Downshift
          selectedItem={locality}
          onChange={this.onSelectItem}
          isOpen={isOpen}
        >
          {({ getInputProps, getItemProps, getMenuProps, isOpen, inputValue, selectedItem, highlightedIndex }) => (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                InputProps: getInputProps({
                  placeholder: 'Search Locality',
                  id: 'search-locality',
                  autofocus: true,
                  onChange: this.searchLocalityOnChange,
                  inputValue
                })
              })}
              {isOpen ? (
                <Paper className={classes.paper} square>
                  <ul
                    {...getMenuProps()}
                    className={classes.searchContentWrapper}
                  >
                    {getSuggestions(locationSearchResult).map((suggestion, index) =>
                      renderSuggestion({
                        suggestion,
                        index,
                        itemProps: getItemProps({
                          item: suggestion.locality
                        }),
                        highlightedIndex,
                        selectedItem,
                        onSelectItem: this.onSelectItem,
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

export default withStyles(styles)(LocationSearch)
