// import React, { useState } from "react";
import {
  Button,
  Name,
  Input,
  ForgotArea,
  Para,
  Option,
  Select,
  SignUpArea,
  UserHead,
  LoginBtn,
} from "./UserAuthStyles";
import { BsFillDatabaseFill } from "react-icons/bs";
import { signUpService } from "../../services/userServices";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
const SignUp = ({ loginHandler }) => {
  const IconStyle = {
    fontSize: "50px",
  };

  // const [signUpDetails, setSignUpDetails] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  //   profileImage: "",
  //   gender: "",
  // });

  // const handlerInputChange = (event) => {
  //   setSignUpDetails({
  //     ...signUpDetails,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const res = await signUpService(signUpDetails);
  //   console.log(res);
  // };

  // const logInNavigate = useNavigate();

  const signUpValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid Email ID").required("Required"),
    phone: Yup.string()
      .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Invalid mobile number")
      .required("Please enter valid mobile number"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Required"),
    profileImage: Yup.mixed().test("fileType", "Invalid file type", (value) =>
      ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
    ),
    gender: Yup.string()
      .oneOf(["Male", "Female", "Other"])
      .required("Required"),
  });

  const signUpFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      profileImage: "",
      gender: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: async (values) => {
      console.log({ values });
      const res = await signUpService(values)
        .then((signUp) => {
          console.log({ signUp });
          // logInNavigate('/')
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(res);
    },
  });

  return (
    <>
      <SignUpArea>
        <Name className="justify-center flex items-center flex-col">
          <BsFillDatabaseFill style={IconStyle} />
          <UserHead>User Sign Up</UserHead>
        </Name>
        <form onSubmit={signUpFormik.handleSubmit} autoComplete="off">
          <Input
            type="text"
            name="name"
            onChange={signUpFormik.handleChange}
            value={signUpFormik.values.name}
            placeholder="Your name"
            invalid={signUpFormik.errors.name ? true : false}
          />
          <div
            className="text-red-600 flex item-start text-xs"
            invalid={signUpFormik.errors.name}
          >
            {signUpFormik.errors.name}
          </div>
          <Input
            type="email"
            name="email"
            onChange={signUpFormik.handleChange}
            value={signUpFormik.values.email}
            placeholder="Email address"
            invalid={signUpFormik.errors.email ? true : false}
          />
          <div
            className="text-red-600 flex item-start text-xs"
            invalid={signUpFormik.errors.email}
          >
            {signUpFormik.errors.email}
          </div>
          <Input
            type="phone"
            name="phone"
            value={signUpFormik.values.phone}
            onChange={signUpFormik.handleChange}
            placeholder="Phone number"
            invalid={signUpFormik.errors.phone}
          />
          <div
            className="text-red-600 flex item-start text-xs"
            invalid={signUpFormik.errors.phone}
          >
            {signUpFormik.errors.phone}
          </div>
          <Input
            type="password"
            name="password"
            value={signUpFormik.values.password}
            onChange={signUpFormik.handleChange}
            placeholder="Password"
            invalid={signUpFormik.errors.password}
          />
          <div
            className="text-red-600 flex item-start text-xs"
            invalid={signUpFormik.errors.password}
          >
            {signUpFormik.errors.password}
          </div>
          <Input
            type="file"
            name="profileImage"
            value={signUpFormik.values.profileImage}
            onChange={signUpFormik.handleChange}
            placeholder="Upload Your Profile"
            invalid={signUpFormik.errors.profileImage}
          />
          <div
            className="text-red-600 flex item-start text-xs"
            invalid={signUpFormik.errors.profileImage}
          >
            {signUpFormik.errors.profileImage}
          </div>

          <Select
            onChange={signUpFormik.handleChange}
            name="gender"
            value={signUpFormik.values.gender}
            invalid={signUpFormik.errors.gender}
          >
            <Option value="">Please Select Gender</Option>
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
            <Option value="Other">Other</Option>
          </Select>
          <div
            className="text-red-600 flex item-start text-xs"
            invalid={signUpFormik.errors.gender}
          >
            {signUpFormik.errors.gender}
          </div>
          <ForgotArea>
            <LoginBtn>
              <Para>
                <div>Already have an account?: </div>
                <div className="cursor-pointer" onClick={loginHandler}>
                  Login
                </div>
              </Para>
            </LoginBtn>
          </ForgotArea>
          <Button type="submit">Sign Up</Button>
        </form>
      </SignUpArea>
    </>
  );
};
export default SignUp;
