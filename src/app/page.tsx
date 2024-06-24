import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
const Model = dynamic(() => import("@/components/Model"));
const Highlights = dynamic(() => import("@/components/Highlights"));

const Home = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
};

export default Home;
