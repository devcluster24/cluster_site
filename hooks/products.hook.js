import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import {
  createProduct,
  deleteProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
} from "../services/Products";
import Swal from "sweetalert2";

// Get all products
export const useGetProducts = () => {
  return useQuery({
    queryKey: ["GET_PRODUCTS"],
    queryFn: async () => await getProducts(),
    refetchOnWindowFocus: false,
  });
};

// Create product
export const useCreateProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
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

// Get product details
export const useGetProductDetails = (id) => {
  return useQuery({
    queryKey: ["GET_PRODUCT_DETAILS", id],
    queryFn: async () => await getSingleProduct(id),
    refetchOnWindowFocus: false,
  });
};

// Update product
export const useUpdateProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["UPDATE_PRODUCT"],
    mutationFn: async ({ id, data }) => await updateProduct(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_PRODUCTS"] });
      Swal.fire("Product Updated", "Product updated successfully.", "success");
    },
    onError: (error) => {
      Swal.fire("Error", error.message.replace("AxiosError:", ""), "error");
    },
  });
};

// Delete product
export const useDeleteProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["DELETE_PRODUCT"],
    mutationFn: async (id) => await deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_PRODUCTS"] });
      Swal.fire("Product Deleted", "Product deleted successfully.", "success");
    },
    onError: (error) => {
      Swal.fire("Error", error.message.replace("AxiosError:", ""), "error");
    },
  });
};
