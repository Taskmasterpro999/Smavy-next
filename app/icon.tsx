import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #102877 0%, #0b1f61 64%, #05b4bb 100%)",
          borderRadius: "16px",
          color: "white",
          display: "flex",
          fontSize: 38,
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
            border: "1px solid rgba(255,255,255,0.32)",
            borderRadius: "14px",
            inset: 6,
            position: "absolute",
          }}
        />
        <div
          style={{
            background: "#f98925",
            borderRadius: 999,
            height: 9,
            left: 12,
            position: "absolute",
            top: 12,
            width: 9,
          }}
        />
        <span style={{ position: "relative", textShadow: "0 8px 18px rgba(0,0,0,0.24)" }}>S</span>
      </div>
    ),
    size
  );
}
