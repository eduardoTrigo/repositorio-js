import React from 'react'
import { useState, useEffect } from 'react';
import GetUser from './helpers/getUser';

const initialUser = {
  name: "",
  email: ""
}

const FetchCard = () => {
    const [user , setUser] = useState(initialUser);

    const updateUser = () =>{
      GetUser()
      .then((newUser) =>{ setUser(newUser);})
    }

    useEffect(() => {
        updateUser();
    },[]);

  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.username}</h1>
      <h1>{user.email}</h1>
      <button onClick={updateUser}>change user</button>
    </div>
  )
}

export default FetchCard