import  { useRoutes } from 'react-router-dom'
import RenderHome from '../pages/Main/Main'
import { Login } from '../pages/Login/Login'
import GalleryCategory from '../pages/Gallery/GalleryCategory'
import Gallery from '../pages/Gallery/Gallery'
import { PageNotFound } from './PageNotFound/PageNotFound'

export const RouteConfig = () => {
  let routes = useRoutes([
    {path:"/", element: <RenderHome/>},
    {path:"/login", element: <Login/>},
    {path:"/gallery", element: <GalleryCategory/>},
    {path:"/gallery/:id/:title", element: <Gallery/>},
    {path:"*", element: <PageNotFound/>}
  ])

  return routes;
}
