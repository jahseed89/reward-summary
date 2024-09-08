"use client";

import React, { useState } from "react";
import { MainLayoutProps } from "../../@types/index";
import { TfiMenu } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import Header from "../Header";
import SideBar from "../side-bar/SideBar";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <div className="flex justify-start lg:justify-end">
      <h2
        className="lg:hidden text-blue-100 text-2xl absolute top-7 pl-3"
        onClick={handleToggleSidebar}
      >
        <TfiMenu />
      </h2>
      <div
        className={`${
          toggleSidebar ? "sm:block" : "hidden"
        } bg-white-100 h-screen w-[80%] lg:w-[20%] py-3 px-3 !z-50 lg:block fixed top-0 left-0 border-r border-blue-10`}
      >
        <h2
          className="absolute text-blue-100 text-3xl top-6 pr-3 right-0 lg:hidden"
          onClick={handleToggleSidebar}
        >
          <IoClose />
        </h2>

        <SideBar />
      </div>

      <main className="w-[100%] lg:w-[80%]">
        <Header />
        <div className="px-3 py-4">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
