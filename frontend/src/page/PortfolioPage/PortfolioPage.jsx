import React from 'react'
import Banners from '../../common/Banners/Banners'
import bannerImg from '../../assets/images/images.jpg'
import ProtfolioFeatured from '../../component/ProtfolioComponent/ProtfolioFeatured'
import AllPortfolio from '../../component/ProtfolioComponent/AllPortfolio'

const PortfolioPage = () => {
  return (
    <div>
      <Banners image={bannerImg} title='It All Start In Here' content='here goes the contet of the about us page'/>
      <ProtfolioFeatured/>
      <AllPortfolio/>
    </div>
  )
}

export default PortfolioPage