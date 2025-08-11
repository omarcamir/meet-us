"use client";

export default function BackgroundGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* First ellipse */}
      <div
        className="absolute w-[667px] h-[667px] bg-[#E477F6] blur-[400px] rounded-full animate-float"
        style={{
          top: "-247px",
          left: "638px",
        }}
      />

      {/* Second ellipse */}
      <div
        className="absolute w-[667px] h-[667px] bg-[#9E77F6] blur-[400px] rounded-full animate-float"
        style={{
          top: "667px",
          left: "1083px",
        }}
      />

      {/* Third ellipse */}
      <div
        className="absolute w-[813px] h-[813px] bg-[#B0D2E5] blur-[800px] opacity-60 rounded-full animate-float"
        style={{
          top: "646px",
          left: "-117px",
        }}
      />

      {/* Fourth ellipse */}
      <div
        className="absolute w-[807px] h-[807px] bg-[#9E77F6] blur-[800px] opacity-60 rounded-full animate-float"
        style={{
          top: "-372px",
          left: "38px",
        }}
      />
    </div>
  );
}
