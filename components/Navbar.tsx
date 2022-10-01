import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className="flex mb-10 p-5 justify-between">
      <h1 className="text-2xl font-medium my-auto">QRARNOLD</h1>
      <ul className="flex gap-x-5">
        <li className="my-auto cursor-pointer">
          <BsFillMoonStarsFill className="text-2xl" />
        </li>
        {/* add downloadale cv */}
        <li className="text-xl p-2 rounded-md bg-cyan-400 cursor-pointer">
          Resume
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
