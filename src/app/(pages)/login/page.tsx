import LoginSection from "@/app/components/organisms/LoginSection";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="container min-h-screen py-10 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="col-span-1 lg:col-span-2 order-2 lg:order-1">
          <LoginSection />
        </div>
        <div className="col-span-1 lg:col-span-3 order-1 lg:order-2">
          <div className="w-full h-full flex items-center justify-center relative">
            <Image
              src="/meet-us-vr.png"
              alt="MeetUs"
              width={1500}
              height={1500}
              className="object-cover lg:absolute lg:-end-20 lg:top-1/2 lg:-translate-y-1/2 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
