import { instance } from "../hooks/instance";
import { useMutation } from "@tanstack/react-query"

export const useLogin = () => {
  return useMutation({
    mutationFn: async (userData: { username: string; password: string }) => {
    const response = await instance().post("/users", userData)
    return response.data
  }})
}
