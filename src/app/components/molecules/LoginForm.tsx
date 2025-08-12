"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MailIcon from "../../../../public/svgIcons/MailIcon";
import PasswordIcon from "../../../../public/svgIcons/PasswordIcon";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useGetUserInfoQuery, useLoginMutation } from "@/rtkQuery/services/authApi";
import { setUser } from "@/rtkQuery/slices/authSlice";
import { useEffect } from "react";

interface MyFormValues {
  email: string;
  password: string;
}

const formFields = [
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    Icon: MailIcon,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    Icon: PasswordIcon,
  },
];

export default function LoginForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const { data: userInfo, refetch } = useGetUserInfoQuery(undefined, {
    skip: true, // don't fetch automatically
  });

  const initialValues: MyFormValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Too short").required("Required"),
  });
   useEffect(() => {
    // If userInfo is fetched, dispatch to store and redirect
    if (userInfo) {
      dispatch(setUser({ id: userInfo.id, name: userInfo.name }));
      router.push("/dashboard");
    }
  }, [userInfo, dispatch, router]);

 const onSubmit = async (values: MyFormValues) => {
    try {
      await login({ ...values}).unwrap();
      await refetch();
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="w-full flex flex-col gap-5">
        {formFields.map(({ name, type, placeholder, Icon }) => (
          <div key={name}>
            <div className="relative">
              {/* Icon positioned at start for RTL/LTR */}
              <Icon className="absolute inset-y-0 start-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
              <Field
                placeholder={placeholder}
                name={name}
                type={type}
                className="mt-1 block w-full bg-white/40 border border-white rounded-lg p-4 ps-10 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <ErrorMessage
              name={name}
              component="div"
              className="text-red-500 text-sm text-start mt-1"
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-main-color text-white py-2 rounded-md hover:bg-white hover:text-main-color hover:border-main-color border border-main-color cursor-pointer transition-all duration-200 mt-9"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </Form>
    </Formik>
  );
}
