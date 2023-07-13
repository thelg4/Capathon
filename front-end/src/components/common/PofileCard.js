import React from "react";

function ProfileCard() {
    return (
        <div className='card w-96 bg-base-100 shadow-x1' style={{marginLeft: 80}}>
            <div> 
            <figure><img src={require("../../images/backgroundImage.jpg")} className="blur-sm"/>
                <div className="avatar" style={{right:210, top:5}}>
                    <div className="w-24 rounded-md">
                        <div className='profilePic' >
                            <img src={require("../../images/childfalling.jpg")} />
                        </div>
                    </div>
                </div>
            </figure>
            </div>
            <div className='card-body'>
                <h2 className='card-title'>Name</h2>
                <p>Home Location: INSERT HOME LOCATION HERE</p>
                <div className="card-action justify-end">
            </div>
            </div>
        </div>
    )
}

export default ProfileCard