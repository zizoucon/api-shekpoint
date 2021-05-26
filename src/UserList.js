
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import User from './user'
function UserList(){
    let [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=> setUsers(res.data));

    },[]);
    return (
        <div>
          {users.map(user=>{
             
             return ( <div style={{display:"flex", flexWrap: "wrap" , justifyContent:"space-around"}}>
             {
             users.map((user) =>   {
                  return  <User  Name={user.name} email={user.email}></User>
                })
            }
            </div>
              )
          })}
             </div>
            
    )
}
export default UserList 