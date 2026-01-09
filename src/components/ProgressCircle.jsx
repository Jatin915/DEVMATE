import React from "react";

const ProgressCircle = ({ progress }) => {
  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full" viewBox="0 0 36 36">
        {/* Background Track */}
        <path
          strokeWidth="3"
          fill="none"
          d="
            M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831
          "
          style={{
            stroke: "var(--dm-border-strong)",
          }}
        />

        {/* Progress Indicator */}
        <path
          strokeWidth="3"
          strokeDasharray={`${progress}, 100`}
          strokeLinecap="round"
          fill="none"
          d="
            M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831
          "
          style={{
            stroke: "var(--dm-accent)",
            transition: "stroke-dasharray 0.6s ease",
          }}
        />
      </svg>

      {/* Center Percentage */}
      <div
        className="absolute inset-0 flex items-center justify-center text-xl font-bold"
        style={{ color: "var(--dm-text-primary)" }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressCircle;