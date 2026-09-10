import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "H.T. Harris — family Italian delicatessen, Fitzrovia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  let src = "";
  try {
    const photo = await fetch(
      "https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=1600&q=75",
    );
    if (photo.ok) {
      const buffer = await photo.arrayBuffer();
      src = `data:image/jpeg;base64,${Buffer.from(buffer).toString("base64")}`;
    }
  } catch {
    src = "";
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#1b120c",
        }}
      >
        {src ? (
          // ImageResponse requires a raw img element
          <img
            src={src}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : null}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(27,18,12,0.92) 0%, rgba(27,18,12,0.55) 55%, rgba(27,18,12,0.25) 100%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "72px",
            color: "#f3ead8",
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#c6a66c",
              marginBottom: 16,
            }}
          >
            Fitzrovia · London
          </div>
          <div style={{ fontSize: 92, fontFamily: "Georgia, serif", lineHeight: 0.9 }}>
            H.T. Harris
          </div>
          <div style={{ fontSize: 28, marginTop: 20, fontStyle: "italic", maxWidth: 720 }}>
            Family Italian delicatessen · Great Titchfield Street
          </div>
        </div>
      </div>
    ),
    size,
  );
}
