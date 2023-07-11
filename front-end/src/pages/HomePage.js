import React from 'react'
import UserCard from '../components/common/UserCard'

function HomePage() {
  return (
    <div>
      <div className="text-sm breadcrumbs">
        <ul>
          <li><a>Home</a></li>
        </ul>
      </div>
        <h1 className="font-bold text-center">Home Page</h1>
        <UserCard />
    </div>
  )
}

export default HomePage