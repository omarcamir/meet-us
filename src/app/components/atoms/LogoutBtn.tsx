"use client";
import { logout } from "@/rtkQuery/slices/authSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutBtn;
