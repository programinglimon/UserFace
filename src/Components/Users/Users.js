import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import userData from '../../userData/MOCK_DATA.json'


const Users = () => {
    const [users, setUsers] =useState(userData);


    // useEffect(() => {
    //     fetch('https://randomuser.me/api/')
    //     .then(res => res.json())
    //     .then(data =>  setUsers(data))
    //     .catch(error => console.log(error));
    // },[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="">
                        <h3>User : {users.length}</h3>
                    <ul>
                        {
                        users.map(user => <Profile user = {user} key ={users.id}  ></Profile>)
                        }
                    </ul>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Users;