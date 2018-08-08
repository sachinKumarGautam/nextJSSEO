import ContentLoader from 'react-content-loader'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    loaderWrapper: {
      display: 'inline-block',
      width: '310px'
    }
  }
}

const CommonContentLoader = ({ classes }) => (
  <div className={classes.loaderWrapper}>
    <ContentLoader
      height={160}
      width={200}
      speed={2}
      primaryColor='#f3f3f3'
      secondaryColor='#ecebeb'
    >
      <rect x='9' y='14.89' rx='0' ry='0' width='100.32' height='11.55' />
      <rect
        x='58'
        y='38.05'
        rx='0'
        ry='0'
        width='72.41300000000001'
        height='12.5712'
      />
      <rect x='44' y='59.05' rx='0' ry='0' width='104.76' height='10.7625' />
      <rect x='11' y='80.06' rx='0' ry='0' width='104.52' height='11.6641' />
      <rect
        x='136'
        y='78.87'
        rx='0'
        ry='0'
        width='43.4'
        height='11.839500000000001'
      />
      <rect x='44' y='105.05' rx='0' ry='0' width='110.88' height='12.25' />
      <rect x='12' y='129.05' rx='0' ry='0' width='60' height='9.76' />
      <rect
        x='12'
        y='105.05'
        rx='0'
        ry='0'
        width='16.299999999999997'
        height='11.41'
      />
      <rect x='89' y='129.05' rx='0' ry='0' width='56' height='10.4896' />
      <rect
        x='10.37'
        y='59.05'
        rx='0'
        ry='0'
        width='20.6115'
        height='11.0985'
      />
      <rect x='10' y='38.05' rx='0' ry='0' width='34.88' height='12.4488' />

    </ContentLoader>
  </div>
)

export default withStyles(styles)(CommonContentLoader)
