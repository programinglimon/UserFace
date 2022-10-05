import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Profile.css'

const Profile = (props) => {
    const {first_name,last_name,gender,img,email} = props.user;
    

    return (
        <>
            <div className="col-md-4">
            <div className="card">
                    <img src={img} alt="" className="card-img img-fluid" />
                    <h4>Name : {`${first_name} ${last_name}`} </h4>
                    <p>Email : {email}</p>
                    <p>{gender}</p>
                    <button onClick={()=> props.handleVeiwProfile()} className='btn btn-primary'>Veiw Profile</button>
                </div>
            </div>
        </>
    );
};

export default Profile;