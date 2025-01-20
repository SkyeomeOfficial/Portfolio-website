import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/ScrollToTop";

import Homescreen from "@/pages/homescreen";
import Passion from "@/pages/passion";
import Works from "@/pages/works";
import Contact from "@/pages/contact";
import About from "@/pages/about";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <Homescreen />
        <Passion />
        <Works />
        <Contact />
        <About />
      </div>
      <ScrollToTop />
    </div>
  );
}
