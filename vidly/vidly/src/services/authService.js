import http from "./httpService";
import jwtDecode from "jwt-decode";

const apiEndpoint = "/auth";
const tokenK = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenK, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenK, jwt);
}

export function logout() {
  localStorage.removeItem(tokenK);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenK);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenK);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
