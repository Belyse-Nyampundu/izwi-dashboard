import { useState } from "react";
import { registerUser } from "../utilities/utils";
import router from "next/router";

interface FormData {
  email: string;
  phone_number: string;
  password: string;
  confirm_password: string;
  username: string;
  first_name: string;
  last_name: string;
  location: string;
  national_identity: string;
}

const useCreateUsers = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const handleRegister = async (formData: FormData) => {
    try {
      const createdUser = await registerUser(formData);
      setUser(createdUser);
      setError('');
      setMessage('Registration successful.');
      router.replace('/login');
    }
     catch (error) {
      setUser(null);
      setError('Registration failed. Please try again.');
      setMessage('');
    }
  };

  return { handleRegister, user, error, message };
};

export default useCreateUsers;

