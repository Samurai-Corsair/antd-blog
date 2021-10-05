import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import { Steps } from "antd";

interface IValues {
  email: string;
  password: string;
  name: string;
  extra_details: string;
  skills: string;
  profession: string;
  details: string;
}

export const SignUp: React.FC = () => {
  const [step, setStep] = useState<number>(0);

  const initialValues = {
    email: "",
    password: "",
    name: "",
    extra_details: "",
    skills: "",
    profession: "",
    details: "",
  };

  const renderSteps = () => {
    const { Step } = Steps;
    return (
      <Steps current={step}>
        <Step title="Set your Credentials" description="yo." icon={""} />
        <Step
          title="Tell us about yourself"
          subTitle="please=)"
          description="This is a description."
        />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    );
  };

  return (
    <div className="sign-up-page">
      Sign Up page
      {renderSteps()}
      <Formik
        initialValues={initialValues}
        onSubmit={(
          values: IValues,
          { setSubmitting }: FormikHelpers<IValues>
        ) => {
          setTimeout(() => {
            console.log("s", values);
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          {step === 0 && (
            <>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="john@acme.com"
                type="email"
              />
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="password"
              />
              <button onClick={() => setStep(step + 1)}>next step</button>
            </>
          )}
          {step === 1 && (
            <>

                <label>Name</label>
                <Field
                    id="name"
                    name="name"
                    placeholder="your name"
                />
                <label>Extra details</label>
                <Field
                    id="extra_details"
                    name="extra_details"
                    placeholder="details"
                />
              <button onClick={() => setStep(step - 1)}>prev step</button>
              <button onClick={() => setStep(step + 1)}>next step</button>
            </>
          )}
          {step === 2 && (
            <>
                skills
                <label>skills</label>
                <Field
                    id="skills"
                    name="skills"
                    placeholder="skills"
                />
                <label>profession</label>
                <Field
                    id="profession"
                    name="profession"
                    placeholder="profession"
                />
              <button onClick={() => setStep(step - 1)}>prev step</button>
              <button type="submit">create new profile</button>
            </>
          )}
        </Form>
      </Formik>
    </div>
  );
};
