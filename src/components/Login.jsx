import React, { useState } from "react";

const Login = () => {
  const [userType, setUserType] = useState("");

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userType === "doctor") {
      window.location.href = "/doctor";
    } else if (userType === "patient") {
      window.location.href = "/patient";
    }
  };

  return (<>
  
      <h1 className="logo">MediTrak</h1>
    <div className="login-page-container">
      <h1 className="login-page-title">Select Your Profession</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <select
          className="login-form-select"
          value={userType}
          onChange={handleUserTypeChange}
        >
          <option value="">Select User Type</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>
        <div >

     <input className= 'uidInput'
      type="text"
      placeholder= "UID"
    />
    
     </div>
        <button
          className={`login-form-submit ${!userType && "disabled"}`} // Add "disabled" class when userType is not selected
          type="submit"
          disabled={!userType} // Disable button when userType is not selected
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default Login;

