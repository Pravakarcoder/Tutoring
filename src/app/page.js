import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Stats />
      <Services />

      <Testimonial />
    </>
  );
}
