const express = require('express')
const next = require('next')
const cookieParser = require('cookie-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const url = require('url')

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(cookieParser())

    // molecule details page
    server.get('/product/molecule/:id', (req, res) => {
      const actualPage = '/molecule-details'
      const queryParams = { molecule_id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    // medicine list page
    server.get('/product/search', (req, res) => {
      const actualPage = '/medicine-list'
      const queryParams = {
        productName: req.query.slug,
        moleculeName: req.query['molecule-name']
      }
      app.render(req, res, actualPage, queryParams)
    })

    // product details page
    server.get('/product/:id', (req, res) => {
      const actualPage = '/product-details'
      const queryParams = {
        product_id: req.params.id,
        location: req.query.location
      }
      app.render(req, res, actualPage, queryParams)
    })

    // refill patients page
    server.get('/customer/:id/patient-refills', (req, res) => {
      const actualPage = '/refill-patients'
      const queryParams = { customer_id: req.params.id }

      if (!req.cookies.token) {
        res.redirect(
          url.format({
            pathname: '/',
            query: {
              authentication: false,
              path: req.originalUrl
            }
          })
        )
      } else {
        app.render(req, res, actualPage, queryParams)
      }
    })

    // patient list page
    server.get('/customer/:id/patients', (req, res) => {
      const actualPage = '/patient-details'
      const queryParams = { customer_id: req.params.id }

      if (!req.cookies.token) {
        res.redirect(
          url.format({
            pathname: '/',
            query: {
              authentication: false,
              path: req.originalUrl
            }
          })
        )
      } else {
        app.render(req, res, actualPage, queryParams)
      }
    })

    // shipping address list page
    server.get('/customer/:id/delivery-addresses', (req, res) => {
      const actualPage = '/delivery-details'
      const queryParams = { customer_id: req.params.id }

      if (!req.cookies.token) {
        res.redirect(
          url.format({
            pathname: '/',
            query: {
              authentication: false,
              path: req.originalUrl
            }
          })
        )
      } else {
        app.render(req, res, actualPage, queryParams)
      }
    })

    // order list page
    server.get('/customer/:id/orders', (req, res) => {
      const actualPage = '/order-list'
      const queryParams = { customer_id: req.params.id }

      if (!req.cookies.token) {
        res.redirect(
          url.format({
            pathname: '/',
            query: {
              authentication: false,
              path: req.originalUrl
            }
          })
        )
      } else {
        app.render(req, res, actualPage, queryParams)
      }
    })

    // prescription list page
    server.get('/customer/:id/prescriptions', (req, res) => {
      const actualPage = '/prescription-list'
      const queryParams = { customer_id: req.params.id }

      if (!req.cookies.token) {
        res.redirect(
          url.format({
            pathname: '/',
            query: {
              authentication: false,
              path: req.originalUrl
            }
          })
        )
      } else {
        app.render(req, res, actualPage, queryParams)
      }
    })

    // care points list page
    server.get('/customer/:id/care-points', (req, res) => {
      const actualPage = '/care-points'
      const queryParams = { customer_id: req.params.id }

      if (!req.cookies.token) {
        res.redirect(
          url.format({
            pathname: '/',
            query: {
              authentication: false,
              path: req.originalUrl
            }
          })
        )
      } else {
        app.render(req, res, actualPage, queryParams)
      }
    })

    // cart page
    server.get('/cart/:id', (req, res) => {
      const actualPage = '/cart-details'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    // thank you page
    server.get('/order/:id/order-confirmation', (req, res) => {
      const actualPage = '/order-confirmation'
      const queryParams = {
        id: req.params.id,
        paymentStatus: req.query['payment-status']
      }

      if (!req.cookies.token) {
        res.redirect(
          url.format({
            pathname: '/',
            query: {
              authentication: false,
              path: req.originalUrl
            }
          })
        )
      } else {
        app.render(req, res, actualPage, queryParams)
      }
    })

    // order details page
    server.get('/order/:id', (req, res) => {
      const actualPage = '/order-details'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    // home page
    server.get('/', (req, res) => {
      const actualPage = '/'
      const queryParams = {
        authentication: req.query.authentication,
        path: req.query.path
      }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
