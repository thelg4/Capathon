import React from 'react'
import { Link } from 'react-router-dom';
import ProfileCard from '../components/common/PofileCard';
import User from '../mockdata/users.json'

function Profile() {
  return (
    <div>
        <h1 className="font-bold text-left" style={{marginLeft: 80, marginTop: 10}}>Profile Page</h1>
        <div className='flex justify-center align-center'>
          <div className='flex-none'>
           <ProfileCard />
          </div>
          <div className='flex-none' style={{width:300}}>
            <div className="flex justify-center align-center" style={{marginTop:80}}>
              <a>
                <Link to="/dependents" className="btn btn-info">View Dependents</Link>
              </a>
            </div>
          </div>
        </div>
        <div className='flex justify-left text-left' style={{marginLeft:660}}>
          <div>
            <h2>User Information</h2>
            <p>Email: oppagangnamstyle@gmail.com</p>
            <p></p>
            <p>Age: 69</p>
            <p>Location: In Your walls</p>
          </div>
        </div>
    </div>
  )
}

export default Profile