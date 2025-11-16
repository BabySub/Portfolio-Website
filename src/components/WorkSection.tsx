import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

// ✅ Your real projects
const projects = [
  {
    id: 0,
    title: "Route-Note",
    description:
      "Route Note is a dynamic travel journaling web app built with React.js and Firebase. Users can log in securely, pin locations on a map, attach photos, stays, and notes — all stored persistently in Firebase.",
    image: "/Route Note.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    githubUrl: "https://github.com/BabySub/Route-Note",
    liveUrl: "https://babysub.github.io/Route-Note/",
  },
  {
    id: 1,
    title: "Contact Management System",
    description:
      "A Python-based contact management system that uses a JSON file for storage. It allows users to add, edit, delete, and search contacts while ensuring data is saved persistently.",
    image: "/Contact.jpg",
    technologies: ["Python", "JSON"],
    githubUrl: "https://github.com/BabySub/PYTHON_contactmanagement",
  },
  {
    id: 2,
    title: "Todos-List",
    description:
      "A React-based web app that helps organize tasks with a clean UI. Built with reusable components and state management for smooth task handling.",
    image: "/Todos List.jpg",
    technologies: ["React JS", "HTML", "CSS", "JavaScript"],
    githubUrl: "",
  },
  {
    id: 3,
    title: "Home Automation",
    description:
      "IoT-based smart home automation system using Arduino and relay modules, enabling voice-controlled appliances for efficient and simplified yet modernized living.",
    image: "/Home automation.jpg", 
    technologies: ["Arduino", "IoT", "Embedded Systems"],
  },
  {
    id: 4,
    title: "IoT Mini Projects",
    description:
      "A collection of IoT-based projects such as smart lighting, distance monitoring, and automated devices built using Arduino IDE and Wokwi.",
    image: "/IoT.jpg",
    technologies: ["Arduino IDE", "Wokwi", "Sensors"],
  },
{
  id: 5,
  title: "Figma Web Design (Footwear Website)",
  description:
    "UI/UX design prototype created in Figma for a modern footwear e-commerce site with responsive and minimal design elements.",
  image: "/F1.png",
  technologies: ["Figma", "UI/UX"],
},
{
  id: 6,
  title: "Figma Web Design (Game Console Website)",
  description:
    "High-fidelity Figma prototype for a gaming console product landing page with interactive layouts and modern design principles.",
  image: "/F3.png",
  technologies: ["Figma", "UI/UX"],
},
{
  id: 7,
  title: "Glassmorphism Icons Design",
  description:
    "A collection of modern UI icons designed with the Glassmorphism effect for futuristic web and mobile applications.",
  image: "/F2.png",
  technologies: ["Figma", "UI/UX"],
},
  
];

const WorkSection = () => {
  return (
    <section id="work" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my projects and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group border border-border shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-video rounded-t-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
