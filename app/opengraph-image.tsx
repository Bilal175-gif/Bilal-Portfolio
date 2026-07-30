import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/site";

export const alt =
  "Muhammad Bilal — Generative AI Engineer portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#070B10",
          color: "#F4F7F8",
          fontFamily: "Arial, sans-serif",
          padding: "72px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "720px",
            height: "720px",
            top: "-290px",
            right: "-170px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(105,231,216,0.22), rgba(105,231,216,0.04) 45%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "28px",
            border: "1px solid rgba(105,231,216,0.22)",
            borderRadius: "28px",
          }}
        />
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              color: "#69E7D8",
              fontSize: "20px",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                display: "flex",
                width: "12px",
                height: "12px",
                borderRadius: "99px",
                background: "#69E7D8",
              }}
            />
            Developer portfolio
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                maxWidth: "900px",
                fontSize: "76px",
                fontWeight: 700,
                letterSpacing: "-4px",
                lineHeight: 1,
              }}
            >
              {siteConfig.name}
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: "900px",
                marginTop: "24px",
                color: "#9DA8B3",
                fontSize: "32px",
                lineHeight: 1.3,
              }}
            >
              Generative AI Engineer focused on LLM applications, retrieval,
              and full-stack AI products.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#9DA8B3",
              fontSize: "20px",
            }}
          >
            <span>{siteConfig.profile.location}</span>
            <span style={{ color: "#69E7D8" }}>React · Next.js · TypeScript</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
