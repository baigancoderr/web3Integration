import React from "react";
import moxLogo from "../assets/logo/mgx-login.png";

const MoxLogin = () => {
  return (
    <div className=" flex items-center justify-center ">
      {/* Card */}
      <div
        className="w-[100%] max-w-md rounded-2xl p-8 text-center bg-black
        border border-yellow-500 shadow-[0_0_40px_rgba(255,200,80,0.4)]"
      >
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={moxLogo} alt="MGXCOIN Logo" className="h-12 w-auto" />
        </div>

        {/* Title */}
        <p className="text-white text-sm mb-6">
          Enter The MGXCOIN (MGX) Dashboard
        </p>

        {/* Connect Wallet Button */}
        <button
          className="w-full bg-yellow-400 hover:bg-yellow-500
          text-black font-semibold py-3 rounded-full transition"
        >
          Connect Wallet
        </button>

        {/* Login by Email */}
        <p className="text-gray-300 text-sm mt-5">
          If You Have An Account{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            Login
          </span>{" "}
          By Email
        </p>

        {/* Back Home */}
        <button
          className="mt-6 w-full bg-white text-black font-medium
          py-3 rounded-full flex items-center justify-center gap-2"
        >
          ← Back Home
        </button>
      </div>
    </div>
  );
};

export default MoxLogin;
