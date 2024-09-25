import Footer from "./footer";
import Navbar from "./navbar";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <section className="text-gray-800 mt-12">
        <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 block p-6 bg-white border border-gray-200 rounded-lg shadow-sm :bg-gray-100">
          <div className="max-w-xl">
            <h2 className="text-xl font-bold sm:text-2xl">
              Projet Workshop session B3 2024-2025
            </h2>
          </div>

          <div className="mt-8 md:mt-16">
            <p className="mt-1 text-sm text-gray-500">
              EPSI Bordeaux - L'école d'informatique de référence Fondée en
              1961, l’EPSI Bordeaux est une école pionnière dans l’enseignement
              des métiers du numérique. Située au cœur d’un hub technologique
              dynamique, elle forme des experts dans des domaines clés tels que
              le développement logiciel, la cybersécurité, le cloud, le big data
              et l’intelligence artificielle. Avec des diplômes reconnus de
              Bac+3 à Bac+5, l'école offre des formations en alternance et
              stages, permettant une forte employabilité : 93% des diplômés
              trouvent un emploi en moins de 6 mois.
              <br />
              L’approche pédagogique, axée sur des projets concrets et des
              hackathons, est renforcée par une vie associative riche et des
              liens étroits avec l’écosystème tech bordelais.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MainPage;
