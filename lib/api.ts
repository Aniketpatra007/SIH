import api from "./axios";

export const signup = async (data: {
  email: string;
  password: string;
  schoolName: string;
}) => {
  const res = await api.post("/auth/studentSignup", data);
  return res.data;
};

export const login = async (data: {
  email: string;
  password: string;
}) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};


