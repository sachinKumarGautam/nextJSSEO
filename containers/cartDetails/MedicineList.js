import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  medicineListWrapper: {
    padding: theme.spacing.unit * 2.5,
    borderBottom: '1px solid #eee'
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
              <Typography className={this.props.classes.medicineNameWrapper}>
                Glycomet 0.5 MG TAB 10S
              </Typography>
              <Typography className={this.props.classes.companyNameWrapper}>
                Cipla Ltd
              </Typography>
              <Typography className={this.props.classes.companyNameWrapper}>
                Tablet | 10.0
              </Typography>
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
              <Typography className={this.props.classes.medicineNameWrapper}>
                Glycomet 0.5 MG TAB 10S
              </Typography>
              <Typography className={this.props.classes.companyNameWrapper}>
                Cipla Ltd
              </Typography>
              <Typography className={this.props.classes.companyNameWrapper}>
                Tablet | 10.0
              </Typography>
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
              <Typography className={this.props.classes.medicineNameWrapper}>
                Glycomet 0.5 MG TAB 10S
              </Typography>
              <Typography className={this.props.classes.companyNameWrapper}>
                Cipla Ltd
              </Typography>
              <Typography className={this.props.classes.companyNameWrapper}>
                Tablet | 10.0
              </Typography>
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
