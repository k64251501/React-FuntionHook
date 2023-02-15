import React, { useState, useEffect } from 'react'
import Axios from "axios"
import UserList from "./UserList"
import UserDetail from './UserDetail'
const UserApp = () => {
  let[users, setUsers]= useState({})
  let [selectedUser, setSelectedUser] =useState({})
  useEffect(()=>{
    Axios.get("https://dummyjson.com/users").then((response)=>{
   setUsers(response.data)
    }).catch((err)=>{
   
    })
   },[])
   let selectedUserHandler= (user)=>{
     setSelectedUser(user)  
   }
  return (
    <div className="container">
             <div className="row">
              <h1>user App</h1>
              <pre>{JSON.stringify(users)}</pre>
              <div className="col-md-8">
                {
                Object.keys(users).length> 0 ? <><UserList users={users.users} selectedUser={selectedUserHandler}/></> :null
                }
    
              </div>
              <div className="col-md-4">
                {
                  Object.keys(selectedUser).length >0 ? <>
                 <UserDetail  selectedUser= {selectedUser}/> </> :null
                }
                
              </div>
             </div>
        </div>
  )
}

export default UserApp