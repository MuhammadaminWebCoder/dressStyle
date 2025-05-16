import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../store/categoryApi/aCategoryService";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};
