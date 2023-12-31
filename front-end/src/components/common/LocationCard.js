import React from 'react'

function LocationCard({location}) {
  return (
    <div className="card w-96 bg-base-200 shadow-xl pl-10">
        <div className="card-body items-center text-center">
            <h2 className="card-title text-center">{location.centerName}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr >
                            <th>Center Type:</th>
                            <td>{location.type.charAt(0).toUpperCase() + location.type.slice(1)}</td>
                        </tr>
                        <tr>
                            <th>Address:</th>
                            <td>{location.address}</td>
                        </tr>
                        <tr>
                            <th>Center Type:</th>
                            <td>{location.isCorp ? 'Corporate Center' : 'Community Center'}</td>
                        </tr>
                        <tr>
                            <th>Phone: </th>
                            <td>{location.phoneNumber}</td>
                        </tr>
                    </thead>
                </table>
            </div>

            {/* <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
            </div> */}
        </div>
    </div>
  )
}

export default LocationCard