import React from "react";
import Link from "next/link";
import Image from "next/image";
import { routes } from "@/utiles";
import { usePathname } from "next/navigation";
import { CiUser } from "react-icons/ci";
import { SlLogout } from "react-icons/sl";

const SideBar = () => {
  const routerName = usePathname();
  return (
    <aside className="h-full flex flex-col">
      <div className="flex justify-start items-center pl-1 pt-3">
        <Image src="/rewards.png" width={100} height={100} alt="logo" />
        <h2 className="text-blue-200 text-2xl pl-1 font-bold">Rewards</h2>
      </div>
      <ul className="pl-1 border-b border-blue-10 py-4">
        {routes.map((route, index) => (
          <Link key={index} href={route.layout}>
            <li
              className={`flex justify-start items-center my-6 lg:my-2 py-3 lg:py-2 hover:bg-blue-100 cursor-pointer hover:text-white-100 rounded font-semibold pl-1 ${
                routerName === route.layout
                  ? "text-blue-100"
                  : "text-dark-50 "
              }`}
            >
              <span>{route.icon}</span>
              <span className="pl-5">{route.name}</span>
            </li>
          </Link>
        ))}
      </ul>
      <div className="mt-auto pl-2">
          <Link href="#" className="flex justify-start items-center">
              <CiUser />
              <span className="ml-4 text-dark-50 font-bold text-sm">Account</span>
          </Link>
          <Link href="/" className="flex justify-start items-center py-5">
              <SlLogout />
              <span className="ml-4 text-dark-50 font-bold text-sm">Logout</span>
          </Link>
      </div>
    </aside>
  );
};

export default SideBar;
