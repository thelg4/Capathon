import React from 'react'
import UserCard from '../components/common/UserCard'
import { Link } from 'react-router-dom';
import users from '../mockdata/users.json';
import DependentCard from '../components/common/DependentCard';
import dependents from '../mockdata/dependents.json';

import axios from 'axios';
import {
    useState, 
    useEffect
} from 'react';


function Dependents() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://capathonbroadway-api.azurewebsites.net/User/dependent-lookup/6')
        .then(response =>   {
            console.log(response.data);
            setData(response.data.data);
        })
        .catch (error =>    {
            console.error('There was an error retreiving the dependent', error);
        });
        // fetch('https://capathonbroadway-api.azurewebsites.net/User/dependent-lookup/6')
        // .then(response => response.json())
        // .then(j8sonData =>   {
        //     setData(jsonData.data);
        // })
        // .catch(error => {
        //     console.error('There was an error', error)
        // });
    }, []);


  if (data.length > 0) {
    return (
        <div>
    
            <h1 className="text-3xl text-center font-bold py-6">Dependents</h1>
    
            <div className="grid grid-cols-3 gap-y-8 place-items-center">
                    {data.map((item, index) =>{
                        return <DependentCard key={index} dependent={item}/>
                    })}
            </div>
            
    
        </div>
      )
  } else    {
    return (
        <h3>No Data Yet</h3>
    )
  }

  
}

export default Dependents