import Header from "./components/layout/Header";
import Body from "./components/Body/Body";
import ReactDOM  from "react-dom/client";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ShimmirUI from "./components/utils/ShimmirUI";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
const root = ReactDOM.createRoot(document.getElementById('root'))
import {lazy, Suspense} from "react";
const Help = lazy(() => import ("./components/Help"));
const About = lazy(() => import ("./components/About"));


const AppLayout = () => {
    return(
        <>
        <Header/>
        <Outlet />
        <Footer />
        </>
    )
}
const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      errorElement:< Error/>,
      children:[
        {
        path:"/about",
        element:<Suspense fallback={<ShimmirUI />}><About /></Suspense>, 
        },
        {
        path:"/help",
        element:<Suspense fallback={<ShimmirUI />}><Help /></Suspense>,
        },
        {
        path:"/",
        element:<Body />,
        },
        {
        path:"/cart",
        element:<Cart />,
        },
        {
        path:"/restaurant/:id",
        element:<RestaurantMenu />,
        }
      ],
},])
root.render(<RouterProvider router={appRouter}/>)