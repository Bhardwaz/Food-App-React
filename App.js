import Header from "./components/layout/Header";
import Body from "./components/Body/Body";
import ReactDOM  from "react-dom/client";
import Footer from "./components/Footer";
import Help from "./components/Help";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
const root = ReactDOM.createRoot(document.getElementById('root'))

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
        element:<About />, 
        },
        {
        path:"/help",
        element:<Help />,
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