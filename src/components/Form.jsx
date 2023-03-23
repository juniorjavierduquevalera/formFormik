import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PuffLoader from "react-spinners/ClipLoader";
import "./form.css";

function ExampleForm() {
  const [loading, setloading] = useState(false);
  const [message, setMessage] = useState(false);

  const publicar = (values) => {
    setloading(true);
    setMessage(true);

    setTimeout(() => {
      setloading(false);

      setTimeout(() => {
        setMessage(false);
      }, 2500);
    }, 2000);
    console.log(values);
    return values;
  };
  const validar = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Your password must have more than 8 characters";
    }
    return errors;
  };
  return (
    <>
      <div className="mockup-phone border-info">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            {loading ? (
              <PuffLoader color="#7DD3FC" size={60} speedMultiplier={1} />
            ) : message ? (
              <div className="flex justify-center items-center gap-2">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-info"
                  />
                </label>
                <span className="label-text">successful message</span>
              </div>
            ) : (
              <div>
                <h1 className="text-4xl font-bold text-sky-300 my-4">Logo</h1>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  onSubmit={publicar}
                  validate={validar}
                >
                  <Form className="flex flex-col gap-2 mx-10">
                    <section className="form-control w-full max-w-xs mb-4">
                      <label className="label">
                        <span className="label-text text-base">
                          What is your email?
                        </span>
                      </label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@gmail.com"
                        className="input input-bordered input-info w-full max-w-xs field"
                      />
                      <span className="w-48 text-sm">
                        <ErrorMessage name="email" />
                      </span>
                    </section>

                    <section className="form-control w-full max-w-xs mb-10">
                      <label className="label">
                        <span className="label-text text-base">
                          Enter your password?
                        </span>
                      </label>
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered input-info w-full max-w-xs field"
                      />
                      <span className="w-48 text-sm">
                        <ErrorMessage name="password" />
                      </span>
                    </section>
                    <button
                      type="submit"
                      className="btn btn-block btn-outline btn-info"
                    >
                      Login
                    </button>
                  </Form>
                </Formik>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default ExampleForm;
