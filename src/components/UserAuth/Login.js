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
} from "./UserAuthStyles";
import SignUp from "./SignUp";

const Login = () => {
  const IconStyle = {
    fontSize: "50px",
  };
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const signupHandler = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const loginHandler = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

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
                </Name>
                <Input type="text" placeholder="Your name"></Input>
                <Input type="password" placeholder="Password"></Input>
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
                <Button>Login</Button>
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
