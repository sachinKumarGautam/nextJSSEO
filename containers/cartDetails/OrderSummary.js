import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Button from '../../components/button'

const styles = theme => ({
  root: {
    width: '100%',
  },
  expansionPanel: {
    marginBottom: theme.spacing.unit * 2
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
    fontSize: theme.spacing.unit * 2.75,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGrey.grey500,
    marginLeft: theme.spacing.unit * 1.25
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  buttonRoot: {
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.primary.main
  },
  buttonLabel: {
    color: theme.palette.common.white
  }
});

class OrderSummary extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          expanded={expanded === 'panel1'}
          onChange={this.handleChange('panel1')}
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary expandIcon={<div />}>
            <img src='/static/images/loggedIn.svg' />
            <Typography className={classes.heading}>
              Logged in
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
            <Button
              size='small'
              variant='outlined'
              color='primary'
              classes={{
                root: this.props.classes.buttonRoot,
                label: this.props.classes.buttonLabel
              }}
              style={{float: 'right'}}
              label={'NEXT'}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === 'panel2'}
          onChange={this.handleChange('panel2')}
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary expandIcon={<div />}>
            <img src='/static/images/attachedPrescriptions.svg' />
            <Typography className={classes.heading}>Attached Prescriptions</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
              diam eros in elit. Pellentesque convallis laoreet laoreet.
            </Typography>
            <Button
              size='small'
              variant='outlined'
              color='primary'
              classes={{
                root: this.props.classes.buttonRoot,
                label: this.props.classes.buttonLabel
              }}
              style={{float: 'right'}}
              label={'NEXT'}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === 'panel3'}
          onChange={this.handleChange('panel3')}
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary expandIcon={<div />}>
            <Typography className={classes.heading}>Patient Details</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
              eros, vitae egestas augue. Duis vel est augue.
            </Typography>
            <Button
              size='small'
              variant='outlined'
              color='primary'
              classes={{
                root: this.props.classes.buttonRoot,
                label: this.props.classes.buttonLabel
              }}
              style={{float: 'right'}}
              label={'NEXT'}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === 'panel4'}
          onChange={this.handleChange('panel4')}
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary expandIcon={<div />}>
            <Typography className={classes.heading}>Delivery Details</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
              eros, vitae egestas augue. Duis vel est augue.
            </Typography>
            <Button
              size='small'
              variant='outlined'
              color='primary'
              classes={{
                root: this.props.classes.buttonRoot,
                label: this.props.classes.buttonLabel
              }}
              style={{float: 'right'}}
              label={'NEXT'}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === 'panel5'}
          onChange={this.handleChange('panel5')}
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary expandIcon={<div />}>
            <Typography className={classes.heading}>Payment</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
              eros, vitae egestas augue. Duis vel est augue.
            </Typography>
            <Button
              size='small'
              variant='outlined'
              color='primary'
              classes={{
                root: this.props.classes.buttonRoot,
                label: this.props.classes.buttonLabel
              }}
              style={{float: 'right'}}
              label={'NEXT'}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(OrderSummary);
