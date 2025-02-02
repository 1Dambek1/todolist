import { get_category } from "@/api/category";
import { CategoryType } from "@/types/Category";
import { useQuery } from "@tanstack/react-query";

export function useGetCategories() {
  return useQuery<CategoryType[]>({
    queryKey: ["categories"],
    queryFn: get_category,
  })
}