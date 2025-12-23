import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import CoursesSection from "@/components/CoursesSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AdvantagesSection />
        <CoursesSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
