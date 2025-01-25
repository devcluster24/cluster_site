"use client";
import Cookies from "js-cookie";

export const getTokenFormCookie = (tokenName) => {
  return Cookies.get(tokenName);
};
