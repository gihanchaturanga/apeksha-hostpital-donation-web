import  { useRoutes } from 'react-router-dom'
import RenderHome from '../pages/Main/Main'
import { Login } from '../pages/Login/Login'
import GalleryCategory from '../pages/Gallery/GalleryCategory'
import Gallery from  '../pages/Gallery/Gallery'

export const RouteConfig = () => {
  let routes = useRoutes([
    {path:"/", element: <RenderHome/>},
    {path:"/login", element: <Login/>},
    {path:"/gallery", element: <GalleryCategory/>},
    {path:"/gallery/:id", element: <Gallery/>}
  ])

  return routes;
}
