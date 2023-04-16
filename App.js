import Header from "./components/layout/Header";
import Body from "./components/Body/Body";
import ReactDOM  from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'))

const AppLayout = () => {
    return(
        <>
        <Header/>
        <Body />
        </>
    )
}
root.render(<AppLayout/>)