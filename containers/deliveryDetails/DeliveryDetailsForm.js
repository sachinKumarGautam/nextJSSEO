import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Fade from '@material-ui/core/Fade'

import Form from '../../components/forms/index'

const styles = theme => ({
  paper: {
    width: '100%',
    maxWidth: theme.spacing.unit * 59,
    borderRadius: theme.spacing.unit / 2,
    backgroundColor: theme.palette.common.white,
    border: `solid 1px ${theme.palette.customGrey.grey250}`,
    minHeight: theme.spacing.unit * 22
  },
  dialogTitle: {
    ...theme.typography.subheading,
    textAlign: 'center',
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold
  }
})

function Transition (props) {
  return <Fade {...props} />
}

class DeliveryDetailForm extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div>
        <Dialog
          open={this.props.openDeliveryFormDialog}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.props.closeDeliveryFormModal}
          aria-labelledby='delivery-detail-form'
          classes={{
            paper: classes.paper
          }}
        >
          <DialogTitle
            id='modal'
            disableTypography
            classes={{
              root: classes.dialogTitle
            }}
          >
            {
              this.props.isEdit &&
              !this.props.isAddNewAddressButtonClicked
                ? 'EDIT ADDRESS'
                : 'ADD NEW ADDRESS'
            }
          </DialogTitle>
          <DialogContent>
            <Form
              isEdit={this.props.isEdit}
              isCartPage={this.props.isCartPage}
              type={'deliveryForm'}
              onSubmit={this.props.onSubmit}
              customerState={this.props.customerState}
              deliveryDetailsState={this.props.deliveryDetailsState}
              deliveryFormState={this.props.deliveryFormState}
              closeModal={this.props.closeDeliveryFormModal}
              checkPincodeDetailLoading={this.props.checkPincodeDetailLoading}
              updateAddressFormValue={this.props.updateAddressFormValue}
              getLocalityDetailListLoading={this.props.getLocalityDetailListLoading}
              checkPincodeState={this.props.checkPincodeState}
            />
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}

export default (withStyles(styles)(DeliveryDetailForm))
