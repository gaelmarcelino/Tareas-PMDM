
const ROTULO_ACCESIBILIDAD = {
  adaptada: "Adaptada",
  practicable: "Practicable",
  sin_adaptar: "Sin adaptar",
};

function Specs({ dwelling }) {
  const superficie =
    dwelling.superficie != null
      ? `${dwelling.superficie} m²`
      : "Superficie sin datos";

  const planta =
    dwelling.planta != null
      ? `Planta ${dwelling.planta}`
      : "Planta sin datos";

  const accesibilidad =
    dwelling.accesibilidad == null
      ? "Sin datos"
      : ROTULO_ACCESIBILIDAD[dwelling.accesibilidad] ||
        dwelling.accesibilidad;

  return (
    <>
      <p>
        {dwelling.tipologia || "Tipología sin datos"} · {superficie} ·{" "}
        {planta}
        {dwelling.ascensor === false ? " · Sin ascensor" : ""}
      </p>

      <p>Accesibilidad: {accesibilidad}</p>
    </>
  );
}

export default Specs;
