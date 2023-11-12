import React from 'react';

// EmployeeCard component
const EmployeeCard = ({ employee, onEdit, onDelete }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{employee.firstname} {employee.lastname}</h5>
        <button className="btn btn-info" onClick={() => onEdit(employee)}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(employee.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;