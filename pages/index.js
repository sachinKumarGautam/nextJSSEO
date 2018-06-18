import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../src/withRoot';

import Link from 'next/link'

import withRedux from 'next-redux-wrapper'
import initStore from '../redux'
import CharacterInfo from '../components/CharacterInfo'
import { rootEpic } from '../redux/epics'
import * as actions from '../redux/actions'
import { of } from 'rxjs/observable/of'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class Index extends React.Component {
  static async getInitialProps ({ store, isServer }) {
    const resultAction = await rootEpic(
      of(actions.fetchCharacter(isServer)),
      store
    ).toPromise() // we need to convert Observable to Promise
    store.dispatch(resultAction)

    return { isServer }
  }

  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  componentDidMount () {
    this.props.startFetchingCharacters()
  }

  componentWillUnmount () {
    this.props.stopFetchingCharacters()
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div>
        <div>
          <h1>Index Page</h1>
          <CharacterInfo />
          <br />
          <nav>
            <Link href='/other'><a>Navigate to "/other"</a></Link>
          </nav>
        </div>
        <div className={classes.root}>
          <Dialog open={open} onClose={this.handleClose}>
            <DialogTitle>Super Secret Password</DialogTitle>
            <DialogContent>
              <DialogContentText>1-2-3-4-5</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={this.handleClose} label={'OK'} />
            </DialogActions>
          </Dialog>
          <Typography variant="display1" gutterBottom>
            Material-UI
          </Typography>
          <Typography variant="subheading" gutterBottom>
            example project
          </Typography>
          <Button variant="raised" color="primary" onClick={this.handleClick}>
            Super Secret Password
          </Button>
        </div>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default withRoot(withStyles(styles)(Index));

export default withRedux(
  initStore,
  null,
  {
    startFetchingCharacters: actions.startFetchingCharacters,
    stopFetchingCharacters: actions.stopFetchingCharacters
  }
)(withRoot(withStyles(styles)(Index)))
