
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Routes,Route } from 'react-router-dom';
import Home from '../src/Pages/Home'
import Profile from './Pages/Profile';
import ProfileCreation from './Pages/ProfileCreation';
import Property from './Pages/Property';
import ProfileCreationLandLord from './Pages/ProfileCreationLandLord';
import PropertyDetail from './Pages/PropertyDetail';


function App() {
  return (
    <div className="">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-Landlord" element={<ProfileCreationLandLord />} />      <Route path="/create-profile" element={<ProfileCreation />} /><Route path="/property" element={<Property />} />
      <Route path="/property-detail" element={<PropertyDetail />} />
      </Routes>  

    </div>
  );
}

export default App;

