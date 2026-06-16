import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "KEF — Clim · Sanitaire · Électricité · Artisan à Perpignan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Image Open Graph générée dynamiquement, aux couleurs de la marque.
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        backgroundColor: "#1C1C1E",
        color: "#F5F5F5",
        fontFamily: "sans-serif",
        backgroundImage:
          "radial-gradient(circle at 85% 12%, rgba(255,106,0,0.28) 0%, rgba(28,28,30,0) 55%)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 120,
            fontWeight: 800,
            letterSpacing: 8,
            lineHeight: 1,
          }}
        >
          <span>K</span>
          <span style={{ color: "#FF6A00" }}>E</span>
          <span>F</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 30,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#B5B5B8",
          }}
        >
          Clim · Sanitaire · Électricité
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 64,
          fontWeight: 700,
          lineHeight: 1.1,
          maxWidth: 900,
        }}
      >
        Un seul artisan pour vos installations, entretiens &amp; dépannages.
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 28px",
            backgroundColor: "#FF6A00",
            color: "#fff",
            borderRadius: 999,
            fontSize: 34,
            fontWeight: 700,
          }}
        >
          ☎ {site.phoneDisplay}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#9A9A9E" }}>
          Rivesaltes · Perpignan &amp; alentours
        </div>
      </div>
    </div>,
    { ...size },
  );
}
