
import DwellingCard from "./DwellingCard";

function DwellingList({ dwellings }) {
  if (dwellings.length === 0) {
    return <p>No hay viviendas para mostrar.</p>;
  }

  return (
    <section className="dwelling-list">
      {dwellings.map((dwelling) => (
        <DwellingCard
          key={dwelling.id}
          dwelling={dwelling}
          variante="lista"
        />
      ))}
    </section>
  );
}

export default DwellingList;

