import react from 'react' 
import './User.css'
 function User({Name,email}){
     return(
         <div className="container">
             <h1> {Name} </h1>
             <h2> {email} </h2>
                  </div>
     )
 }
 export default User;