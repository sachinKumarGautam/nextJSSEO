import React from 'react'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Paper from '@material-ui/core/Paper'

import ProductDetailsWrapper from '../containers/productDetails'

import { getProductDetailLoading } from '../containers/productDetails/productDetailsActions'

// import fetch from 'isomorphic-fetch'

const styles = theme => ({
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: theme.spacing.unit * 7,
    paddingRight: theme.spacing.unit * 7,
    maxWidth: theme.breakpoints.values.lg,
    minWidth: theme.breakpoints.values.md,
    margin: '0 auto',
    marginTop: theme.spacing.unit * 12
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  }
})

class ProductDetails extends React.Component {
    static getInitialProps (props) {
      const { query } = props
      return query
    }
    
  componentDidMount () {
    console.log(this.props.query)
    // this.props.actions.getProductDetailLoading(this.props.productDetailsState, 'I0008')
  }

  render() {
    const {
      classes,
      actions
    } = this.props;

    return (
      <div>
        <Header />
        <div>
          <Paper className={classes.root} elevation={1}>
            <ProductDetailsWrapper
            getProductDetailLoading={actions.getProductDetailLoading}
             />
          </Paper>
        </div>
        <Footer />
      </div>
    );
  }
}

// ProductDetails.getInitialProps = async ({ req }) => {
//   const res = await fetch('https://api.github.com/repos/zeit/next.js')
//   const json = await res.json()
//   return { stars: json.stargazers_count }
// }

function mapStateToProps (state) {
  return {
    productDetailsState: state.productDetailsState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getProductDetailLoading
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(styles)(ProductDetails)))
