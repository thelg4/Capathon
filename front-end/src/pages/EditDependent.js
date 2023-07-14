import React from 'react'
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function EditDependent() {

  return (

    // TODO - get dependent info from previous page

    <div className="overflow-x-auto pb-8">

        <div className="flex justify-center">
            <div className="card w-1/2 bg-base-100 shadow-xl">
                <div className="card-body flex justify-center">
                    <h2 className="text-xl font-bold text-center">Dependent Information</h2>
                    <div className="divider" />
                        <div className="flex items-center justify-center">
                            <table className="table w-full space-y-20">
                                <tr className="hover">
                                    <th>First Name</th>
                                    <td className="text-right">
                                        <input 
                                            type="string"
                                            placeholder="Type Here"
                                            className="input input-bordered input-info w-72"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th>Last Name</th>
                                    <td className="text-right">
                                        <input 
                                            type="string"
                                            placeholder="Type Here"
                                            className="input input-bordered input-info w-72"
                                        />
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <th>Age</th>
                                    <td className="text-right">
                                        <input 
                                        type="number"
                                        placeholder="Type Here"
                                        className="input input-bordered input-info w-72"
                                        />
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td className="text-right">
                                        <input 
                                        type="string"
                                        placeholder="Type Here"
                                        className="input input-bordered input-info w-72"
                                        />
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <th>Special Needs</th>
                                    <td className="text-right">
                                        <input 
                                        type="string"
                                        placeholder="Type Here"
                                        className="input input-bordered input-info justify-end w-72"
                                        />
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <th>Dietary Restrictions</th>
                                    <td className="text-right">
                                        <input 
                                        type="string"
                                        placeholder="Type Here"
                                        className="input input-bordered input-info w-72"
                                        />
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <th>Allergies</th>
                                    <td className="text-right">
                                        <input 
                                        type="string"
                                        placeholder="Type Here"
                                        className="input input-bordered input-info w-72"
                                        />
                                    </td>
                                </tr>
                            </table>
                        </div>


                    <div className="divider" />

                    <div className="card-actions justify-center">
                        {/* <button className="btn btn-primary w-72">Submit</button> */}
                        <Link to="/Dependents" className="btn btn-primary w-72">Submit</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditDependent