
function Card({ children, className = "" }) {
  return (
    <article className={`tarjeta ${className}`}>
      {children}
    </article>
  );
}

export default Card;

