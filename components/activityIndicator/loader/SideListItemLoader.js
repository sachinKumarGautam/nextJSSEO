import ContentLoader from 'react-content-loader'

const SideListItemsLoader = props => (
  <ContentLoader
    height={300}
    width={180}
    speed={2}
    primaryColor='#f3f3f3'
    secondaryColor='#ecebeb'
    {...props}
  >
    <rect x='2' y='17.49' rx='3' ry='3' width='95.2' height='10.1097' />
    <circle cx='59' cy='20.05' r='1' />
    <rect x='5' y='53.82' rx='0' ry='0' width='71.28' height='11.76' />
    <rect x='241' y='20.05' rx='0' ry='0' width='35' height='8.01' />
    <circle
      cx='235.86154146165802'
      cy='53.911541461658004'
      r='9.86154146165801'
    />
    <circle
      cx='271.28591269649905'
      cy='54.33591269649903'
      r='10.285912696499032'
    />
    <rect x='6' y='92.18' rx='0' ry='0' width='56.43' height='10.56' />
    <rect
      x='6'
      y='133.05'
      rx='0'
      ry='0'
      width='115.84'
      height='10.799999999999999'
    />
    <rect x='7' y='174.05' rx='0' ry='0' width='84' height='12' />
    <rect x='47' y='23.05' rx='0' ry='0' width='0' height='0' />
    <rect x='9' y='216.05' rx='0' ry='0' width='102.08' height='11.06' />
    <rect x='10' y='253.05' rx='0' ry='0' width='139' height='11' />
  </ContentLoader>
)

export default SideListItemsLoader
