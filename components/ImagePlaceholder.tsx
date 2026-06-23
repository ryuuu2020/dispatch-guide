interface ImagePlaceholderProps {
  name: string;
  color?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function ImagePlaceholder({ name, color = "#FF4500", size = "md", className = "" }: ImagePlaceholderProps) {
  const initials = name
    .split(/[\s-]+/)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const sizeClasses = {
    sm: "w-16 h-16 text-lg",
    md: "w-24 h-24 text-2xl",
    lg: "w-40 h-40 text-4xl",
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-2xl flex items-center justify-center font-heading shrink-0 ${className}`}
      style={{
        background: `linear-gradient(135deg, ${color}22, ${color}44, ${color}18)`,
        border: `2px solid ${color}33`,
      }}
      aria-label={name}
      role="img"
    >
      <span style={{ color }}>{initials}</span>
    </div>
  );
}
