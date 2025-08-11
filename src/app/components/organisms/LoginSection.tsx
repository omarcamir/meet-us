import Link from "next/link";
import React from "react";
import LoginForm from "../molecules/LoginForm";

const LoginSection = () => {
  return (
    <section className="min-h-screen flex flex-col text-center justify-center items-center">
      <h1 className="text-6xl font-[400]">Welcome back</h1>
      <p className="text-secondary-color text-lg font-[400] mt-2">
        Step into our shopping metaverse for an unforgettable shopping
        experience
      </p>
      <div className="my-9 w-full">
        <LoginForm/>
      </div>
      <p className="text-secondary-color text-lg font-[400] mt-2">
        Don&apos;t have an account? <Link href="/register" className="underline hover:text-main-color underline-offset-2 hover:no-underline duration-200 transition-all">Sign up</Link>
      </p>
    </section>
  );
};

export default LoginSection;
