type Bar = { x: number; w: number; h: number; cut: "l" | "r" | "none"; fill: string; delay: number };

/** Vertical forms drawn from the skyline strokes of the Cynergy mark, in the logo's blue, gold and slate. */
const bars: Bar[] = [
  { x: 10, w: 56, h: 210, cut: "l", fill: "#b8996a", delay: 0 },
  { x: 80, w: 70, h: 330, cut: "r", fill: "#3b78ab", delay: 120 },
  { x: 164, w: 64, h: 440, cut: "l", fill: "#b8996a", delay: 240 },
  { x: 242, w: 22, h: 360, cut: "none", fill: "#8d909a", delay: 330 },
  { x: 278, w: 22, h: 290, cut: "none", fill: "#8d909a", delay: 400 },
  { x: 314, w: 78, h: 250, cut: "r", fill: "#1f4e79", delay: 300 },
  { x: 406, w: 58, h: 170, cut: "l", fill: "#6b6d76", delay: 450 },
];

const BASE = 500;

function points({ x, w, h, cut }: Bar): string {
  const top = BASE - h;
  const c = Math.min(w * 0.7, 46);
  if (cut === "l") return `${x},${BASE} ${x},${top + c} ${x + w},${top} ${x + w},${BASE}`;
  if (cut === "r") return `${x},${BASE} ${x},${top} ${x + w},${top + c} ${x + w},${BASE}`;
  return `${x},${BASE} ${x},${top} ${x + w},${top} ${x + w},${BASE}`;
}

export function Skyline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 474 500" role="presentation" aria-hidden className={className} preserveAspectRatio="xMaxYMax meet">
      {bars.map((b) => (
        <polygon key={b.x} className="skyline-bar" points={points(b)} fill={b.fill} style={{ animationDelay: `${b.delay}ms` }} />
      ))}
      <rect x="0" y={BASE} width="474" height="2" fill="#b8996a" opacity="0.6" />
    </svg>
  );
}
