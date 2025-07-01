import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import MessageSectioon from "./sections/MessageSectioon";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MessageSectioon />
      <div className="h-dvh border border-red-500" />
    </main>
  );
};

export default App;
