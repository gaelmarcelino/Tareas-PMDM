
function DwellingCard({ dwelling }) {
  const estado = dwelling.adjudicada
    ? "Adjudicada"
    : "Disponible";

  const ubicacion =
    dwelling.municipio === dwelling.provincia
      ? dwelling.municipio
      : `${dwelling.municipio || "Municipio sin datos"}, ${
          dwelling.provincia || "provincia sin datos"
        }`;

  const superficie =
    dwelling.superficie != null
      ? `${dwelling.superficie} m²`
      : "Superficie sin datos";

  const planta =
    dwelling.planta != null
      ? `Planta ${dwelling.planta}`
      : "Planta sin datos";

  const accesibilidad = {
    adaptada: "Adaptada",
    practicable: "Practicable",
    sin_adaptar: "Sin adaptar",
  };

  const renta =
    dwelling.renta != null
      ? `${dwelling.renta.toLocaleString("es-ES")} €/mes`
      : "Renta sin datos";

  return (
    <article className="dwelling-card">
      <p
        className={`estado ${
          dwelling.adjudicada ? "adjudicada" : "disponible"
        }`}
      >
        {estado}
      </p>

      <h2>{dwelling.referencia || "Referencia sin datos"}</h2>

      <p>{ubicacion}</p>

      <p>
        {dwelling.tipologia || "Tipología sin datos"} · {superficie} ·{" "}
        {planta}
        {dwelling.ascensor === false ? " · Sin ascensor" : ""}
      </p>

      <p>
        Accesibilidad:{" "}
        {dwelling.accesibilidad == null
          ? "Sin datos"
          : accesibilidad[dwelling.accesibilidad] ||
            dwelling.accesibilidad}
      </p>

      <p>{renta}</p>
    </article>
  );
}

export default DwellingCard;

