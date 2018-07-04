import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import ProductName from '../../components/ProductName'
import ProductBrand from '../../components/ProductBrand'
import ProductPackSize from '../../components/ProductPackSize'

const styles = theme => ({
  medicineListWrapper: {
    padding: theme.spacing.unit * 2.5,
    borderBottom: `1px solid ${theme.palette.customGrey.grey800}`
  },
  cartAmountWrapper: {
    marginTop: theme.spacing.unit * 1.25
  },
  medicineNameWrapper: {
    fontSize: theme.spacing.unit * 1.75,
    fontWeight: theme.typography.fontWeightBold
  },
  companyNameWrapper: {
    fontSize: theme.spacing.unit * 1.5
  },
  amount: {
    fontSize: theme.spacing.unit * 2
  },
  amountWrapper: {
    textAlign: 'center'
  }
});

class MedicineList extends Component {
  render () {
    return (
      <div>
        <div className={this.props.classes.medicineListWrapper}>
          <Grid container spacing={24}>
            <Grid item xs={7}>
              <ProductName
                customStyle={this.props.classes.medicineNameWrapper}
                name={'Glycomet 0.5 MG TAB 10S'}
              />
              <ProductBrand
                customStyle={this.props.classes.companyNameWrapper}
                brand={'Cipla Ltd'}
                withoutImage={true}
              />
              <ProductPackSize
                customStyle={this.props.classes.companyNameWrapper}
                packType={'Tablet'}
                packSize={'10.0'}
                withoutImage={true}
              />
            </Grid>
            <Grid item xs={5}>
              <div className={this.props.classes.amountWrapper}>
                <Typography className={this.props.classes.amount}>
                  Rs. 300.00
                </Typography>
              </div>
              <div>
                <Grid container spacing={24}>
                  <Grid item xs={5}>
                    <IconButton>
                      <img src='/static/images/minusDisable.svg' />
                    </IconButton>
                  </Grid>
                  <Grid item xs={2} className={this.props.classes.cartAmountWrapper}>
                    <Typography>
                      1
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <IconButton>
                      <img src='/static/images/plus.svg' />
                    </IconButton>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={this.props.classes.medicineListWrapper}>
          <Grid container spacing={24}>
            <Grid item xs={7}>
              <ProductName
                customStyle={this.props.classes.medicineNameWrapper}
                name={'Glycomet 0.5 MG TAB 10S'}
              />
              <ProductBrand
                customStyle={this.props.classes.companyNameWrapper}
                brand={'Cipla Ltd'}
                withoutImage={true}
              />
              <ProductPackSize
                customStyle={this.props.classes.companyNameWrapper}
                packType={'Tablet'}
                packSize={'10.0'}
                withoutImage={true}
              />
            </Grid>
            <Grid item xs={5}>
              <div className={this.props.classes.amountWrapper}>
                <Typography className={this.props.classes.amount}>
                  Rs. 300.00
                </Typography>
              </div>
              <div>
                <Grid container spacing={24}>
                  <Grid item xs={5}>
                    <IconButton>
                      <img src='/static/images/minusDisable.svg' />
                    </IconButton>
                  </Grid>
                  <Grid item xs={2} className={this.props.classes.cartAmountWrapper}>
                    <Typography>
                      1
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <IconButton>
                      <img src='/static/images/plus.svg' />
                    </IconButton>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={this.props.classes.medicineListWrapper}>
          <Grid container spacing={24}>
            <Grid item xs={7}>
              <ProductName
                customStyle={this.props.classes.medicineNameWrapper}
                name={'Glycomet 0.5 MG TAB 10S'}
              />
              <ProductBrand
                customStyle={this.props.classes.companyNameWrapper}
                brand={'Cipla Ltd'}
                withoutImage={true}
              />
              <ProductPackSize
                customStyle={this.props.classes.companyNameWrapper}
                packType={'Tablet'}
                packSize={'10.0'}
                withoutImage={true}
              />
            </Grid>
            <Grid item xs={5}>
              <div className={this.props.classes.amountWrapper}>
                <Typography className={this.props.classes.amount}>
                  Rs. 300.00
                </Typography>
              </div>
              <div>
                <Grid container spacing={24}>
                  <Grid item xs={5}>
                    <IconButton>
                      <img src='/static/images/minusDisable.svg' />
                    </IconButton>
                  </Grid>
                  <Grid item xs={2} className={this.props.classes.cartAmountWrapper}>
                    <Typography>
                      1
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <IconButton>
                      <img src='/static/images/plus.svg' />
                    </IconButton>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(MedicineList)
