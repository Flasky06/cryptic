"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function Page(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="flex mx-auto justify-center max-w-3xl mt-10">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-b-2 border-gray-400">
        <h1 className="text-sm text-center my-4">Hi, create an account</h1>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            className="border border-gray-400 rounded px-2 py-1"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-400 rounded px-2 py-1"
            value={password}
            onChange={handlePasswordChange}
          />
          <p className="p-1 text-sm">
            Dont have an account
            <Link href="/signup">sign up</Link>
          </p>

          <button type="submit" className="flex justify-center">
            <FaArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
