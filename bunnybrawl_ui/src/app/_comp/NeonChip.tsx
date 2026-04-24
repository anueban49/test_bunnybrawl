// NeonChip.jsx — neon pill badge

function NeonChip({ children, color = 'cyan', style }) {
  return (
    <span className={`neon-chip neon-chip-${color}`} style={style}>
      {children}
    </span>
  );
}

export default NeonChip;
