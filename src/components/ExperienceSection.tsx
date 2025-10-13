import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";
import Tilt from "react-parallax-tilt";

const experiences = [
  {
    id: 0,
    company:
      "National Institute of Electronics and Information Technology (NIELIT)",
    position: "Intern",
    duration: "April 2024 – Present",
    location: "Guwahati, Assam",
    description:
      "During my internship at NIELIT, I gainwed hands-on experience in the Internet of Things (IoT) domain. I worked extensively with the Arduino IDE and Wokwi simulator to design, simulate, and implement various IoT-based projects. This involved understanding sensor-actuator communication, microcontroller programming, and cloud-based integration. I built and tested projects such as smart lighting, distance monitoring systems, and automated home appliances, strengthening both hardware interfacing and embedded programming skills. The internship also enhanced my understanding of real-world IoT applications and their role in smart environments.",
    achievements: [
      "Developed and tested smart lighting automation system",
      "Built IoT-based distance monitoring system with ultrasonic sensors",
      "Worked on automated home appliances simulation",
    ],
    technologies: ["Arduino IDE", "Wokwi"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key contributions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <Tilt
              key={exp.id}
              glareEnable={true} 
              glareMaxOpacity={0.1}
              tiltMaxAngleX={5} 
              tiltMaxAngleY={5} 
              scale={1.03} 
              transitionSpeed={250} 
              className="w-full"
            >
              <Card className="border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl text-primary">
                        {exp.position}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-lg font-medium text-foreground">
                        <Building className="h-4 w-4" />
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.achievements?.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">
                        Key Achievements:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.technologies?.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
