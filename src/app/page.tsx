import Hero         from "@/components/sections/Hero";
import Marquee      from "@/components/sections/Marquee";
import Work         from "@/components/sections/Work";
import Approach     from "@/components/sections/Approach";
import Capabilities from "@/components/sections/Capabilities";
import Pricing      from "@/components/sections/Pricing";
import Faq          from "@/components/sections/Faq";
import About        from "@/components/sections/About";
import Promise      from "@/components/sections/Promise";
import Contact      from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Marquee />
      <Work />
      <Approach />
      <Capabilities />
      <Pricing />
      <Faq />
      <About />
      <Promise />
      <Contact />
    </main>
  );
}
