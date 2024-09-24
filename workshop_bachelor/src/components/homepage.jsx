import Navbar from "./navbar";
import SideBar from "./sidebar";

const Homepage = () => {

  return (
    <div>
      <Navbar />
      <section>
        <div className ="bg-slate-300 size-96">
                <buildMap />
        </div>
        <SideBar />
      </section>
    </div>
  );
};

export default Homepage;
