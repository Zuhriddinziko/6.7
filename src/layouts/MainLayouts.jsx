import { Outlet } from "react-router-dom";
import { ColorContainer, Footer, Navbar } from "../components";

function MainLayouts() {
  return (
    <div className="justify-between ">
      <Navbar />
      <ColorContainer />
      <main className="aline-element w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayouts;
