import Employee from "./pages/Employee";
import { useState, useEffect } from 'react';


function Home() {
  const [employee, setEmployee] = useState(){
    firstname: '',
    lastname: '',
  });

  const handleInputChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.id]: e.target.value,
    });
  };

  const handleAddEmployee = () => {
    // Add logic to handle adding employee data (e.g., push to an array or send to a server)
    console.log('Adding employee:', employee);
  };

  return (
    <section>
      <h1 className="fw-bold">Employee Management Dashboard</h1>
      <p>This is a list of Employees</p>
      <div className="mb-5 p-5 border">
        <div className="row">
          <div className="col-md-5">
            <label htmlFor="firstname">First Name:</label>
            <input
              id="firstname"
              onChange={(e)=>setEmployee({
                ... employee,
                firstname: e.targetvalue,
                
              })}
              className="form-control"
              type="text"
            />
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col-md-5">
            <label htmlFor="lastname">Last Name:</label>
            <input
              id="lastname"
              onChange={(e)=>setEmployee({
                ... employee,
                lastname: e.targetvalue,
                
              })}
              className="form-control"
              type="text"
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-dark" onClick={handleAddEmployee}>
              Add
            </button>



          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;