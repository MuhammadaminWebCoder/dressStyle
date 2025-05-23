import { useAuthStore } from "../store/authStore";
import { instance } from "../hooks/instance";
import { useMutation } from "@tanstack/react-query"

export const useLogin = () => {
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: async (userData: { username: string; password: string }) => {
    const response = await instance().post("/users", userData)
    return response.data
  },
  onSuccess: (data) => {
    localStorage.setItem("token", data.id);
    setUser(data);
  },
})
}
