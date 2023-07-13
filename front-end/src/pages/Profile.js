import React from 'react'
import axios from 'axios';


function Profile() {
  return (
    <div className="flex flex-col justify-center">
        <h1 className="font-bold py-10">Profile Page</h1>

        <div className="card w-96 bg-base-100 shadow-xl">
        
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end flex justify-center">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
        
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end flex justify-center">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile