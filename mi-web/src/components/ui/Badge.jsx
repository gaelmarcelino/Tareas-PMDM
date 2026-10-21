
function Badge({ text, variant }) {
  return (
    <p className={`estado ${variant}`}>
      {text}
    </p>
  );
}

export default Badge;
