"use client";
import { RootState } from "@/rtkQuery/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const HomeContent = () => {
  const { id, name } = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  if (!id) {
    router.push("/login");
    return null;
  }

  return (
    <div className="container min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <p className="text-3xl font-bold">
          Hello
          <span className="text-main-color"> {name}</span>
        </p>
        <p className="text-3xl font-bold">
          Your ID is <span className="text-secondary-color">{id}</span>
        </p>
      </div>
    </div>
  );
};

export default HomeContent;
