import ContentLoader from 'react-content-loader'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    loaderWrapper: {
      border: `0.5px solid ${theme.palette.customGrey.grey250}`,
      borderRadius: theme.spacing.unit / 2,
      marginBottom: theme.spacing.unit * 3,
      marginLeft: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * 6,
      marginRight: theme.spacing.unit * 2
    }
  }
}

const OrderListLoader = props => (
  <div className={props.classes.loaderWrapper}>
    <ContentLoader
      height={140}
      width={380}
      speed={2}
      primaryColor='#f3f3f3'
      secondaryColor='#ecebeb'
      {...props}
    >
      <rect x='14' y='9.32' rx='0' ry='0' width='47.3' height='4.47' />
      <rect x='103' y='122.77' rx='0' ry='0' width='0' height='0' />
      <rect x='77' y='9.15' rx='0' ry='0' width='22.32' height='4.32' />
      <rect x='346' y='12.18' rx='0' ry='0' width='3' height='0' />
      <rect x='296' y='9.18' rx='0' ry='0' width='44' height='6' />
      <rect x='0' y='23.02' rx='0' ry='0' width='396.36' height='1.08' />
      <rect x='30' y='33.18' rx='0' ry='0' width='38' height='4' />
      <circle
        cx='19.807886552931954'
        cy='34.987886552931954'
        r='3.8078865529319543'
      />
      <rect x='17' y='52.57' rx='0' ry='0' width='36.14' height='31.08' />
      <rect x='60' y='53.05' rx='0' ry='0' width='23' height='4.5' />
      <rect x='60' y='60.57' rx='0' ry='0' width='31' height='4' />
      <rect x='-3' y='117.05' rx='0' ry='0' width='400' height='1' />
      <rect x='17' y='123.05' rx='0' ry='0' width='32' height='3' />
      <rect x='17' y='130.05' rx='0' ry='0' width='42' height='3' />
      <rect x='344' y='120.05' rx='0' ry='0' width='22' height='3' />
      <rect x='NaN' y='NaN' rx='0' ry='0' width='NaN' height='NaN' />
      <rect x='327' y='127.05' rx='0' ry='0' width='40' height='3' />
      <rect x='124' y='122.05' rx='0' ry='0' width='24' height='3' />
      <rect x='123' y='128.05' rx='0' ry='0' width='35' height='3' />
      <rect x='241' y='120.05' rx='0' ry='0' width='23' height='3' />
      <rect x='234' y='126.05' rx='0' ry='0' width='31' height='3' />
    </ContentLoader>
  </div>
)

export default withStyles(styles)(OrderListLoader)
