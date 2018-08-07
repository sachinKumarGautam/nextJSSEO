import ContentLoader from 'react-content-loader'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    loaderWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between'
    },
    loaderItem: {
      width: '240px'
    }
  }
}

const MedicineListLoader = ({ classes }) => (
  <div className={classes.loaderWrapper}>
    <div className={classes.loaderItem}>
      <ContentLoader
        height={40}
        width={70}
        speed={2}
        primaryColor='#f3f3f3'
        secondaryColor='#ecebeb'
      >
        <rect x='2' y='4.67' rx='4' ry='4' width='60.05' height='3.18' />
        <rect x='3' y='12.05' rx='3' ry='3' width='43.4' height='3.09' />
        <rect x='3.18' y='19.86' rx='3' ry='3' width='35.97' height='3.43' />
        <rect x='3.62' y='28.42' rx='3' ry='3' width='49.04' height='2.88' />
      </ContentLoader>
    </div>
    <div className={classes.loaderItem}>
      <ContentLoader
        height={40}
        width={70}
        speed={2}
        primaryColor='#f3f3f3'
        secondaryColor='#ecebeb'
      >
        <rect
          x='41.29'
          y='5.76'
          rx='4'
          ry='4'
          width='22.3443'
          height='4.2158'
        />
        <rect x='21' y='13.05' rx='3' ry='3' width='43.4' height='3.77' />
        <rect x='39' y='20.86' rx='3' ry='3' width='25.54' height='9.333' />
      </ContentLoader>
    </div>
  </div>
)

export default withStyles(styles)(MedicineListLoader)
