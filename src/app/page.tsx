import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
const Model = dynamic(() => import("@/components/Model"));
const Highlights = dynamic(() => import("@/components/Highlights"));
const Features = dynamic(() => import("@/components/Features"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const Footer = dynamic(() => import("@/components/Footer"));

const Home = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Home;
