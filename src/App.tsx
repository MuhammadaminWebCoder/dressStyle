import { lazy, Suspense, useEffect } from "react"
import Loading from "./components/Loading"
import { instance } from "./hooks/instance";
import { useAuthStore } from "./store/authStore";

function App() {
  const UseFutureLazy = lazy(() => import("./futures"))
  const setUser = useAuthStore((state)=> state.setUser)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      instance().get(`/users?id=${token}`).then((res) => {
          if (res.data.length > 0) {
            setUser(res.data[0]);
          }
        });
    }
  }, []);
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <UseFutureLazy/>
      </Suspense>
    </>
  )
}
export default App
