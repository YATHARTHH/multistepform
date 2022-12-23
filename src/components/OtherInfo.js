import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Birth Date"
        value={formData.birthDate}
        onChange={(e) => {
          setFormData({ ...formData, birthDate : e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Country"
        value={formData.country}
        onChange={(e) => {
          setFormData({ ...formData, country: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Nationality..."
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => {
          setFormData({ ...formData, city: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="State"
        value={formData.state}
        onChange={(e) => {
          setFormData({ ...formData, state: e.target.value });
        }}
      />
        <h3>Degree</h3>
        <input type="checkbox" name="skills" />
        <label>Under-graduate</label>
        <input type="checkbox" name="skills" />
        <label>Post-graduate</label>
      
       
       <label>Student : </label>
        <input type="radio" value="student" name="gender"  /> 

        <label >Employee: </label>
        <input type="radio" value="employee" name="gender" /> 
  
      
    </div>
    
  );
}

export default OtherInfo;
