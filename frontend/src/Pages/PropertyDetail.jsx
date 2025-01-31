import React from 'react'
import PropertyDetailHeader from '../Components/ProppertyDetailHeader'
import Description from '../Components/Description'
import RentalDetail from '../Components/RentalDetail'

const PropertyDetail = () => {
  return (
    <div>
        <PropertyDetailHeader/>
        <Description/>
        <RentalDetail/>
    </div>
  )
}

export default PropertyDetail