import HomeNav from "@/components/homeNav/HomeNav";
import HomeStarter from "@/components/homeStarter/HomeStarter";
import OurMission from "@/components/ourMission/OurMission";
import Testimonials from "@/components/testimonials/Testimonials";
import WhatWeOffer from "@/components/whatWeOffer/WhatWeOffer";

export default function Home() {
  return (
    <main>
      <HomeStarter />

      <section>
        <HomeNav />
      </section>

      <section className="collapsePadding" style={{ backgroundColor: "rgb(var(--color3))" }}>
        <OurMission />
      </section>

      <section className="collapsePadding" style={{ justifyItems: "center", paddingBlock: "var(--paddingR) !important" }}>
        <h1>What We Offer</h1>

        <p style={{ margin: "var(--marginS) var(--marginR)" }}>Exceptional care is our mandate and our passion.  Our facilities, our staff and our services are all designed for the safety, comfort and wellbeing of our residents.  Our services aim to promote a contented state of senior living, relaxed yet vibrant, easing through the retirement age and having some fun along the way.</p>

        <WhatWeOffer />
      </section>

      <section style={{ backgroundColor: "rgb(var(--color2))" }}>
        <Testimonials />
      </section>
    </main>
  );
}
