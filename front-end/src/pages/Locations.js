import React from 'react'
import UserCard from '../components/common/UserCard'
import LocationCard from '../components/common/LocationCard'

function Locations() {
  return (
    <div>
      <div className="text-sm breadcrumbs">
        <ul>
          <li><a>Home</a></li>
          <li><a>Dependents</a></li>
        </ul>
      </div>



       <h1 className="font-bold text-3xl text-center">Locations</h1>

       <LocationCard />
    </div>
  )
}

export default Locations