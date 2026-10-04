import React from "react";

interface BrandLogoProps {
  variant?: "horizontal" | "symbol";
  className?: string;
  height?: number;
  light?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "horizontal",
  className = "",
  height = 40,
  light = false,
}) => {
  if (variant === "symbol") {
    return (
      <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
        <img
          src="/samwade-symbol.png"
          alt="SamwadeStore"
          className="w-auto object-contain select-none"
          style={{ height: `${height}px` }}
          loading="eager"
        />
      </div>
    );
  }

  // Horizontal lockup: real SamwadeStore logo
  return (
    <div className={`inline-flex items-center gap-2.5 shrink-0 select-none ${className}`}>
      <img
        src="/samwade-horizontal.png"
        alt="SamwadeStore"
        className={`w-auto object-contain transition-transform ${
          light ? "brightness-0 invert drop-shadow-sm" : ""
        }`}
        style={{ height: `${height}px` }}
        loading="eager"
      />
    </div>
  );
};
