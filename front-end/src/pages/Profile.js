import React from 'react'
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div>
        <h1 className="font-bold text-left" style={{marginLeft: 80, marginTop: 10}}>Profile Page</h1>
        <div className='flex'>
          <div className='flex-none'>
            <div className='card w-96 bg-base-100 shadow-x1' style={{marginLeft: 80}}>
              <div style={{backgroundColor:"#fcba03"}}> 
                <figure>
                  <img src={require("../Images/backgroundImage.jpg")} />
                  <div className="avatar" style={{right:210, top:5}}>
                    <div className="w-24 rounded">
                      <div className='profilePic' >
                      <img src={require("../Images/childfalling.jpg")} />
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
              <div className='card-body'>
                <h2 className='card-title'>NAME HERE</h2>
                <p>Home Locations: INSERT HOME LOCATION HERE</p>
                <div className="card-action justify-end">
                </div>
                <p>we dont want them anymore</p>
              </div>
            </div>
          </div>
          <div className='flex-1' style={{background:"#03fc28"}}>
            <div className="flex justify-center align-center">
              <a>
                <Link to="/dependents" className="btn btn-info">View Dependents</Link>
              </a>
            </div>
          </div>
        </div>
        <div style={{height:450, background:"#03a9fc"}}></div>
    </div>
  )
}

export default Profile