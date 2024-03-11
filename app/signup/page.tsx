import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function page() {
  return (
    <div className="flex mx-auto justify-center max-w-3xl mt-10 ">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-b-2 border-gray-400">
        <h1 className="text-sm text-center my-4">Hi, Please Sign in</h1>

        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="username"
            className="border border-gray-400 rounded px-2 py-1"
          />
          <input
            type="text"
            placeholder="Email"
            className="border border-gray-400 rounded px-2 py-1"
          />
          <input
            type="password"
            placeholder="password"
            className="border border-gray-400 rounded px-2 py-1"
          />
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

export default page;
