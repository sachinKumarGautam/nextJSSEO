import { withStyles } from '@material-ui/core/styles'
import ContentLoader from 'react-content-loader'

const styles = theme => {
  return {
    loaderWrapper: {
      display: 'inline-block',
      border: `1px solid ${theme.palette.customGrey.grey250}`,
      // padding: theme.spacing.unit * 2.5,
      borderRadius: theme.spacing.unit * 0.5,
      width: theme.typography.pxToRem(310),
      '&: not(: first-child)': {
        marginLeft: theme.typography.pxToRem(20)
      }
    }
  }
}

const SingleCardLoader = ({ classes }) => (
  <div className={classes.loaderWrapper}>
    <ContentLoader
      height={104}
      width={265}
      speed={2}
      primaryColor='#f3f3f3'
      secondaryColor='#ecebeb'
    >
      <rect x='97.68' y='12.37' rx='5' ry='5' width='151.8' height='6.9' />
      <rect
        x='98.73'
        y='36.44'
        rx='5'
        ry='5'
        width='150.92'
        height='6.859999999999999'
      />
      <rect
        x='98.73'
        y='62.44'
        rx='5'
        ry='5'
        width='150.92'
        height='6.859999999999999'
      />
      <rect x='99.52' y='89.52' rx='5' ry='5' width='149.95' height='6.82' />
      <circle
        cx='46.92359806455622'
        cy='51.973598064556214'
        r='28.923598064556217'
      />

    </ContentLoader>
  </div>
)

export default withStyles(styles)(SingleCardLoader)
