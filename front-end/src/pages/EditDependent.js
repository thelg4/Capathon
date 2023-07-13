import React from 'react'

function EditDependent() {
  return (

    //TODO get dependent info from previous page
    
    <div className="overflow-x-auto pb-8">
        <h1 className="text-xl font-bold text-center py-10">Dependent Information</h1>
        <table className="table w-full space-y-20">
            <tr className="hover">
                <th>First Name</th>
                <input 
                    type="string"
                    placeholder="Type Here"
                    className="input input-bordered input-info w-72"
                />
            </tr>
            <tr>
                <th>Last Name</th>
                <input 
                    type="string"
                    placeholder="Type Here"
                    className="input input-bordered input-info w-72"
                />
            </tr>
            <tr>
                <th>Age</th>
                <input 
                    type="number"
                    placeholder="Type Here"
                    className="input input-bordered input-info w-72"
                />
            </tr>
            <tr>
                <th>Gender</th>
                <input 
                    type="string"
                    placeholder="Type Here"
                    className="input input-bordered input-info w-72"
                />
            </tr>
            <tr>
                <th>Special Needs</th>
                <input 
                    type="string"
                    placeholder="Type Here"
                    className="input input-bordered input-info w-72"
                />
            </tr>
            <tr>
                <th>Dietary Restrictions</th>
                <input 
                    type="string"
                    placeholder="Type Here"
                    className="input input-bordered input-info w-72"
                />
            </tr>
            <tr>
                <th>Allergies</th>
                <input 
                    type="string"
                    placeholder="Type Here"
                    className="input input-bordered input-info w-72"
                />
            </tr>
            
        </table>
    </div>
  )
}

export default EditDependent