import { ImageResponse } from "next/og";
import { business } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#101a26",
          color: "#f7f2e9",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 14, height: 14, background: "#b4652f", borderRadius: 9999 }} />
          <span style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase", color: "#e4c9a8" }}>
            {business.shortName}
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 62, fontWeight: 600, marginTop: 32, maxWidth: 900, lineHeight: 1.15 }}>
          {business.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 28, marginTop: 32, color: "#b7c0cc" }}>
          {business.addressShort} · {business.phone}
        </div>
      </div>
    ),
    { ...size }
  );
}
