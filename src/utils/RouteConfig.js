import  { useRoutes } from 'react-router-dom'
import RenderHome from '../pages/Main/Main'

export const RouteConfig = () => {
  let routes = useRoutes([
    {path:"/", element: <RenderHome/>}
  ])

  return routes
}
