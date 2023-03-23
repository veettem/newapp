import React, { useState } from "react";
import { RiLoginCircleLine } from "react-icons/ri";
import {
  Button,
  Name,
  LoginArea,
  Input,
  ForgotArea,
  Para,
  SignUpBtn,
  FormMain,
  LogInImgArea,
  RightArea,
  UserHead,
  ErrorMessage,
} from "./UserAuthStyles";
import SignUp from "./SignUp";
import { logInService } from "../../services/userServices";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { saveTokens } from "../../services/auth";

const Login = () => {
  const IconStyle = {
    fontSize: "50px",
  };
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [loginAuth, setLoginAuth] = useState();

  const navigate = useNavigate();

  const signupHandler = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const loginHandler = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const logInValidation = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email id")
      .required("Required"),
    password: Yup.string().required("Required"),
  });

  const logInFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: logInValidation,
    onSubmit: async (values) => {
      await logInService(values)
        .then((user) => {
          saveTokens(user);
          navigate("/product");
        })
        .catch((error) => {
          setLoginAuth(error);
        });
    },
  });

  return (
    <>
      <FormMain>
        <LogInImgArea></LogInImgArea>
        <RightArea>
          {showLogin && (
            <>
              <LoginArea>
                <Name className="justify-center flex items-center flex-col">
                  <RiLoginCircleLine style={IconStyle} />
                  <UserHead>User Login</UserHead>
                  {loginAuth && (
                    <ErrorMessage>
                      {loginAuth?.response?.data?.message}
                    </ErrorMessage>
                  )}
                </Name>
                <form onSubmit={logInFormik.handleSubmit} autoComplete="off">
                  <Input
                    type="email"
                    name="email"
                    value={logInFormik.values.email}
                    onChange={logInFormik.handleChange}
                    placeholder="Your email"
                  ></Input>
                  <div
                    className="text-red-600 flex item-start text-xs"
                    invalid={logInFormik.errors.email}
                  >
                    {logInFormik.errors.email}
                  </div>
                  <Input
                    type="password"
                    name="password"
                    value={logInFormik.values.password}
                    onChange={logInFormik.handleChange}
                    placeholder="Password"
                  ></Input>
                  <div
                    className="text-red-600 flex item-start text-xs"
                    invalid={logInFormik.errors.password}
                  >
                    {logInFormik.errors.password}
                  </div>
                  <ForgotArea>
                    <SignUpBtn>
                      <Para>
                        <div
                          href="#"
                          className="cursor-pointer"
                          onClick={() => signupHandler()}
                        >
                          Sign Up
                        </div>
                      </Para>
                      <Para>
                        <div href="#">Forgot your password?</div>
                      </Para>
                    </SignUpBtn>
                  </ForgotArea>
                  <Button type="submit">Login</Button>
                </form>
              </LoginArea>
            </>
          )}
          {showSignup && <SignUp loginHandler={() => loginHandler()} />}
        </RightArea>
      </FormMain>
    </>
  );
};
export default Login;
