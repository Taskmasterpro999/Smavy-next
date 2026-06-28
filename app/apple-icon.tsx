import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #102877 0%, #0b1f61 62%, #05b4bb 100%)",
          borderRadius: "42px",
          color: "white",
          display: "flex",
          fontSize: 108,
          fontWeight: 900,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-0.04em",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.08))",
            border: "2px solid rgba(255,255,255,0.32)",
            borderRadius: "36px",
            inset: 16,
            position: "absolute",
          }}
        />
        <div
          style={{
            background: "#f98925",
            borderRadius: 999,
            height: 24,
            left: 34,
            position: "absolute",
            top: 34,
            width: 24,
          }}
        />
        <span style={{ position: "relative", textShadow: "0 16px 34px rgba(0,0,0,0.24)" }}>S</span>
      </div>
    ),
    size
  );
}
