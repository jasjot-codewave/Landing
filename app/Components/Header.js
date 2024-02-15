"use client";

import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

export const Header = () => {
  const [color, setColor] = useState("transparent");
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 72) {
      setColor("white");
    } else {
      setColor("transparent");
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <header className={`bg-${color} w-full fixed top-0 z-50`}>
      <div className="w-full flex justify-center md:justify-between items-center p-4 max-w-[1100px] m-auto relative">
        <div className="absolute top-[50%] translate-y-[-50%] left-10 block md:hidden" onClick={() => setSidebarOpened(true)}>
          <GiHamburgerMenu color="black" size={25} />
        </div>
        <div className={`bg-white h-screen ${sidebarOpened ? "w-[50%]" : "w-0"} absolute top-0 left-0 shadow-md md:hidden overflow-hidden duration-300 ease-in-out`} onClick={() => setSidebarOpened(false)}>
          <div className="w-full h-full relative">
            <div className="absolute right-5 top-5">
              <MdClose color="black" size={25} />
            </div>
            <div className="flex justify-between items-center flex-col h-full py-14 text-center">
              <div className="flex flex-col gap-10">
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
              </div>
              <div>
                <button className="text-xs bg-[#111B47] text-white px-10 py-2 rounded-sm">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex hidden justify-start items-center gap-10 text-sm text-[#505F98] w-full flex-shrink">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
        </div>
        <h1 className="text-2xl text-[#37447E] font-black leading-10">Landing</h1>
        <div className="w-full flex-shrink justify-end md:flex hidden">
          <button className="text-xs bg-[#111B47] text-white px-10 py-2 rounded-sm">Buy Now</button>
        </div>
      </div>
    </header>
  );
};
