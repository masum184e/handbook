export default function Callout({ type = "info", icon, children }) {
  return (
    <div className={`alert alert--${type}`}>
      {icon && <strong style={{ marginRight: 8 }}>{icon}</strong>}
      {children}
    </div>
  );
}
