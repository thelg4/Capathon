import React from 'react'

function DependentCard({dependent}) {
  return (
    <div className="card w-3/4 bg-base-200 shadow-xl py-4">
        {/* <figure className="px-10 pt-10">
            <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
        </figure> */}
        <div className="card-body items-center text-center">
            <h2 className="card-title">{dependent.firstName} {dependent.lastName}</h2>

            <div className="divider" />

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
                            <td>{dependent.special_needs}</td>
                        </tr>
                        <tr>
                            <th>Dietary Restrictions</th>
                            <td>{dependent.dietary_restrictions}</td>
                        </tr>
                        <tr>
                            <th>Allergies</th>
                            <td>{dependent.allergies}</td>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className="divider"/>
            <div>
                <h1 className="font-bold pb-2">Accomodiations</h1>
                <p className="text-xs font-bold">{dependent.accomodiations}</p>
            </div>

            <div className="divider"/>
                <h1 className="font-bold">Medical Accomodiations</h1>
                <p className="text-xs font-bold">{dependent.medicalInfo}</p>


            <div className="divider"/>

            <div className="card-actions">
                <button className="btn btn-primary">Edit information</button>
            </div>
        </div>
    </div>
  )
}

export default DependentCard