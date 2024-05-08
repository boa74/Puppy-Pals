
import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'
import './path-to-css.css'

function App() {

const [puppies, setPuppies] = useState(puppyList)
const [featPupId, setFeatPupId] = useState(null)
console.log(puppies)
console.log("puppyList: ", puppyList);

const featuredPup = puppies.find((pup)=>pup.id===featPupId);
 console.log(featuredPup);

  return (
    <div className="pupInfo">
       {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
     
      {puppies.map((puppy) => {
        {()=>{console.log("puppy id: ", puppy.id)}}
           return (
           <p onClick= {()=>{setFeatPupId(puppy.id)}}  key={puppy.id}>
            {puppy.name}
           
            </p>
         );
     })}
     
  </div>
);
}

export default App
