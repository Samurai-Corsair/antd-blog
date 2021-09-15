import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";

interface IValues {
  email: string;
  password: string;
}

export const SignUp: React.FC = () => {

    const initialValues = {
        email: "",
        password: "",
    }

  return (
    <div className='sign-un-page'>
      Sign In page
      <Formik
        initialValues={initialValues}
        onSubmit={(
          values: IValues,
          { setSubmitting }: FormikHelpers<IValues>
        ) => {
          setTimeout(() => {
              console.log('s', values)
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />
          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" placeholder="password" />

          <button type="submit">Sign-in</button>
        </Form>
      </Formik>
    </div>
  );
};
