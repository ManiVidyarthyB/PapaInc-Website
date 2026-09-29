// Decorative abstract illustration used in place of stock photography.
// Swap for <Image> with your own photos in /public when ready.
export default function Visual({ variant = 0 }: { variant?: number }) {
  const r = [
    [[70, 30, 120], [300, 90, 70], [180, 260, 95]],
    [[260, 60, 110], [90, 220, 80], [330, 300, 60]],
    [[120, 110, 130], [320, 240, 90], [60, 330, 50]],
  ][variant % 3];
  return (
    <div className="visual" aria-hidden="true">
      <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
        {r.map(([cx, cy, rad], i) => (
          <circle key={i} cx={cx} cy={cy} r={rad} fill="#fff" opacity={0.07 + i * 0.03} />
        ))}
        <g stroke="#fff" strokeOpacity=".35" fill="none" strokeWidth="2">
          <polyline points="40,320 110,260 170,285 240,190 300,215 360,110" />
          <polyline points="40,340 110,300 170,315 240,250 300,265 360,190" strokeOpacity=".18" />
        </g>
        {[[110, 260], [170, 285], [240, 190], [300, 215], [360, 110]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="6" fill="#fff" />
        ))}
      </svg>
    </div>
  );
}
