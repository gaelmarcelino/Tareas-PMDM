
function Rent({ dwelling }) {
  const renta =
    dwelling.renta != null
      ? `${dwelling.renta.toLocaleString("es-ES")} €/mes`
      : "Renta sin datos";

  return <p>{renta}</p>;
}

export default Rent;
