import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'

const styles = theme => ({
  imagePickerWrapper: {
    width: '100%',
    height: theme.spacing.unit * 12.5,
    background: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'row',
    flex: 12
  },
  pickerList: {
    display: 'flex',
    overflowX: 'scroll',
    overflowY: 'hidden',
    whiteSpace: 'no-wrap'
  },
  pickerImage: {
    width: theme.spacing.unit * 12.5,
    height: theme.spacing.unit * 11.25,
    background: theme.palette.grey['200'],
    display: 'inline-block',
    marginRight: theme.spacing.unit * 0.625,
    flexShrink: 0,
    marginTop: theme.spacing.unit * 1.25
  },
  deleteButton: {
    position: 'absolute',
    right: 0,
    color: theme.palette.common.white,
    width: theme.spacing.unit * 2.5,
    height: theme.spacing.unit * 2.5,
    background: theme.palette.common.black,
    borderRadius: '50%',
    textAlign: 'center'
  },
  pickerListInput: {
    width: '0.1px',
    height: '0.1px',
    opacity: 0,
    overflow: 'hidden',
    position: 'absolute',
    zIndex: -1
  },
  pickerListLabel: {
    cursor: 'pointer',
    width: theme.spacing.unit * 12.5,
    textAlign: 'center',
    background: theme.palette.common.white,
    padding: theme.spacing.unit * 1.875,
    color: theme.palette.customGrey.grey200,
    borderRadius: theme.spacing.unit * 0.25,
    fontWeight: theme.typography.fontWeightLight,
    flexShrink: 0,
    marginRight: theme.spacing.unit * 0.625,
    border: `1px dashed ${theme.palette.customGrey.grey200}`,
    marginTop: theme.spacing.unit * 1.25,
    marginLeft: theme.spacing.unit * 6.25
  },
  pickerListLabelPlus: {
    cursor: 'pointer',
    fontSize: theme.spacing.unit * 4.375,
    display: 'block',
    marginBottom: theme.spacing.unit * 0.625,
    marginTop: theme.spacing.unit * 0.625
  },
  deleteButtonWrapper: {
    position: 'relative',
    display: 'inline-block'
  },
  deleteImageStyle: {
    width: theme.spacing.unit
  }
})

const ImagePicker = (props) => (
  <div className={props.classes.imagePickerWrapper}>
    <div className={props.classes.pickerList} >
      <input
        className={props.classes.pickerListInput}
        id='file'
        type='file'
        accept='image/*'
        onChange={props.onImageSelection.bind(this)}
      />
      <label
        className={props.classes.pickerListLabel}
        for='file'>
        <label
          className={props.classes.pickerListLabelPlus}
          for='file'
        >
          +
        </label>
      </label>
      {
        props.files.map((image, index) => (
          <div
            className={props.classes.deleteButtonWrapper}
            // onClick={props.onViewImage.bind(this, image.url)}
            key={image.id}
          >
            <div
              className={props.classes.deleteButton}
              onClick={props.onDeleteButton.bind(this, index)}
            >
              <img src='/static/images/delete.svg' className={props.classes.deleteImageStyle} />
            </div>
            <img
              src={image.url}
              className={props.classes.pickerImage}
              alt={image.id}
            />
          </div>
        ))
      }
    </div>
  </div>
)

export default withStyles(styles)(ImagePicker)
