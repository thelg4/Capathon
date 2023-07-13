import React, { useState } from 'react';
import locations from '../mockdata/locations.json';

function CreateCard() {
  const cardLocations = locations.card || [];

  const [showDetails, setShowDetails] = useState(
    cardLocations.reduce((acc, location) => {
      acc[location.location] = false;
      return acc;
    }, {})
  );

  const toggleDetails = (location) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [location]: !prevState[location],
    }));
  };

  const getImageUrl = (location) => {
    const imageFolder = '../Images/'; // Update the folder path where your uploaded images are stored
    const imageExtension = '.jpg'; // Update the image extension according to your uploaded images

    // Assuming the image filename or path is stored in the 'image' property of the location data
    const imageUrl = imageFolder + location.location + imageExtension;
    return imageUrl;
  };

  return (
    <div className="flex">
      {cardLocations.map((location, index) => (
        <div
          key={index}
          className={`card w-96 bg-base-100 shadow-xl mx-4 ${
            showDetails[location.location] ? 'expanded' : ''
          }`}
          style={{
            minWidth: showDetails[location.location] ? 'auto' : '300px',
          }}
        >
          <div className="card-image flex max-h-[250px] justify-center">
            <img className='flex max-h-[250px] justify-center' src={location.imageLocation} alt={location.location}/>
          </div>
          <div className="card-body">
            {showDetails[location.location] && (
              <div>
                <h3 className="text-lg font-bold mt-4">Location: {location.location}</h3>
                <div className="divider my-2" />
                <h3 className="text-lg font-bold">Address: {location.address}</h3>
                <h3 className="text-lg font-bold">Phone: {location.phone}</h3>
                <h3 className="text-lg font-bold">Email: {location.email}</h3>
                <h3 className="text-lg font-bold">Center Type: {location.centerType}</h3>
                <h3 className="text-lg font-bold">Corp: {location.isCorp}</h3>
                <h3 className="text-lg font-bold">Hours of Operation: {location.hours}</h3>
                <div className="divider my-4" />
              </div>
            )}

            <h2 className="card-title">{location.location} Center</h2>


            {location.location === 'Nashville' && showDetails[location.location] && (
              <div className="google-maps">
                <iframe
                  title="Nashville Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6671070702646!2d-86.77432248474513!3d36.15610130525305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886464cc1002a9c7%3A0x4ff1c63f832442ab!2sNashville%2C%20TN%2C%20USA!5e0!3m2!1sen!2s!4v1628880585247!5m2!1sen!2s"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            )}

            {location.location === 'Los Angeles' && showDetails[location.location] && (
              <div className="google-maps">
                <iframe
                  title="Los Angeles Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.830881824216!2d-118.37585868479614!3d34.039638625048705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6b9f3414af7%3A0x679de6a49ef5b2b9!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1628880651017!5m2!1sen!2s"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            )}

            {location.location === 'Chicago' && showDetails[location.location] && (
              <div className="google-maps">
                <iframe
                  title="Chicago Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.9547249940014!2d-87.62436978436641!3d41.87556175526198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2caea61a08f5%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2s!4v1628880719985!5m2!1sen!2s"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            )}

            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => toggleDetails(location.location)}
              >
                {showDetails[location.location] ? 'Hide Details' : 'Details'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CreateCard;
