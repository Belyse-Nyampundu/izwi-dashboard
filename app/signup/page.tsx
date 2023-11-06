'use client'
import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import useCreateUsers from "../hooks/userRegister";
import Link from "next/link";
// import {useRouter} from "next/navigation";

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
const SignupPage = () => {
  const { handleRegister, user, error } = useCreateUsers();
  // const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
    first_name: "",
    last_name: "",
    location: "",
    national_identity: "",
  });
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  // useEffect(()=>{
  //   if (user){
  //     router.push("/login")
  //   }
  // },[user]
  // )
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "confirm_password") {
      if (formData.password !== value) {
        setPasswordMatchError(true);
      } else {
        setPasswordMatchError(false);
      }
    }
  };
  const togglePasswordVisibility = (field: string) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirm_password") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      setPasswordMatchError(true);
      return;
    }
    await handleRegister(formData);
  };
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-[754px] lg:h-[507.85px] p-4 w-full mt-16">
              <img
                src="/signup-image.png"
                alt="Signup Image"
                className="w-full h-full mx-auto"
              />
            </div>
            <div className="lg:w-1/2 p-4 w-full">
              <h2 className="text-3xl md:text-2xl text-gray-800 md:ml--1 rounded-md mb-5 ml-16">
                WELCOME!
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 ml-16">
                CREATE AN EMPLOYER ACCOUNT
              </h3>
              <form className="mt-6" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full md:w-[520px] h-[55px] px-4 py-2 border border-gray-300 rounded-md mb-5 rounded-xl focus:outline-none focus:border-primary text-gray-600 ml-16"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full md:w-[520px] h-[55px] px-4 py-2 border border-gray-300 rounded-md mb-5 rounded-xl focus:outline-none focus:border-primary text-gray-600 ml-16"
                />
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="Phone Number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  className="w-full md:w-[520px] h-[55px] px-4 py-2 border border-gray-300 rounded-md mb-5 rounded-xl focus:outline-none focus:border-primary text-gray-600 ml-16"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full md:w-[520px] h-[55px] px-4 py-2 border border-gray-300 rounded-md mb-5 rounded-xl focus:outline-none focus:border-primary text-gray-600 pr-12 ml-16"
                />
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirm_password"
                    placeholder="Confirm Password"
                    value={formData.confirm_password}
                    onChange={handleInputChange}
                    className={`w-full md:w-[520px] h-[55px] px-4 py-2 border ${passwordMatchError
                      ? "border-red-500"
                      : "border-gray-300"
                      } rounded-md mb-5 rounded-xl focus:outline-none focus:border-primary text-gray-600 pr-12 ml-16`}
                  />
                  <FontAwesomeIcon
                    icon={showConfirmPassword ? faEye : faEyeSlash}
                    style={{
                      color: "grey",
                      position: "absolute",
                      top: "35.5%",
                      right: "150px",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                    onClick={() => togglePasswordVisibility("confirm_password")}
                  />
                </div>
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  className="w-full md:w-[520px] h-[55px] px-4 py-2 border border-gray-300 rounded-md mb-5 rounded-xl focus:outline-none focus:border-primary text-gray-600 ml-16"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  className="w-full md:w-[520px] h-[55px] px-4 py-2 border border-gray-300 rounded-md mb-5 rounded-xl focus:outline-none focus:border-primary text-gray-600 ml-16"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full md:w-[520px] h-[55px] px-4 py-2 border border-gray-300 rounded-md mb-5 rounded-xl focus:outline-none focus:border-primary text-gray-600 ml-16"
                />
                <input
                  type="text"
                  name="national_identity"
                  placeholder="National Identity"
                  value={formData.national_identity}
                  onChange={handleInputChange}
                  className="w-full md:w-[520px] h-[55px] px-4 py-2 border border-gray-300 rounded-md mb-5 rounded-xl focus:outline-none focus:border-primary text-gray-600 ml-16"
                />
                {passwordMatchError && (
                  <div className="text-red-500 ml-16 mt-2">
                    Passwords do not match.
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full md:w-[520px] h-[55px] px-6 py-2 border bg-teal-600 rounded-md mb-1 rounded-xl focus:outline-none focus:border-primary text-white font-semibold ml-16"
                >
                  Sign Up
                </button>
              </form>
              {error && (
                <div className="text-red-500 ml-16 mt-2">{error}</div>
              )}
              {user && (
                <div className="text-red-500 ml-16 mt-2">{user.message}</div>
              )}
              <p className="text-gray-600 mt-4 md:ml-16">
                Already have an account?{" "}
                <Link href="/login" className="text-teal-600">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupPage;
