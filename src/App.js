import React, { useState } from "react";
import Header from "./components/Header";


function App() {

  const [formData, setFormData] = useState(
    {
      Name: '',
      Lastname: '',
      Phone: '',
      Email: '',
      Password: '',  
      ConfirmPassword: ''  
    }
  );
 
  function handleChange(event) {
    const {name, value} = event.target;

    setFormData(prev => {
      return {
        ...prev,
        // [event.target.name]: event.target.value
        [name]: value
      }
    })
  }


  function checkForm(event) {
    event.preventDefault();

    if (formData.Name !== '' && formData.Lastname !== '' && formData.Phone !== '' && formData.Email !== '' && formData.Password !== '' && formData.ConfirmPassword !== '') {
      checkPassword()
    } else {
      alert ('Please fill the form')
    }
  }

  function checkPassword() {
    if (formData.Password !== formData.ConfirmPassword) {
    alert("Password error");}
  }

  return (
      <div className="app-wrapper">
      <Header />
      <div className="form-wrapper">
        <form onSubmit={checkForm}>
          <input
            type='text'
            placeholder="Name"
            className="input-item"
            onChange={handleChange}
            name="Name"
            value={formData.Name}
          />
          <input
            type='text'
            placeholder="Lastname"
            className="input-item"
            onChange={handleChange}
            name="Lastname"
            value={formData.Lastname}
          />
          <input
            type='tel'
            placeholder="Phone"
            className="input-item"
            onChange={handleChange}
            name="Phone"
            value={formData.Phone}
          />
          <input
            type='email'
            placeholder="Email"
            className="input-item"
            onChange={handleChange}
            name="Email"
            value={formData.Email}
          />
          <input
            type='password'
            placeholder="Password"
            className="input-item"
            onChange={handleChange}
            name="Password"
            value={formData.Password}
          />
          <input
            type='password'
            placeholder="ConfirmPassword"
            className="input-item"
            onChange={handleChange}
            name="ConfirmPassword"
            value={formData.ConfirmPassword}
          />
          <button className="button"> 
          Sing up
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

