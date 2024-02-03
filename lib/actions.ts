import axios from "axios";
import { cookies } from "next/headers";

export type UserResponse = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  forgotPasswordToken: string | null;
  forgotPasswordTokenExpiry: Date | null;
  forgotPasswordRetries: number;
  companySelected: string | null;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
export type User = {
  id: string;
  name: string;
  email: string;
  token: string;
};

export interface SuccessResponse {
  data: {
    token: string;
    user: UserResponse;
  };
  statusCode: 200; // Explicitly define the expected success code
}
export interface ErrorResponse {
  message: string;
  error: string;
  statusCode: number;
}

export type AuthResponse = SuccessResponse | ErrorResponse;

export const authenticateUser = async (
  email: string,
  password: string
): Promise<User> => {
  try {
    const response = await axios.post<SuccessResponse>(
      `${process.env.API_URL}/auth/login`,
      { email, password },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log("authenticateUser  invoked");
    // if (response && response.data && response.data.data) {
    //* Set cookie
    // const nextDay = new Date(Date.now());
    // nextDay.setDate(Date.now() + 1);

    // const session = {
    //   userId: response.data.data.user._id,
    //   accessToken: response.data.data.token, // Example token generation

    //   expires: nextDay,
    // };
    // res.cookie("sessionId", session.id, {
    //   httpOnly: true, // Prevent client-side access
    //   secure: process.env.NODE_ENV === "production", // Secure for HTTPS
    //   sameSite: "lax", // Mitigate CSRF attacks
    //   path: "/", // Make cookie accessible across paths
    //   expires: session.expires, // Set expiration
    // });
    // console.log(response.data);

    const user: User = {
      id: response.data.data.user._id,
      name: `${response.data.data.user.firstName} ${response.data.data.user.lastName}`,
      email: response.data.data.user.email,
      token: response.data.data.token,
    };
    return user;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("An error occurred while sending the request.");
  }
};
