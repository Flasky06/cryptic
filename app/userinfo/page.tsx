import React from "react";

export function page() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zinc-300 flex flex-col gap-2 my-6">
        <div>
          Name : <span className="font-bold">john</span>
        </div>

        <div>
          email : <span className="font-bold">john@gmail.com</span>
        </div>
        <button className="bg-red-400 text-white font-bold px-6 py-1 mt-3">
          Log out
        </button>
      </div>
    </div>
  );
}
