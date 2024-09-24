import Footer from "./footer";
import Navbar from "./navbar";
import SideBar from "./sidebar";
import BuildMap from "./map";

const Homepage = () => {

  return (
    <div>
      <Navbar />
      <section className="h-auto">
        <div className="flex h-auto">
          <div className ="flex-grow leaflet-container">
            <BuildMap />
          </div>
          <div className="w-32 sm:w-64">
            <SideBar />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
