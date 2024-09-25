import Footer from "./footer";
import Navbar from "./navbar";
import SideBar from "./sidebar";
import BuildMap from "./map";

const Homepage = () => {

  return (
    <div>
      <Navbar />
      <section >
        <div>
          <div>
            <BuildMap />
          </div>
          <div>
            
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
