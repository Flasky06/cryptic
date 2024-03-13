"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

function Page() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("invalid credentials");
        return;
      }

      router.replace("/dashboard");
    } catch (error) {}
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-400 rounded px-2 py-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="p-1 text-sm">
            Dont have an account
            <Link href="/signup">sign up</Link>
          </p>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2 ">
              {error}
            </div>
          )}

          <button type="submit" className="flex justify-center">
            <FaArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
