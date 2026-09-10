type TricolorProps = {
  orientation?: "horizontal" | "vertical";
  className?: string;
};

export function Tricolor({
  orientation = "horizontal",
  className = "",
}: TricolorProps) {
  const dir = orientation === "vertical" ? "flex-col" : "flex-row";
  return (
    <span
      aria-hidden="true"
      className={`inline-flex overflow-hidden ${dir} ${className}`}
    >
      <span className="flex-1 bg-italy-green" />
      <span className="flex-1 bg-italy-white" />
      <span className="flex-1 bg-italy-red" />
    </span>
  );
}

export function TricolorFlag({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-3 w-[18px] overflow-hidden border border-brass/40 shadow-[0_0_0_1px_rgba(27,18,12,0.35)] ${className}`}
      title="Italia"
      aria-hidden="true"
    >
      <span className="w-1/3 bg-italy-green" />
      <span className="w-1/3 bg-italy-white" />
      <span className="w-1/3 bg-italy-red" />
    </span>
  );
}
