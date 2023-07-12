import React from "react";

function ProfileCard() {
    return (
        <div className='card w-96 bg-base-100 shadow-x1' style={{marginLeft: 80}}>
            <div style={{backgroundColor:"#fcba03"}}> 
            <figure><img src={require("../../Images/backgroundImage.jpg")} />
                <div className="avatar" style={{right:210, top:5}}>
                    <div className="w-24 rounded">
                        <div className='profilePic' >
                            <img src={require("../../Images/childfalling.jpg")} />
                        </div>
                    </div>
                </div>
            </figure>
            </div>
            <div className='card-body'>
                <h2 className='card-title'>NAME HERE</h2>
                <p>Home Locations: INSERT HOME LOCATION HERE</p>
                <div className="card-action justify-end">
            </div>
                <p>we dont want them anymore</p>
            </div>
        </div>
    )
}

export default ProfileCard