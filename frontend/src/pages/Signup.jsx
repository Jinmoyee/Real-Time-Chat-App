import { useState } from "react";
import userSignUp from "../hooks/userSignUp";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [data, setData] = useState({
    fullName: "",
    userName: "",
    email: "",
    gender: "",
    password: "",
    conformPassword: "",
  });

  const handleChange = (event) => {
    if (
      event.target.id === "fullName" ||
      event.target.id === "userName" ||
      event.target.id === "email" ||
      event.target.id === "password" ||
      event.target.id === "conformPassword"
    ) {
      setData({
        ...data,
        [event.target.id]: event.target.value,
      });
    }
    if (event.target.id === "Male" || event.target.id === "Female") {
      // setData((data) => ({ ...data, gender: event.target.id }))
      setData({
        ...data,
        gender: event.target.id,
      });
    }
  };

  const { loading, signup } = userSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(data);
  };

  return (
    <div className="flex justify-center items-center h-[100dvh] flex-col">
      <h1 className="text-4xl font-semibold pb-[2rem]">
        Sign <span className="text-blue-400 text-5xl">Up</span>
      </h1>
      <form
        className="w-[90%] sm:w-[70%] md:w-[40%] flex flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <label className="input input-bordered flex items-center gap-2 input-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-5 h-5 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Fullname"
            onChange={handleChange}
            id="fullName"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 input-accent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-5 h-5 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Username"
            onChange={handleChange}
            id="userName"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 input-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-5 h-5 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            onChange={handleChange}
            id="email"
          />
        </label>

        <div className="p-2 border-white border rounded-lg flex justify-around items-center gap-2 hover:border-cyan-200">
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text text-lg mr-2">Male</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-accent"
                id="Male"
                onChange={handleChange}
                checked={data.gender === "Male"}
              />
            </label>
          </div>

          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text text-lg mr-2">Female</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-secondary"
                id="Female"
                checked={data.gender === "Female"}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <label className="input input-bordered flex items-center gap-2 input-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-5 h-5 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Password"
            onChange={handleChange}
            id="password"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 input-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-5 h-5 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Conform Password"
            onChange={handleChange}
            id="conformPassword"
          />
        </label>
        <button
          className="text-black bg-white rounded-lg p-2 text-lg font-medium hover:opacity-90"
          disabled={loading}
        >
          Sign Up
        </button>
        <p>
          Already have an account?
          <span className="text-blue-300 ml-1 cursor-pointer hover:text-blue-500">
            <Link to="/">Log In</Link>
          </span>
        </p>
      </form>
    </div>
  );
};
