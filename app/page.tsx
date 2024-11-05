import HomeNav from "@/components/homeNav/HomeNav";
import HomeStarter from "@/components/homeStarter/HomeStarter";
import OurMission from "@/components/ourMission/OurMission";

export default function Home() {
  return (
    <main style={{ minHeight: "5000vh", zIndex: 0 }}>
      <HomeStarter />

      <section>
        <HomeNav />
      </section>

      <section className="collapsePadding" style={{ backgroundColor: "rgb(var(--color3))" }}>
        <OurMission />
      </section>
    </main>
  );
}
