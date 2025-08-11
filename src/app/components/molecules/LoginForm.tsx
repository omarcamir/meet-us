"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MailIcon from "../../../../public/svgIcons/MailIcon";
import PasswordIcon from "../../../../public/svgIcons/PasswordIcon";

interface MyFormValues {
  email: string;
  password: string;
}

const formFields = [
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    Icon: MailIcon, // ✅ store component, not JSX
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    Icon: PasswordIcon, // ✅ store component, not JSX
  },
];

export default function LoginForm() {
  const initialValues: MyFormValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Too short").required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
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
          className="w-full bg-main-color text-white py-2 rounded-md hover:bg-white hover:text-main-color hover:border-main-color border border-main-color cursor-pointer transition-all duration-200 mt-9"
        >
          Login
        </button>
      </Form>
    </Formik>
  );
}
