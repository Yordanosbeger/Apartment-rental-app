import React from 'react'
import PropertyDetailHeader from '../Components/ProppertyDetailHeader'
import Description from '../Components/Description'
import RentalDetail from '../Components/RentalDetail'
import Faqs from '../Components/Faqs'
import Footer from '../Components/Footer'

const PropertyDetail = () => {
  return (
    <div>
        <PropertyDetailHeader/>
        <Description/>
        <RentalDetail/>
        <Faqs/>
        <Footer/>
    </div>
  )
}

export default PropertyDetail