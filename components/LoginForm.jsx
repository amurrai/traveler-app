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
    
    // disabled redirect so we can log any errors
    const loginData = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false
    });

    // push to dashboard route if no authentication errors 
    if (loginData?.error) {
      console.log(`Error: ${loginData.error}`)
    } else {
      router.push("/dashboard");
      router.refresh();
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

export default LoginForm;