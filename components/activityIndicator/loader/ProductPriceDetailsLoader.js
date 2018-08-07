import ContentLoader from 'react-content-loader'
import ProductPriceDetails
  from '../../containers/productDetails/ProductPriceDetails'

const ProductPriceDetailsLoader = () => (
  <ContentLoader
    height={160}
    width={250}
    speed={2}
    primaryColor='#f3f3f3'
    secondaryColor='#ecebeb'
  >
    <rect x='24' y='21.05' rx='0' ry='0' width='38' height='7.04' />
    <rect x='76' y='21.05' rx='0' ry='0' width='65.83' height='7.04' />
    <rect x='57' y='44.05' rx='0' ry='0' width='97' height='7' />
    <rect x='25' y='70.06' rx='0' ry='0' width='104.52' height='7.02' />
    <rect x='140' y='70.05' rx='0' ry='0' width='35' height='7.02' />
    <rect x='50' y='93.05' rx='0' ry='0' width='77' height='7' />
    <rect x='25' y='114.05' rx='0' ry='0' width='60' height='8' />
    <rect x='25' y='93.05' rx='0' ry='0' width='10' height='7' />
    <rect x='105' y='114.05' rx='0' ry='0' width='56' height='7.04' />
    <rect x='24' y='44.05' rx='0' ry='0' width='13' height='7' />
  </ContentLoader>
)

export default ProductPriceDetailsLoader
