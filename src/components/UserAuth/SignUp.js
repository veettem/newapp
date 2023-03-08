import React, { useState, useEffect } from "react";
import {
  Button,
  Name,
  Input,
  ForgotArea,
  Para,
  SignUpBtn,
  Option,
  Select,
  SignUpArea,
  UserHead,
} from "./UserAuthStyles";
import { BsFillDatabaseFill } from "react-icons/bs";
import axios from "axios";
const SignUp = ({ loginHandler }) => {
  const IconStyle = {
    fontSize: "50px",
  };

  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    profileImage: "",
    gender: "",
  });

  const handlerInputChange = (event) => {
    setSignUpDetails({
      ...signUpDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/users/create-user", signUpDetails, {
        header: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   signUpHandler();
  // }, []);

  return (
    <>
      <SignUpArea>
        <Name className="justify-center flex items-center flex-col">
          <BsFillDatabaseFill style={IconStyle} />
          <UserHead>User Sign Up</UserHead>
        </Name>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={signUpDetails.name}
            onChange={handlerInputChange}
            placeholder="Your name"
          />
          <Input
            type="email"
            name="email"
            value={signUpDetails.email}
            onChange={handlerInputChange}
            placeholder="Email address"
          />
          <Input
            type="phone"
            name="phone"
            value={signUpDetails.phone}
            onChange={handlerInputChange}
            placeholder="Phonne number"
          />
          <Input
            type="password"
            name="password"
            value={signUpDetails.password}
            onChange={handlerInputChange}
            placeholder="Password"
          />
          <Input
            type="file"
            name="profileImage"
            value={signUpDetails.profileImage}
            onChange={handlerInputChange}
            placeholder="Upload Your Profile"
          />

          <Select
            onChange={handlerInputChange}
            name="gender"
            value={signUpDetails.gender}
          >
            <Option value="">Please Select</Option>
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
            <Option value="Other">Other</Option>
          </Select>
          <ForgotArea>
            <SignUpBtn>
              <Para>
                <div className="cursor-pointer" onClick={loginHandler}>
                  Login
                </div>
              </Para>
            </SignUpBtn>
          </ForgotArea>
          <Button>Sign Up</Button>
        </form>
      </SignUpArea>
    </>
  );
};
export default SignUp;
