import Cookies from "universal-cookie";

export const saveTokens = (user) => {
  const cookies = new Cookies();
  const session = user?.data?.accessToken;
  if (session) {
    const options = {
      sameSite: "strict",
    };
    cookies.set("authToken", session, options);
  } else {
    return Promise.reject("Error in getting User Session");
  }
};

export const purgeTokens = () => {
  const cookies = new Cookies();
  cookies.remove("authToken");
};
