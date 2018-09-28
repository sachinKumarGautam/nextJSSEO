import ContentLoader from 'react-content-loader'
import React from 'react'

const CardItemLoader = props => (
  <React.Fragment>
    <ContentLoader
      height={85}
      width={300}
      speed={2}
      primaryColor='#f3f3f3'
      secondaryColor='#ecebeb'
      {...props}
    >
      <rect x='19' y='21.49' rx='3' ry='3' width='95.2' height='7.17' />
      <rect x='0' y='120' rx='3' ry='3' width='201' height='6.4' />
      <circle cx='59' cy='20.05' r='1' />
      <rect x='21' y='42.05' rx='0' ry='0' width='54' height='8' />
      <rect x='22' y='58.05' rx='0' ry='0' width='38' height='7' />
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
    </ContentLoader>
  </React.Fragment>
)

export default CardItemLoader
