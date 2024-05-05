"use client"

import Link from "next/link";
import React, { useState } from "react";

const LoginForm = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full"> 
        Email: <input 
          className="w-full" 
          type="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange} />
        Password: <input 
          className="w-full" 
          type="password" 
          name="password" 
          value={formData.password}
          onChange={handleChange} />
        <button className="w-full mt-6" type="submit">Login</button>
      </form>
    </div>
  )

};

export default LoginForm;