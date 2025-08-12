"use client";
import Logo from "../atoms/Logo";
import LogoutBtn from "../atoms/LogoutBtn";
import { useSelector } from "react-redux";
import { RootState } from "@/rtkQuery/store";

const Navbar = () => {
    const { id } = useSelector((state: RootState) => state.auth);
  return (
    <div className="py-4 container shadow sticky top-0 z-50 bg-white/30 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <Logo />
        {id && <LogoutBtn />}
      </div>
    </div>
  );
};

export default Navbar;
