import React from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  imagePickerWrapper: {
    width: '100%',
    height: '100px',
    background: '#fff',
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
  pickerButton: {
    width: '100px',
    height: '100px',
    background: 'yellow'
  },
  pickerImage: {
    width: '100px',
    height: '100px',
    background: '#eee',
    display: 'inline-block',
    marginRight: '5px',
    flexShrink: 0
  },
  deleteButton: {
    position: 'absolute',
    right: '6px',
    color: '#fff',
    width: '25px',
    height: '25px',
    background: '#333',
    borderRadius: '50%',
    lineHeight: '23px',
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
    width: '100px',
    textAlign: 'center',
    background: '#fff',
    padding: '15px',
    color: '#80c241',
    borderRadius: '2px',
    fontWeight: '300',
    flexShrink: 0,
    marginRight: '5px',
    border: '1px solid #80c241',
    marginTop: 10
  },
  pickerListLabelPlus: {
    fontSize: '35px',
    display: 'block',
    marginBottom: '5px'
  },
  pickerListLabelAddImage: {
    fontSize: '12px',
    display: 'block'
  },
  deleteButtonWrapper: {
    position: 'relative',
    display: 'inline-block'
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
        <label
          className={props.classes.pickerListLabelAddImage}
          for='file'
        >
          Add Image
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
              x
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
