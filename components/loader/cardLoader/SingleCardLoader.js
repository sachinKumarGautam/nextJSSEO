import { withStyles } from '@material-ui/core/styles'
import ContentLoader from 'react-content-loader'

const styles = theme => {
  return {
    loaderWrapper: {
      border: `1px solid ${theme.palette.customGrey.grey250}`,
      padding: theme.spacing.unit * 2.5,
      borderRadius: theme.spacing.unit * 0.5
    }
  }
}

const SingleCardLoader = ({ classes }) => (
  <div className={classes.loaderWrapper}>
    <div>sacjom</div>
    <ContentLoader
      height={124}
      width={315}
      speed={2}
      primaryColor='#f3f3f3'
      secondaryColor='#ecebeb'
      // {...props}
    >
      <circle cx='10' cy='20' r='8' />
      <rect x='25' y='15' rx='5' ry='5' width='220' height='10' />
      <circle cx='10' cy='50' r='8' />
      <rect x='25' y='45' rx='5' ry='5' width='220' height='10' />
      <circle cx='10' cy='80' r='8' />
      <rect x='25' y='75' rx='5' ry='5' width='220' height='10' />
      <circle cx='10' cy='110' r='8' />
      <rect x='25' y='105' rx='5' ry='5' width='220' height='10' />
    </ContentLoader>
  </div>
)

export default withStyles(styles)(SingleCardLoader)
