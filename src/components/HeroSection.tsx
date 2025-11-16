import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Instagram, Mail, Download } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import ParticleBackground from "@/components/Effects/ParticleBackground";

const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 md:pt-16 overflow-hidden"
    >
      {/* Particle background */}
      <ParticleBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-4rem)]">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="w-fit text-primary border-primary/30 bg-white/10 backdrop-blur-md shadow-sm"
              >
                🌊👋 Welcome to my portfolio
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold leading-tight">
                <span className="bg-text-gradient bg-clip-text">
                  Subham Subhra Bordoloi
                </span>
                <br />
                <span className="text-foreground">
                  <Typewriter
                    words={[
                      "Web Developer",
                      "UI/UX Enthusiast",
                      "Learner",
                      "Problem Solver",
                    ]}
                    loop={Infinity}
                    cursor
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1800}
                  />
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Hi, I’m Subham, a developer passionate about creating impactful
                digital solutions. I focus on writing clean, efficient code and
                designing experiences that are both modern and intuitive. With a
                strong drive to keep learning and improving, I aim to build
                projects that truly make a difference.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* View Work Button */}
              <Button
                size="lg"
                onClick={scrollToWork}
                className="group bg-primary hover:bg-primary/90 transition-all duration-300"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Resume + Social buttons container */}
              <div className="flex flex-row flex-wrap gap-3 sm:gap-4 mt-2 sm:mt-0">
                {/* Resume Button */}
                <a
                  href="/Subham_Resume.pdf"
                  download="Subham_Resume.pdf"
                  aria-label="Download Resume"
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="group transition-all duration-300 
               hover:bg-primary hover:text-primary-foreground 
               active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    Resume
                    <Download className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  </Button>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/BabySub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    title="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/siuuuuuubham"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    title="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                </a>

                {/* Email */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=subhamsubhra11@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    title="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Badge variant="secondary">CS Student 💻</Badge>
              <Badge variant="secondary">Web Dev Enthusiast 🌐</Badge>
              <Badge variant="secondary">Firebase & React Lover ⚡</Badge>
              <Badge variant="secondary">Route-Note Builder 🚀</Badge>
              <Badge variant="secondary">Passionate Footballer ⚽</Badge>
              <Badge variant="secondary">Always Debugging 😅</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

