import React from "react";
import { FaUser } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { MdOutlineDone, MdMenu } from "react-icons/md";
import { IoMail, IoDocument } from "react-icons/io5";

import { IoDocumentTextSharp } from "react-icons/io5";

function Sidebar() {
  return (
    <div className="flex flex-col px-2 py-4 gap-4  h-screen w-1/5 bg-gray-700 text-white sticky top-0 left-0	">
      <div className="flex flex-col gap-2 justify-center bg-gray-900 p-2">
        <div className="px-1">
          <FaUser className="text-sm" />
          <p>flasky</p>
        </div>
        <div>client</div>
      </div>
      <div className="text-sm cursor-pointer p-1">Balance : $0.00</div>
      <div className="font-bold cursor-pointer p-1">Add Funds</div>
      <ul className="flex flex-col gap-4 pl-4">
        <li className="flex items-center gap-2 justify-start">
          <MdHome />
          <div className="text-sm cursor-pointer p-1">Home</div>
        </li>
        <li className="flex items-center gap-2 justify-start">
          <MdOutlineDone />
          <div className="text-sm cursor-pointer p-1"> Bulk sms sender</div>
        </li>
        <li className="flex items-center gap-2 justify-start">
          <IoDocumentTextSharp />
          <div className="text-sm cursor-pointer p-1"> Fulz | Logs</div>
        </li>
        <li className="flex items-center gap-2 justify-start">
          <IoMail />
          <div className="text-sm cursor-pointer p-1"> Letters</div>
        </li>
        <li className="flex items-center gap-2 justify-start">
          <MdMenu />
          <div className="text-sm cursor-pointer p-1"> Account transfers</div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
