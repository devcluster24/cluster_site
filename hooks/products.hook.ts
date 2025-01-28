import {
  createProduct,
  deleteProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
} from "../services/Products";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

// get all
export const useGetProducts = () => {
  return useQuery({
    queryKey: ["GET_PRODUCTS"],
    queryFn: async () => await getProducts(),
    refetchOnWindowFocus: false,
  });
};

// create
export const useCreateProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, any>({
    mutationKey: ["CREATE_PRODUCT"],
    mutationFn: async (postData) => await createProduct(postData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_PRODUCTS"] });
      Swal.fire("Product Created", "Product created successfully.", "success");
    },
    onError: (error) => {
      Swal.fire("Error", error.message.replace("AxiosError:", ""), "error");
    },
  });
};

// get details
export const useGetProductDetails = (id: string) => {
  return useQuery({
    queryKey: ["GET_PRODUCT_DETAILS", id],
    queryFn: async () => await getSingleProduct(id),
    refetchOnWindowFocus: false,
  });
};

// update
export const useUpdateProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, any>({
    mutationKey: ["UPDATE_PRODUCT"],
    mutationFn: async ({ id, data }: any) => await updateProduct(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_PRODUCTS"] });
      Swal.fire("Product Updated", "Product Updated successfully.", "success");
    },
    onError: (error) =>
      Swal.fire("Error", error.message.replace("AxiosError:", ""), "error"),
  });
};

// delete
export const useDeleteProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, number>({
    mutationKey: ["DELETE_PRODUCT"],
    mutationFn: async (id) => await deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_PRODUCTS"] });
      Swal.fire("Product Deleted", "Product deleted successfully.", "success");
    },
    onError: (error) =>
      Swal.fire("Error", error.message.replace("AxiosError:", ""), "error"),
  });
};
