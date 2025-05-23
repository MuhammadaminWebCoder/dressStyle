import { JSX } from 'react';
import { RouteItem } from '../hooks/getRoute'
import {Route, Routes} from 'react-router-dom'
export interface RouteItem {
  id: number;
  path: string;
  element: JSX.Element;
}
const GlobalRoutes = () => {
  return (
    <Routes>
      {RouteItem.map((item:RouteItem) =>  <Route key={item.id} path={item.path} element={item.element} />)}
    </Routes>
  )
}

export default GlobalRoutes
