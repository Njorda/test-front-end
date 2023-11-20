"use client"
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function InputDemo() {
  // State variables to store input values
  const [email1, setEmail1] = useState('');
  const [email2, setEmail2] = useState('');

  // Handler for input changes
  const handleEmail1Change = (event) => {
    setEmail1(event.target.value);
  };

  const handleEmail2Change = (event) => {
    setEmail2(event.target.value);
  };

  // Optional: Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process or send the input data here
    console.log(email1, email2);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        type="email" 
        placeholder="Email" 
        value={email1}
        onChange={handleEmail1Change}
      />
      <Input 
        type="email" 
        placeholder="Email" 
        value={email2}
        onChange={handleEmail2Change}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
