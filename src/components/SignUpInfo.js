import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(event) =>
          setFormData({ ...formData, firstName: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(event) =>
          setFormData({ ...formData, lastName: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Email..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Password..."
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Confirm Password..."
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
      <h3>Skills</h3>
        <input type="checkbox" name="skills" />
        <label>Java</label>
        <input type="checkbox" name="skills" />
        <label>Python</label>
        <input type="checkbox" name="skills" />
        <label>React</label>
        <input type="checkbox" name="skills" />
        <label>Angular</label>
      
      
       <label>Male: </label>
        <input type="radio" value="Male" name="gender"  style={{color:"red", padding:"10px"}}/> 

        <label >Female: </label>
        <input type="radio" value="Female" name="gender" /> 
  
     
    </div>
  );
}

export default SignUpInfo;
