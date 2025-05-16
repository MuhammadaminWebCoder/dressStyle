import { lazy, Suspense } from "react"
import Loading from "./components/Loading"

function App() {
  const UseFutureLazy = lazy(() => import("./futures"))
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <UseFutureLazy/>
      </Suspense>
    </>
  )
}
export default App
