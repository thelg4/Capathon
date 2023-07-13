import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function DependentCard({dependent}) {
  
    const [dep, setDep] = useState();

    return (

    
    <div className="card w-3/4 bg-base-200 shadow-xl py-4">
        {/* <figure className="px-10 pt-10">
            <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
        </figure> */}
        <div className="card-body items-center text-center">
            <h2 className="card-title">{dependent.firstName} {dependent.lastName}</h2>

            <div className="divider" />

            <h1 className="font-bold">{dependent.type.toUpperCase()}</h1>

            <div className="divider" />
                <h1 className=" text-sm font-bold">Authorized Pickup</h1>
                <p className="text-sm">{dependent.authorizedPickup}</p>
            <div className="divider"></div>

            <h2 className="font-bold">Information</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Age</th>
                            <td>{dependent.age}</td>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <td>{dependent.gender}</td>
                        </tr>
                        <tr>
                            <th>Special Needs</th>
                            <td>{dependent.specialNeeds ? 'Yes' : 'No'}</td>
                        </tr>
                        <tr>
                            <th>Dietary Restrictions</th>
                            <td>{dependent.dietaryRestrictions ? 'Yes' : 'No'}</td>
                        </tr>
                        <tr>
                            <th>Allergies</th>
                            <td>{dependent.allergies ? 'Yes' : 'No'}</td>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className="divider"/>
            <div>
                <h1 className="font-bold pb-2">Accomodiations</h1>
                <p className="text-xs font-bold">{dependent.accomodations}</p>
            </div>

            <div className="divider"/>
                <h1 className="font-bold">Medical Accomodiations</h1>
                <p className="text-xs font-bold">{dependent.medicalInfo}</p>


            <div className="divider"/>

            <div className="card-actions">
                <Link to='/EditDependent' className="btn btn-info">Edit Information</Link>
            </div>
        </div>
    </div>
  )
}

export default DependentCard