import styled from "@emotion/styled";
import img from "../../images/loginImg.jpg";

export const FormMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  padding: 0;
  box-sizing: border-box;
  margin: 0;
  height: 100vh;
`;
export const LogInImgArea = styled.div`
  display: block;
  background-color: #fc5185;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  width: 50%;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const RightArea = styled.div`
  left: 0;
  bottom: 0;
  top: 0;
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  background: aliceblue;
  flex-direction: column;
  justify-content: center;
`;
export const Button = styled.button`
  background-color: #fc5185;
  min-height: 38px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
`;
export const UserHead = styled.p`
  margin: 0;
  font-weight: bold;
  display: block;
`;

export const Name = styled.div`
  backgound-color: black;
`;
export const LoginArea = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
  box-sizing: border-box;
`;
export const Input = styled.input`
  display: block;
  min-height: 36px;
  margin-top: 8px;
  font-size: 14px;
  padding: 0 8px;
  border-radius: 4px;
  border: 1px solid transparent;
`;
export const ForgotArea = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ButtonSignUp = styled.div`
  display: block;
`;
export const Para = styled.div`
  display: block;
  font-size: 13px;
  color: #2d1d67;
`;
export const SignUpBtn = styled.div`
  display: flex;
  margin: 10px 0;
  justify-content: space-between;
  width: 100%;
`;
export const Option = styled.option`
  display: block;
`;
export const Select = styled.select`
  display: block;
`;
export const SignUpArea = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  background: aliceblue;
  padding: 0 10%;
  box-sizing: border-box;
`;
