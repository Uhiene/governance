import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signinUser, signupUser } from "../services/firebase";
import { setGlobalState } from "../store";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSignUp = async () => {
    await toast.promise(
      new Promise(async (resolve, reject) => {
        await signupUser(email, password)
          .then((currentUser) => {
            setGlobalState("currentUser", currentUser);
            setEmail("");
            setPassword("");
            navigate("/")
            resolve();
          })
          .catch((error) => reject(error));
      }),
      {
        pending: "sigining up...",
        success: "signedup successfully",
        error: "encountered error",
      }
    );
  };

  const handleSignIn = async () => {
    await toast.promise(
      new Promise(async (resolve, reject) => {
        await signinUser(email, password)
          .then((currentUser) => {
            setGlobalState("currentUser", currentUser);
            setEmail("");
            setPassword("");
            navigate("/")
            resolve();
          })
          .catch((error) => reject(error));
      }),
      {
        pending: "logging in...",
        success: "logged in successfully",
        error: "encountered error",
      }
    );
  };

  return (
    <div>
      <form>
        <label htmlFor="email">email:</label>
        <input
          name="email"
          className="border border-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="password">password:</label>
        <input
          name="password"
          type={password}
          className="border border-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <div className="flex">
        <button
          onClick={handleSignIn}
          className="bg-[#14152A] bg-opacity-75 text-md font-light
              p-1 px-4 rounded-full text-white flex hover:to-[#E77FBD]
              transform transition-transform duration-30 justify-center items-center"
        >
          Login
        </button>

        <button
          onClick={handleSignUp}
          className="bg-[#14152A] bg-opacity-75 text-md font-light
              p-1 px-4 rounded-full text-white flex hover:to-[#E77FBD]
              transform transition-transform duration-30 justify-center items-center"
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
