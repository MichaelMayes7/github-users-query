import './App.css';
import React, { useState } from 'react';
import Form from './Form'
import UserCardList from './UserCardList'

export default function App (props) {
    const [users, setUsers] = useState([])
  

 const addNewUser = userInfo => {
    setUsers(users.concat(userInfo))
  }
  
  return (
    <div className="App">
      <Form onSubmit={addNewUser}/>
      <UserCardList users={users}/>
    </div>
    );
  

  

}
