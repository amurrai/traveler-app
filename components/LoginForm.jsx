"use client"

import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {

  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    
    const loginData = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false
    });

    if (loginData?.error) {
      console.log(loginData.error)
    } else {
      router.push("/dashboard");
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