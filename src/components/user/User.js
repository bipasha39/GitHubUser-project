import React,{useState,useEffect} from "react";
import "./User.css"
function User() {
    const[user,setUser]=useState([]);
    const getUser=async()=>{
          const response = await fetch(`https://api.github.com/users`)
          //const data= await response.json()
          setUser(await response.json())
          //console.log(data,"here is all users")
    }
    useEffect(() => {
       getUser() 
    }, []);

  return (
    <div className="App">
      <h2 className="tittle">List of GitHub User</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
            {user.map((item)=>{
                return (
<div className="col-10 col-md-4 mt-5">   
           <div className="card p-2">
             <div className="d-flex align-items-center" >
               <div className="image"><img src=""/></div>
               <div className="ml-3  w=100">
                 <h4 className="mb-0 mt-0 textLeft">{item.login}</h4> <span className="textLeft"></span>
                 <div className="p-2 mt-2 bg-primary d-flex justifying-content-between rounded text-white stats">
                  <div className="d-flex flex-column"><span className="article">Articles</span> <span className="number1">38</span></div>
                  <div className="d-flex flex-column"><span className="follower">{item.events_url}</span> <span className="number2">980</span></div>
                  <div className="d-flex flex-column"><span className="ratings">Ratings</span> <span className="number3">8.9</span></div>
                 </div>
               </div>
             </div>

           </div>
          </div>
                ) }
                
            )}
          
        </div>

      </div>
      
    </div>
  );
}

export default User;
