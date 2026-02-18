import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

const projectImages = [project1, project2, project3, project4, project5];

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <StarField />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <BentoGrid images={projectImages} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
