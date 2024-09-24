import Navbar from "./navbar";
import SideBar from "./sidebar";
import BuildMap from "./map";

const Homepage = () => {

  return (
    <div>
      <Navbar />
      <section className="h-screen">
        <div className="flex h-full">
          <div className ="flex-grow leaflet-container">
            <BuildMap />
          </div>
          <div className="w-64 ">
            <SideBar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
