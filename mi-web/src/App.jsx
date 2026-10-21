import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DwellingList from "./components/DwellingList";
import Footer from "./components/Footer";

function App() {
  const [dwellings, setDwellings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/viviendas")
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudieron cargar las viviendas");
        }
        return response.json();
      })
      
      .then((data) => {
      setDwellings(data.slice(0, 12));
    })

      .catch((error) => {
        console.error("Error al cargar las viviendas:", error);
        setError(
          "No se pudieron cargar las viviendas. Comprueba que la API está funcionando."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      
      <Hero />
      

      <main className="contenedor">
        <h1>Listado de viviendas</h1>

        {loading && <p>Cargando viviendas...</p>}

        {error && <p>{error}</p>}

        {!loading && !error && (
          <DwellingList dwellings={dwellings} />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;




