import React from 'react'
import PropertyHeader from '../Components/PropertyHeader'
import PropertyListing from '../Components/PropertyListing'
import PropertyFooter from '../Components/PropertyFooter'

const Property = () => {
  return (
    <div>
        <PropertyHeader/>
        <PropertyListing/>
        <PropertyFooter/>
    </div>
  )
}

export default Property