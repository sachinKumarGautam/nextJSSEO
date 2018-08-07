import ContentLoader from 'react-content-loader'

const BreadCrumbsLoader = props => (
  <ContentLoader
    height={10}
    width={400}
    speed={2}
    primaryColor='#f3f3f3'
    secondaryColor='#ecebeb'
    {...props}
  >
    <rect x='34' y='0.77' rx='4' ry='4' width='44.46' height='3.0336' />
    <rect x='4' y='0.38' rx='3' ry='3' width='26.35' height='3.16' />
    <rect x='84' y='0.55' rx='3' ry='3' width='39.56' height='3.21' />
  </ContentLoader>
)

export default BreadCrumbsLoader
