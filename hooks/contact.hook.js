import { TContact } from "@/schemas";
import {
  createContact,
  deleteContact,
  getContacts,
  getSingleContact,
  updateContact,
} from "@/services/Contacts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

// get all
export const useGetContacts = () => {
  return useQuery({
    queryKey: ["GET_CONTACTS"],
    queryFn: async () => await getContacts(),
    refetchOnWindowFocus: false,
  });
};

// create
export const useCreateContactMutation = () => {
  const queryClient = useQueryClient();
  return (
    useMutation < any,
    Error,
    TContact >
      {
        mutationKey: ["CREATE_CONTACT"],
        mutationFn: async (postData) => await createContact(postData),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["GET_CONTACTS"] });
          Swal.fire(
            "Submited Successfully",
            "Your Submited Successfully.",
            "success"
          );
        },
        onError: (error) => {
          Swal.fire("Error", error.message.replace("AxiosError:", ""), "error");
        },
      }
  );
};

// view
export const useGetContactDetails = (id) => {
  return useQuery({
    queryKey: ["GET_CONTACT_DETAILS", id],
    queryFn: async () => await getSingleContact(id),
    refetchOnWindowFocus: false,
  });
};

// update
export const useUpdateContactMutation = () => {
  const queryClient = useQueryClient();
  return (
    useMutation < any,
    Error,
    any >
      {
        mutationKey: ["UPDATE_CONTACT"],
        mutationFn: async ({ id, data }) => await updateContact(id, data),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["GET_CONTACTS"] });
          Swal.fire(
            "Contact Updated",
            "Contact Updated successfully.",
            "success"
          );
        },
        onError: (error) =>
          Swal.fire("Error", error.message.replace("AxiosError:", ""), "error"),
      }
  );
};

// delete
export const useDeleteContactMutation = () => {
  const queryClient = useQueryClient();
  return (
    useMutation < any,
    Error,
    string >
      {
        mutationKey: ["DELETE_CONTACT"],
        mutationFn: async (id) => await deleteContact(id),
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["GET_CONTACTS"] });
          Swal.fire(
            "Contact Deleted",
            "Contact deleted successfully.",
            "success"
          );
        },
        onError: (error) =>
          Swal.fire("Error", error.message.replace("AxiosError:", ""), "error"),
      }
  );
};
