import React, { useState ,useEffect } from "react";
const Fetchdata = () => {
  const [user, setdata] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(()=>{
    fetch(url)
      .then((response) => response.json())
      .then((data) => setdata(data));
  },[]);

  

  

  return (
    <>
      <div className="container-fluid bg-white">
        
          
        
        <table className="table table-primary">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Username</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>

          <tbody>
            {user.map((v, i) => (
              <tr key={v.id}>
                <td>{i + 1}</td>
                <td>{v.name}</td>
                <td>{v.username}</td>
                <td>
                  {v.address.street}, {v.address.suite}, {v.address.city},{" "}
                  {v.address.zipcode}, {v.address.geo.lat}, {v.address.geo.lng}
                </td>
                <td>{v.phone}</td>
                <td>{v.website}</td>
                <td>
                  {v.company.name}, {v.company.catchPhrase}, {v.company.bs}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Fetchdata;
