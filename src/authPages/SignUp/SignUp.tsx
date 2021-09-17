import { Field, Form, Formik, FormikHelpers } from "formik";
import React, {useState} from "react";
import {Steps } from "antd";

interface IValues {
    email: string,
    password: string,
    name: string,
    extra_details: string,
    skills: string,
    profession: string,
    details: string
}



export const SignUp: React.FC = () => {
    const [step, setStep] = useState<number>(0)

    const initialValues = {
        email: '',
        password: '',
        name: "",
        extra_details: "",
        skills: "",
        profession: "",
        details: ""
    }

    const renderSteps = () => {
        const {Step} = Steps
        return (
        <Steps current={0}>
            <Step title="Set your Credentials" description="yo." icon={''}/>
            <Step title="Tell us about yourself" subTitle="please=)" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
        </Steps>
        )
    }

  return (
    <div className='sign-up-page'>
      Sign Up page
        {renderSteps()}
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

          <button type="submit">create new profile</button>
        </Form>
      </Formik>
    </div>
  );
};
