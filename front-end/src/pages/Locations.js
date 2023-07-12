import React from 'react';
import users from '../mockdata/users.json';
import locations from '../mockdata/locations.json';

function LocationCard() {
  return (
    <div></div>
    // <div className="container mx-auto">
    //   <h1 className="font-bold text-3xl text-center">Location Page</h1>
    //   {locations.location.map((location, index) => (
    //   <div className="card w-3/4 bg-base-200 shadow-sm hover:shadow-lg mt-8 mx-auto">
    //     <div className="card-body flex flex-col items-center space-y-4">
    //       <h2 className="text-2xl font-bold">HHCC Locations</h2>
    //       <div className="flex flex-wrap justify-center">
    //         {/* {locations.location.map((location, index) => ( */}
    //           <button
    //             key={index}
    //             className="btn btn-info m-2"
    //             onClick={() => window.my_modal_1.showModal()}
    //           >
    //             {location.location}
    //           </button>

    //         {/* ))} */}
    //       </div>
    //     </div>

    //     <dialog id="my_modal_3" className="modal">
    //       <form method="dialog" className="modal-box">
    //         <div className="flex justify-start">
    //           <h3 className="text-xl font-bold pt-4">Location Information</h3>
    //         </div>
    //         <div className="divider my-4" />
            
    //           <div key={index}>
    //             <h3 className="text-lg font-bold mt-4">Location: {location.location}</h3>
    //             <div className="divider my-2" />
    //             <h3 className="text-lg font-bold">Address: {location.address}</h3>
    //             <h3 className="text-lg font-bold">Phone: {location.phone}</h3>
    //             <h3 className="text-lg font-bold">Email: {location.email}</h3>
    //             <h3 className="text-lg font-bold">Center Type: {location.centerType}</h3>
    //             <h3 className="text-lg font-bold">Corp: {location.isCorp}</h3>
    //             <div className="divider my-4" />
    //           </div>
    //         <button className="btn btn-secondary" onClick={() => window.my_modal_3.close()}>
    //           Close
    //         </button>
    //       </form>
    //     </dialog>
    //   </div>
      //))}
    //</div>
 )
}

export default LocationCard
