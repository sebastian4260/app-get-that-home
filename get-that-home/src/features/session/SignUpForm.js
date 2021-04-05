import FormField from "../../components/UI/Form/FormField";

import { useDispatch } from "react-redux";
import { useState } from "react";


export default function SignUpForm() {
  

  return (
    <form>
      
      <FormField>
        <label>Name</label>
        <input
          
          
          type="text"
        />
      </FormField>
      <FormField>
        <label>Email</label>
        <input
          
          
          type="email"
        />
      </FormField>

      <FormField>
        <label>Phone</label>
        <input
          
          
          type="phone"
        />
      </FormField>

      <FormField>
        <label>Password</label>
        <input
          
          
          type="password"
        />
      </FormField>

      <FormField>
        <label>Password Confirmation</label>
        <input
          
          
          type="password"
        />
      </FormField>
    </form>
  );
}