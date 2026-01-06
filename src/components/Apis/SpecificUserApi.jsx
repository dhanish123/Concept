import { useState,useEffect } from "react"
const SpecificUserApi = () => {
    const [users, setUsers] = useState([]);  //no data first , when until api data comes

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/3")  // for 3rd user only
    .then(res=>res.json())
    .then(data=>setUsers(data))
    return () => {
        
    };
}, []);

  return (
    <div>
        
        <div>
            <h2>specific user details</h2>
            <p>Name: {users.name}</p>
            <p>Email :{users.email}</p>
            <p>Website:{users.website}</p>
        </div>
    </div>
  )
}

export default SpecificUserApi
