import FormField from "../../components/UI/Form/FormField";

import { useDispatch } from "react-redux";
import { useState } from "react";


export default function LoginForm({ id }) {
  

  return (
    <form>
      
      <FormField>
        <label>Email Address</label>
        <input
          
          
          type="email"
        />
      </FormField>
      <FormField>
        <label>Password</label>
        <input
          
          
          type="password"
        />
      </FormField>
    </form>
  );
}