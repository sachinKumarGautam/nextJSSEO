import Router from 'next/router'
import Downshift from 'downshift'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
// import MenuItem from '@material-ui/core/MenuItem'
import Button from '../../components/button'
import SearchIcon from '@material-ui/icons/Search'
import MedicineListDetails from '../../components/MedicineListDetails'
import {PRODUCT_DETAILS} from '../../Route'

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
      <MedicineListDetails
        itemDetails={suggestion}
        onSelectItem={onSelectItem}
      />
    </li>
  )
}

function getSuggestions (searchMedicineResult) {
  return searchMedicineResult
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

class SearchMedicine extends React.Component {
  constructor (props) {
    super(props)
    this.searchMedicineOnChange = this.searchMedicineOnChange.bind(this)
    this.onSelectItem = this.onSelectItem.bind(this)
  }

  searchMedicineOnChange (event) {
    this.props.searchMedicineLoading(this.props.searchMedicineState, event.target.value)
  }

  onSelectItem (itemDetails, props) {
    this.props.updateInProgressMedicineState(this.props.searchMedicineState, itemDetails)
    return (
      Router.push({
        pathname: PRODUCT_DETAILS,
        query: { name: itemDetails.name }
      })
    )
  }

  render () {
    const { classes, searchMedicineState } = this.props
    const searchMedicineResult = searchMedicineState.payload.searchMedicineResult
    return (
      <div className={classes.root}>
        <Downshift
          // onSelect={(item) => console.log('tatti', item) }
          // onStateChange={({ inputValue }) => {
          //   return inputValue && this.setState({ inputValue })
          // }}
        >
          {({ getInputProps, getItemProps, getMenuProps, isOpen, inputValue, selectedItem, highlightedIndex }) => (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                InputProps: getInputProps({
                  placeholder: 'Search medicine...',
                  id: 'search-medicine',
                  autofocus: 'true',
                  onChange: this.searchMedicineOnChange
                })
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

export default withStyles(styles)(SearchMedicine)
