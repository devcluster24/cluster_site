import { deleteUser, getUsers, updateUser } from "@/services/Users";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

// get all
export const useGetUsers = () => {
  return useQuery({
    queryKey: ["GET_USERS"],
    queryFn: async () => await getUsers(),
    refetchOnWindowFocus: false,
  });
};

// update suer
export const useUserUpdate = () => {
  const queryClient = useQueryClient();
  return (
    useMutation < any,
    Error,
    any >
      {
        mutationKey: ["USER_UPDATE"],
        mutationFn: async ({ id, data }) => await updateUser(id, data),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["GET_USERS"] });
          Swal.fire("Update Success ", "User update successfully.", "success");
        },
        onError: (error) => {
          Swal.fire("Error", error.message.replace("AxiosError:", ""), "error");
        },
      }
  );
};

// delete user
export const useUserDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["USER_DELETE"],
    mutationFn: async (id) => await deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_USERS"] });
      Swal.fire("Deleted ", "User Deleted successfully.", "success");
    },
    onError: (error) => {
      Swal.fire("Error", error.message.replace("AxiosError:", ""), "error");
    },
  });
};
