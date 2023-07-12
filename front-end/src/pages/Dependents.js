import React from 'react'
import UserCard from '../components/common/UserCard'
import { Link } from 'react-router-dom';
import users from '../mockdata/users.json';
import DependentCard from '../components/common/DependentCard';
import dependents from '../mockdata/dependents.json';

function Dependents() {
  return (
    <div>

        <h1 className="text-3xl text-center font-bold py-6">Dependents</h1>


        {/* <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2">
            {users.dependents.length ?
                users.dependents.map((dependent, index) =>  {
                    return (
                        <UserCard key={index} dependent={dependent}></UserCard>
                    )
                })
            : <p>No Dependents Yet</p>}
        </div> */}


        <div className="grid grid-flow-col">
            {dependents.dependents.map((dependent, index) =>{
                return <DependentCard key={index} dependent={dependent}/>
            })}
        </div>
        

    </div>
  )
}

export default Dependents