import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="Legal First Name..."
        value={formData.legalFirstName}
        onChange={(e) => {
          setFormData({ ...formData, legalFirstName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Legal Last Name..."
        value={formData.legalLastName}
        onChange={(e) => {
          setFormData({ ...formData, legalLastName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Username..."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(e) => {
          setFormData({ ...formData, address: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Age"
        value={formData.age}
        onChange={(e) => {
          setFormData({ ...formData, age: e.target.value });
        }}
      />
      
      <h3>Martial Status</h3>
      <input type="checkbox" name="skills" />
      <label className="container">Married</label>
      <input type="checkbox" name="skills" />
      <label className="container"> Unmarried</label>
    
     
     <label>Employed: </label>
      <input type="radio" value="employed" name="gender"  /> 

      <label >Unemployed: </label>
      <input type="radio" value="une mployed" name="gender" /> 

    

      
    </div>
  );
}

export default PersonalInfo;
