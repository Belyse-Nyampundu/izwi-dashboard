'use client'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import useLogin from "../hooks/userLogin";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleLogin, error } = useLogin();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    handleLogin({
      username: formData.username,
      password: formData.password,
    });
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center">
          <div className="flex flex-col lg:flex-row">
            <img
              src="/huza.png"
              alt="Huza"
              className="w-auto h-auto max-w-full max-h-full mx-auto lg:w-[754px] h-[507.85px] p-4 lg:p-0"
            />
            <div className="lg:w-1/2 p-4 lg:ml-4">
              <div className="flex flex-col items-start">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-48 h-auto mb-4 ml-16"
                />
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 text-left mb-4 ml-16">
                  WELCOME BACK!
                </h3>
              </div>
              <form className="mt-6" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full md:w-[650px] h-[55px] px-4 py-2 border border-gray-300 rounded-md mb-5 rounded-xl focus:outline-none focus:border-primary text-gray-600 ml-16"
                  />
                </div>
                <div className="mb-3 relative ml-16">
                  <div className="relative flex">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full md:w-[650px] h-[55px] px-4 py-2 border border-gray-300 rounded-md mb-5 rounded-xl focus:outline-none focus:border-primary text-gray-600 pr-12 ${error ? "border-red-500" : ""
                        }`}
                    />
                    <button
                      type="button"
                      className="absolute top-1/2 left-[95%] transform -translate-y-1/2 focus:outline-none"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-xl text-gray-600"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faEyeSlash}
                          className="text-xl text-gray-600"
                        />
                      )}
                    </button>
                  </div>
                </div>
                {error && (
                  <p className="text-red-500 text-sm mb-3 ml-16">
                    {error}
                  </p>
                )}
                <div className="flex justify-between items-center mb-3 ml-16">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="rememberMe"
                      className="text-gray-600 ml-2 text-lg"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="flex flex-col items-center mt-4 ml-16">
                  <p className="text-gray-600 text-sm md:text-base">
                    <Link href="/forgot-password" className="text-teal-600 text-lg">
                      Forgot Password
                    </Link>
                  </p>
                </div>
                
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full md:w-[650px] h-[55px] bg-teal-600 text-white rounded-xl py-2 text-lg md:text-xl lg:text-2xl mt-4 ml-16"
                >
                 
                  Log In
                
                </button>
               
                <p className="text-gray-600 mt-2 text-sm md:text-base ml-16">
                  Don't have an account?{" "}
                  <Link href="/signup" className="text-teal-600">
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
