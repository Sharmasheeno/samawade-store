import React from "react";

interface BrandLogoProps {
  variant?: "horizontal" | "symbol";
  className?: string;
  imgClassName?: string;
  height?: number;
  light?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "horizontal",
  className = "",
  imgClassName = "",
  height,
  light = false,
}) => {
  const inlineStyle = height ? { height: `${height}px` } : undefined;

  if (variant === "symbol") {
    return (
      <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
        <img
          src="/samwade-symbol.png"
          alt="SamwadeStore"
          className={`w-auto object-contain select-none ${imgClassName}`}
          style={inlineStyle}
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
        } ${imgClassName}`}
        style={inlineStyle}
        loading="eager"
      />
    </div>
  );
};
