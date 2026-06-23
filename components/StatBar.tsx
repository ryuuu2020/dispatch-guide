interface StatBarProps {
  label: string;
  value: number; // 1-5
  max?: number;
  color?: string;
  animated?: boolean;
}

export default function StatBar({ label, value, max = 5, color = "#6366f1", animated = false }: StatBarProps) {
  const pct = (value / max) * 100;
  const stars = "★".repeat(value) + "☆".repeat(max - value);

  return (
    <div className="flex items-center gap-3">
      <span className="w-20 text-sm text-text-secondary shrink-0">{label}</span>
      <div className="flex-1 h-2.5 bg-bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full rounded-full stat-bar-fill"
          style={{
            width: animated ? `${pct}%` : "0%",
            backgroundColor: color,
            animationDelay: "0.2s",
          }}
        />
      </div>
      <span className="text-sm font-mono text-text-primary w-14 text-right shrink-0" style={{ color }}>
        {stars}
      </span>
    </div>
  );
}
