"use client";
import React, { useState } from "react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

function Signup() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const checkSession = async () => {
    const session = await getServerSession(authOptions);
    if (session) redirect("/");
  };

  // Call checkSession when the component mounts
  useEffect(() => {
    checkSession();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message); // Update error state if there's an error
        return;
      }
      setError(""); // Clear error state on successful registration
      const form = e.target as HTMLFormElement;
      form.reset();
      router.push("/login");
    } catch (error) {
      console.log("Error during registration:", error);
      setError("Error during registration. Please try again."); // Update error state on catch
    }
  };

  return (
    <div className="flex mx-auto justify-center max-w-3xl mt-10">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border- b-2 border-gray-400">
        <h1 className="text-sm text-center my-4">Hi, Please Sign in</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="username"
            className="border border-gray-400 rounded px-2 py-1"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="border border-gray-400 rounded px-2 py-1"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            className="border border-gray-400 rounded px-2 py-1"
          />
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <p className="p-1 text-sm">
            already have an account?
            <Link href="/login" className="text-base font-bold">
              login
            </Link>
          </p>

          <button className="flex justify-center">
            <FaArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
