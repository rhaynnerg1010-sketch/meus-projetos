import { Outlet } from "react-router";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";



const PortalPublico = () => {
  return (
    <>

    <Header/>

    <main>
        <Outlet/>
    </main>

    <Footer>
    <p></p>
    </Footer>
    </>
  );
};

export default PortalPublico;