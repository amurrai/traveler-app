"use client";

import React, { useState } from "react";

const RouteRatingForm = async () => {

  const [formData, setFormData] = useState({
      rating: 1,
      comment: ''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    const response = await fetch("/api/route-rating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        rating: formData.rating,
        comment: formData.comment
      })
    });


  };

  return (
    <div>
      <form className="block" onSubmit={onSubmit}>
        <div>
          Rating: <select name="rating" value={formData.rating} onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select> 
        </div>
        <div>
          Comment: <input type="text" name="comment" value={formData.comment} onChange={handleChange} />
        </div>
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  )
}

export default RouteRatingForm;