import React from 'react';

const Patient = () => {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src="" alt="User's profile" />
      </div>
      <div className="profile-details">
        <h2 className='tagm' >Edit Patient Profile</h2>
        <form className='fkg'>
          <label className='gg' htmlFor="name">Name:</label>
          <input className='rg' type="text" id="name" />
          <label className='gg' htmlFor="address">UID :</label>
          <input className='rg' type="text" id="address" />
          <label className='gg' htmlFor="kycIssues">KYC Issues:</label>
          <input className='rg' type="text" id="kycIssues"  />
          <label className='gg' htmlFor="mobileNumber">Mobile Number:</label>
          <input className='rg'  type="text" id="mobileNumber"  />
          <button className='btnKg' type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Patient;


