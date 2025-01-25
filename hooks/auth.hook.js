import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { loginUser, logOutUser, registerUser } from "../services/AuthService";
import Swal from "sweetalert2";

// register hook
export const useUserRegistration = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_USERS"] });
      Swal.fire("Register Success", "User Register successfully.", "success");
    },
    onError: (error) => {
      Swal.fire("Error", error.message.replace("AxiosError:", ""), "error");
    },
  });
};

// login hook
export const useUserLogin = () => {
  return useMutation({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => {
      Swal.fire("Login Success", "User login successfully.", "success");
    },
    onError: (error) => {
      Swal.fire("Error", error.message.replace("AxiosError:", ""), "error");
    },
  });
};

// logout
export const useLogoutUser = () => {
  return useQuery({
    queryKey: ["GET_LOGOUT_USER"],
    queryFn: async () => await logOutUser(),
    refetchOnWindowFocus: false,
  });
};
