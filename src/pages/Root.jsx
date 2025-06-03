import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet} from "react-router-dom";

const Root = () => {
    return (
        <>
            <Header name="Event Planner"/>
                <main>
                    <Outlet/>
                </main>
            <Footer/>
        </>
    )
}

export default Root;
