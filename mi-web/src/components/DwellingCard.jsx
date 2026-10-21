
import Badge from "./ui/Badge";
import Rent from "./ui/Rent";
import Specs from "./ui/Specs";
import Card from "./ui/Card";

function DwellingCard({ dwelling, variante = "rejilla" }) {
  const estado = dwelling.adjudicada
    ? "Adjudicada"
    : "Disponible";

  const ubicacion =
    dwelling.municipio === dwelling.provincia
      ? dwelling.municipio
      : `${dwelling.municipio || "Municipio sin datos"}, ${
          dwelling.provincia || "provincia sin datos"
        }`;

  return (
    <Card className={`dwelling-card dwelling-card--${variante}`}>
      <Badge
        text={estado}
        variant={dwelling.adjudicada ? "adjudicada" : "disponible"}
      />

      <h2>{dwelling.referencia || "Referencia sin datos"}</h2>

      <p>{ubicacion}</p>

      <Specs dwelling={dwelling} />

      <p>
        {dwelling.dormitorios != null && (
          <span>{dwelling.dormitorios} dormitorios</span>
        )}
      </p>

      <Rent dwelling={dwelling} />
    </Card>
  );
}

export default DwellingCard;



