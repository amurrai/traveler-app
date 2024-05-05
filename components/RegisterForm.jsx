"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegisterForm = () => {

  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    first_name: '',
    last_name: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: formData.email,
        username: formData.username,
        first_name: formData.first_name,
        last_name: formData.last_name,
        password: formData.password
      })
    });

    if (response.ok) {
      router.push("/login");
    } else {
      console.log("Error");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="w-full"> 
        Email: <input 
          className="w-full" 
          type="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange} />
        Username: <input 
          className="w-full" 
          type="text" 
          name="username" 
          value={formData.username}
          onChange={handleChange} />
        First Name: <input 
          className="w-full" 
          type="text" 
          name="first_name" 
          value={formData.first_name}
          onChange={handleChange} />
        Last Name: <input 
          className="w-full" 
          type="text" 
          name="last_name" 
          value={formData.last_name}
          onChange={handleChange} />
        Password: <input 
          className="w-full" 
          type="password" 
          name="password" 
          value={formData.password}
          onChange={handleChange} />
        <button className="w-full mt-6" type="submit">Register</button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly
      before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 
      after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>
      <p className="text-center text-sm text-gray-600 mt-2">
        If you don't have an account, please <Link className="text-blue-500" href="/register">register</Link>
      </p>
    </div>
  )

};

export default RegisterForm;