// Eyebrow.jsx — Eyebrow component

function Eyebrow({ children, className = '' }) {
  return <div className={`eyebrow ${className}`.trim()}>{children}</div>;
}

export default Eyebrow;