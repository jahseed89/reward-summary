import React from "react";
import { HiOutlineCloudDownload } from "react-icons/hi";
import { usePathname } from "next/navigation";
import Button from "./Button";

const Header = () => {
  const pathName = usePathname();

  return (
    <nav className="flex justify-end lg:justify-between items-center py-4 bg-white-100 h-20 px-3">
      <h2 className="font-bold text-xl hidden lg:block">
        {pathName.split("/")[1].toUpperCase()}
      </h2>
      <div className="w-[80%] md:w-[40%] lg:w-[30%] flex justify-between lg:justify-end items-center">
        <Button
          disable={false}
          type="submit"
          onClick={(e: unknown) => console.log("downloading", e)}
          additionalStyles="flex justify-between items-center bg-white-100 text-sm py-2 rounded w-[40%] mr-5 px-3 text-black shadow-cardShadow"
        >
          <span className="pr-1 text-black">
            <HiOutlineCloudDownload />
          </span>
          <span className="text-black">Download</span>
        </Button>
        <Button
          onClick={(e: unknown) => console.log("creating", e)}
          disable={false}
          type="submit"
          additionalStyles={`flex justify-around items-center text-sm text-white-100 !py-1 rounded w-[40%] px-3`}
        >
          <span className="text-xl">+</span>
          <span>Create</span>
        </Button>
      </div>
    </nav>
  );
};

export default Header;
