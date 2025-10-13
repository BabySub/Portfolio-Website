import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactForm from "@/components/contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WorkSection />
      <ExperienceSection />
      <EducationSection />
      <ContactForm/>
    </div>
  );
};

export default Index;
