import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import moxLogo from "../assets/logo/mgx-login.png";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import toast, { Toaster } from "react-hot-toast";

const MoxLogin = ({ onSuccess }) => {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  // Prevent duplicate login calls
  const isLoggingIn = useRef(false);

  const login = async () => {
    if (isLoggingIn.current) return;
    isLoggingIn.current = true;

    try {
      // Save wallet address as token
      localStorage.setItem("mgx_token", address);
      localStorage.setItem("mgx_wallet", address);

      toast.success("Login successful");

      // Close popup and go to dashboard
      onSuccess();
    } catch (err) {
      console.error("Login failed:", err);
      toast.error("Login failed. Please try again.");
      isLoggingIn.current = false;
    }
  };

  // Auto login after wallet connects (but only if no token)
  useEffect(() => {
    const token = localStorage.getItem("mgx_token");

    if (!token && isConnected && address) {
      login();
    }
  }, [isConnected, address]);

  return (
    <div className="flex items-center justify-center">
      <Toaster position="top-right" />

      <div
        className="w-full max-w-md rounded-2xl p-8 text-center bg-black
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

        {/* Connect Wallet */}
      <button
  className="w-full bg-yellow-400 hover:bg-yellow-500
  text-black font-semibold py-3 rounded-full transition"
  onClick={async () => {
    if (!isConnected) {
      await open();     // Connect wallet first
    } else {
      await login();    // If already connected, login
    }
  }}
>
  {isConnected
    ? address.slice(0, 6) + "..." + address.slice(-4)
    : "Connect Wallet"}
</button>


        {/* Email login text */}
        <p className="text-gray-300 text-sm mt-5">
          If You Have An Account{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            Login
          </span>{" "}
          By Email
        </p>

        {/* Back Home */}
        <StyledWrapper>
          <button className="back-home-btn">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"
                  />
                </svg>
              </div>
            </div>
            <span>Back Home</span>
          </button>
        </StyledWrapper>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  button.back-home-btn {
    font-family: inherit;
    font-size: 18px;
    background: white;
    color: black;
    padding: 0.7em 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 9999px;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
    width: 100%;
    font-weight: 500;
    margin-top: 1.5rem;
  }

  button.back-home-btn span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  button.back-home-btn svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  button.back-home-btn:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }

  button.back-home-btn:hover svg {
    transform: translateX(2em) scale(1.1);
  }

  button.back-home-btn:hover span {
    transform: translateX(12em);
  }

  button.back-home-btn:active {
    transform: scale(0.95);
  }

  @keyframes fly-1 {
    from {
      transform: translateY(0.1em);
    }
    to {
      transform: translateY(-0.1em);
    }
  }
`;

export default MoxLogin;
