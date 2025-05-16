import { RouteItem } from '../hooks/getRoute'
import {Route, Routes} from 'react-router-dom'
const GlobalRoutes = () => {
  return (
    <Routes>
      {RouteItem.map((item:any) =>  <Route key={item.id} path={item.path} element={item.element} />)}
    </Routes>
  )
}

export default GlobalRoutes
