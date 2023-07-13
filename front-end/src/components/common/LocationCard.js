import React from 'react'

function LocationCard() {
  return (
    <div className="card w-96 bg-base-200 shadow-xl pl-10">
        <figure className="px-10 pt-10">
            <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Location Name</h2>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>Address</th>
                            <tr>123 Some street</tr>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default LocationCard