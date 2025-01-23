"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type FormValues = {
  email: string;
  password: string;
};

type FormErrors = {
  email?: string;
  password?: string;
};

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: FormErrors = {};
    if (!formValues.email) errors.email = "Email is required";
    if (!formValues.password) errors.password = "Password is required";
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative bg-[url('/Images/mainbg.svg')] bg-cover bg-center h-[316px] ">
        <div className="absolute inset-0  "></div>

        <div className="relative flex flex-col items-center justify-center h-full">
          <div className="mb-4 -mt-10">
            <Image
              src="/Images/Logo.svg"
              alt="Shop Logo"
              width={77}
              height={77}
              className="object-contain"
            />
          </div>
          <h1 className="font-medium text-[48px] -mt-5">Notify me</h1>

          <nav className="text-black text-sm  mt-3">
            <Link href="/" className="font-bold">
              Home
            </Link>
            <span className="mx-2 font-bold">{">"}</span>
            <span className="hover:underline ">Signup</span>
          </nav>
        </div>
      </div>

      <section className="bg-gray-50 py-12 px-6">
        <div className="container mx-auto max-w-lg rounded-lg shadow-lg p-8 bg-white">
          <h2 className="text-black text-2xl font-semibold mb-6 text-center">
            {isLogin ? "Login to Your Account" : "Sign Up for Future Updates"}
          </h2>

          {!isForgotPassword ? (
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="block w-full bg-white rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
                {formErrors.email && (
                  <span className="text-red-500 text-xs mt-1">
                    {formErrors.email}
                  </span>
                )}
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formValues.password}
                  onChange={handleChange}
                  className="block w-full bg-white rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
                {formErrors.password && (
                  <span className="text-red-500 text-xs mt-1">
                    {formErrors.password}
                  </span>
                )}
              </div>

              {!isLogin && (
                <div className="flex items-center mb-4">
                  <input type="checkbox" id="newsletter" className="mr-2" />
                  <label htmlFor="newsletter" className="text-sm text-gray-600">
                    Sign up for future updates and exclusive deals!
                  </label>
                </div>
              )}

              <button
                type="submit"
                className="w-full mt-4 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-200"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
          ) : (
            <div>
              <h3 className="text-xl font-semibold text-gray-600 mb-4 text-center">
                Forgot Password
              </h3>
              <p className="text-sm text-gray-500 mb-6 text-center">
                Enter your email address to receive a password reset link.
              </p>
              <form onSubmit={handleSubmit}>
                {/* Email Input */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formValues.email}
                    onChange={handleChange}
                    className="block w-full bg-white rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                  {formErrors.email && (
                    <span className="text-red-500 text-xs mt-1">
                      {formErrors.email}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-200"
                >
                  Send Password Reset Link
                </button>
              </form>
            </div>
          )}

          <div className="mt-6 text-center">
            {!isLogin && !isForgotPassword ? (
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </span>
              </p>
            ) : isLogin ? (
              <p className="text-sm text-gray-600">
                Dont have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </span>
              </p>
            ) : (
              <p className="text-sm text-gray-900">
                Remember your password?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setIsForgotPassword(false)}
                >
                  Go back to Login
                </span>
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthPage;
