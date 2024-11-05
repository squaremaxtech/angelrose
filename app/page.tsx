import Image from "next/image";
import ladiesHug from "@/public/ladiesHug.webp"

export default function Home() {
  return (
    <main style={{ minHeight: "5000vh", zIndex: 0 }}>
      <div style={{ position: "relative", height: "120dvh", display: "grid", alignItems: "flex-end" }}>
        <Image alt={"home image ladies hugging"} src={ladiesHug} fill={true} style={{ objectFit: "cover" }} />

        <div style={{ position: "relative", zIndex: 1, display: "grid", justifyItems: "center", alignContent: "flex-start", backgroundColor: "rgba(var(--shade5), .5)", padding: "var(--paddingM) var(--paddingR)" }}>
          <p className="extraLargeText" style={{ color: "rgb(var(--color1))" }}>Angel Rose Adult Care</p>

          <h2 style={{ color: "rgb(var(--color4))" }}>Caring is not just what we do.  Its who we <span style={{ color: "rgb(var(--color2))" }}>ARE.</span></h2>
        </div>
      </div>

    </main>
  );
}
