import React, { 
  useState,
  useEffect 
} from 'react';
import locations from '../mockdata/locations.json';
import LocationCard from '../components/common/LocationCard';
import axios from 'axios';


function CreateCard() {

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get('https://capathonbroadway-api.azurewebsites.net/CareCenter')
    .then(response => {
      console.log(response.data.data);
      setLocations(response.data.data);
      console.log("Locations")
      console.log(locations);
    })
    .catch (error =>  {
      console.error('There was an error', error);
    })
  }, []);


  if (locations.length > 0) {
    return (
      <div className="pt-6">
        <div className="grid grid-cols-3 gap-y-8 place-items-center">
          {locations.map((item, index) => {
            return <LocationCard key={index} location={item} />
          })}
        </div>
      </div>
    )
  } else  {

    return (
      <div className="grid h-screen place-items-center">

            {/* <h3>No Data Yet</h3> */}

            <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
      </div>
    )
    
  }

  


    
    

    // <div className="flex">

      

    //   <LocationCard />
    //   {cardLocations.map((location, index) => (
    //     <div
    //       key={index}
    //       className={`card w-96 bg-base-100 shadow-xl mx-4 ${
    //         showDetails[location.location] ? 'expanded' : ''
    //       }`}
    //       style={{
    //         minWidth: showDetails[location.location] ? 'auto' : '300px',
    //       }}
    //     >
    //       <div className="card-image flex max-h-[250px] justify-center">
    //         <img className='flex max-h-[250px] justify-center' src={location.imageLocation} alt={location.location}/>
    //       </div>
    //       <div className="card-body">
    //         {showDetails[location.location] && (
    //           <div>
    //             <h3 className="text-lg font-bold mt-4">Location: {location.location}</h3>
    //             <div className="divider my-2" />
    //             <h3 className="text-lg font-bold">Address: {location.address}</h3>
    //             <h3 className="text-lg font-bold">Phone: {location.phone}</h3>
    //             <h3 className="text-lg font-bold">Email: {location.email}</h3>
    //             <h3 className="text-lg font-bold">Center Type: {location.centerType}</h3>
    //             <h3 className="text-lg font-bold">Corp: {location.isCorp}</h3>
    //             <h3 className="text-lg font-bold">Hours of Operation: {location.hours}</h3>
    //             <div className="divider my-4" />
    //           </div>
    //         )}

    //         <h2 className="card-title">{location.location} Center</h2>


    //         {location.location === 'Nashville' && showDetails[location.location] && (
    //           <div className="google-maps">
    //             <iframe
    //               title="Nashville Map"
    //               src="https://www.google.com/maps/place/Vanderbilt+University+Child+Care+Center/@36.1180328,-86.8957415,12z/data=!4m10!1m2!2m1!1sNashville+daycare!3m6!1s0x886466a4a6ef8047:0xb5fb4514f464c809!8m2!3d36.1371065!4d-86.803676!15sChFOYXNodmlsbGUgZGF5Y2FyZVoTIhFuYXNodmlsbGUgZGF5Y2FyZZIBD2RheV9jYXJlX2NlbnRlcpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSbGEwdG1Tek4zUlJBQuABAA!16s%2Fg%2F1hm3d136h?hl=en&entry=ttu"
    //               allowFullScreen
    //               loading="lazy"
    //             ></iframe>
    //           </div>
    //         )}

    //         {location.location === 'Los Angeles' && showDetails[location.location] && (
    //           <div className="google-maps">
    //             <iframe
    //               title="Los Angeles Map"
    //               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.830881824216!2d-118.37585868479614!3d34.039638625048705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6b9f3414af7%3A0x679de6a49ef5b2b9!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1628880651017!5m2!1sen!2s"
    //               allowFullScreen
    //               loading="lazy"
    //             ></iframe>
    //           </div>
    //         )}

    //         {location.location === 'Chicago' && showDetails[location.location] && (
    //           <div className="google-maps">
    //             <iframe
    //               title="Chicago Map"
    //               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.9547249940014!2d-87.62436978436641!3d41.87556175526198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2caea61a08f5%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2s!4v1628880719985!5m2!1sen!2s"
    //               allowFullScreen
    //               loading="lazy"
    //             ></iframe>
    //           </div>
    //         )}

    //         <div className="card-actions justify-end">
    //           <button
    //             className="btn btn-primary"
    //             onClick={() => toggleDetails(location.location)}
    //           >
    //             {showDetails[location.location] ? 'Hide Details' : 'Details'}
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
}

export default CreateCard;
