import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';

function Home() {
  const [employee, setEmployee] = useState({
    firstname: '',
    lastname: '',
  });

  const [employeeList, setEmployeeList] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [id]: value,
    }));
  };

  useEffect(() => {
    const savedEmployeeList = JSON.parse(localStorage.getItem('employeeList'));

    if (savedEmployeeList) {
      setEmployeeList(savedEmployeeList);
    }
  }, []);

  const handleAddEmployee = () => {
    if (!employee.firstname || !employee.lastname) {
      alert('Please enter both first name and last name.');
      return;
    }

    const newEmployee = {
      id: Date.now(),
      firstname: employee.firstname,
      lastname: employee.lastname,
    };

    setEmployeeList((prevEmployeeList) => [...prevEmployeeList, newEmployee]);
    setEmployee({ firstname: '', lastname: '' });

 
    localStorage.setItem('employeeList', JSON.stringify([...employeeList, newEmployee]));
  };

  const handleEditEmployee = () => {
    if (!employee.firstname || !employee.lastname) {
      alert('Please enter both first name and last name.');
      return;
    }

    setEmployeeList((prevEmployeeList) =>
      prevEmployeeList.map((emp) =>
        emp.id === selectedEmployee.id
          ? { ...emp, firstname: employee.firstname, lastname: employee.lastname }
          : emp
      )
    );

    setSelectedEmployee(null); 
    setEmployee({ firstname: '', lastname: '' }); 


    localStorage.setItem('employeeList', JSON.stringify([...employeeList]));
  };

  const handleDeleteEmployee = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this employee?');

    if (confirmDelete) {
      setEmployeeList((prevEmployeeList) =>
        prevEmployeeList.filter((emp) => emp.id !== id)
      );

      localStorage.setItem('employeeList', JSON.stringify([...employeeList]));
    }
  };

  const handleSelectEmployee = (emp) => {
    setSelectedEmployee(emp);
    setEmployee({ firstname: emp.firstname, lastname: emp.lastname });
  };

  return (
    <section>
      <h1 className="fw-bold">Employee Management Dashboard</h1>
      <p>This is a list of Employees</p>
      <div className="mb-5 p-5 border">
        {}
        <div className="row">
          <div className="col-md-5">
            <label htmlFor="firstname">First Name:</label>
            <input
              id="firstname"
              onChange={handleInputChange}
              value={employee.firstname}
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
              onChange={handleInputChange}
              value={employee.lastname}
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

        {}
        <div className="mt-4">
          {employeeList.map((emp) => (
            <EmployeeCard
              key={emp.id}
              employee={emp}
              onEdit={handleSelectEmployee}
              onDelete={handleDeleteEmployee}
            />
          ))}
        </div>

        {}
        {selectedEmployee && (
          <div>
            <h2>Edit Employee</h2>
            <button className="btn btn-dark" onClick={handleEditEmployee}>
              Save
            </button>
          </div>
        )}
      </div>
    </section>
  );
}


export default Home;