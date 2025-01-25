import { TMyProfile } from "@/schemas";
import { getMyProfile, updateMyProfile } from "@/services/MyProfile";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

// get
export const useGetMyProfile = () => {
  return useQuery({
    queryKey: ["GET_MY_PROFILE"],
    queryFn: async () => await getMyProfile(),
    refetchOnWindowFocus: false,
  });
};

// update
export const useUpdateMyProfileMutation = () => {
  const queryClient = useQueryClient();
  return (
    useMutation < any,
    Error,
    TMyProfile >
      {
        mutationKey: ["UPDATE_MY_PROFILE"],
        mutationFn: async (postData) => await updateMyProfile(postData),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["GET_MY_PROFILE"] });
          Swal.fire(
            "Profile Created",
            "Profile created successfully.",
            "success"
          );
        },
        onError: (error) => {
          Swal.fire("Error", error.message.replace("AxiosError:", ""), "error");
        },
      }
  );
};
