import React from "react";
import Link from "next/link";
import { IoAdd, IoMail } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

import { MdAddCircle } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function Header(): JSX.Element {
  return (
    <div className="px-6 sticky top-0 py-5 bg-zinc-800	text-white">
      <div className="flex justify-between items-center ">
        <div>
          <Link href="/">cryptodom</Link>
        </div>
        <ul className="flex gap-10 items-center">
          <li className="text-sm">my balance $0.00</li>
          <li className="">
            <IoMail className="text-lg" />
          </li>
          <li className="">
            <MdAddCircle className="text-lg" />
          </li>
          <li className="">
            <FaUser className="text-lg" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
