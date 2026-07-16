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
          background: "#0b1a1f",
          color: "#eff3f1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 14, height: 14, background: "#b8863a", borderRadius: 9999 }} />
          <span style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase", color: "#8fd6db" }}>
            {business.shortName}
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 62, fontWeight: 600, marginTop: 32, maxWidth: 900, lineHeight: 1.15 }}>
          {business.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 28, marginTop: 32, color: "#c3cfce" }}>
          {business.addressShort} · {business.phone}
        </div>
      </div>
    ),
    { ...size }
  );
}
