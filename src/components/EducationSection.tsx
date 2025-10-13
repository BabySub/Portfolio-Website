import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Book, Code } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      school: "Girijananda Chowdhury University",
      duration: "2022 - 2026",
      location: "Azara, Guwahati, Assam",
      gpa: "Till 6th Semester: 7.41",
      description:
        "Currently pursuing a Bachelor of Technology in Computer Science, focusing on software engineering, web development, and foundational machine learning concepts. Actively engaging in projects and coursework to develop practical programming skills, problem-solving abilities, and a strong understanding of computer science principles.",
      coursework: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
        "Machine Learning (basics)",
      ],
      achievements: [],
    },
    {
      id: 2,
      degree: "12th Grade",
      school: "Faculty Higher Secondary School, CBSE",
      duration: "2020 - 2022",
      location: "Guwahati, Assam",
      gpa: "82%",
      description:
        "Completed 12th grade under the CBSE curriculum with a focus on the science stream (Physics, Chemistry, Mathematics, Biology). Gained a strong foundation in analytical thinking, problem-solving, and scientific reasoning, while actively participating in academic and extracurricular activities to foster holistic development.",
      coursework: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Biology",
        "English",
        "Physical Education",
      ],
      achievements: [],
    },
    {
      id: 3,
      degree: "10th Grade",
      school: "Faculty Higher Secondary School, CBSE",
      duration: "2018 - 2020",
      location: "Guwahati, Assam",
      gpa: "89%",
      description:
        "Successfully completed 10th grade under the CBSE curriculum with distinction. Developed a strong base in core subjects including science, mathematics, and languages, while cultivating skills such as logical reasoning, critical thinking, and effective communication.",
      coursework: [
        "Science",
        "Mathematics",
        "English",
        "Social Studies",
        "Assamese",
      ],
      achievements: [],
    },
  ];

  const certifications = [
    {
      name: "IoT Internship Certificate",
      issuer:
        "National Institute of Electronics and Information Technology (NIELIT)",
      year: "2024",
      credentialId: "NIELIT-IOT-2024-001",
    },
  ];

  const skills = {
    Languages: ["C", "C++", "Java", "Python", "JavaScript"],
    Frontend: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
    Backend: ["MySQL", "Firebase"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Figma"],
  };

  return (
    <>
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
      <section id="education" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Education
            </h2>
            <p className="text-lg text-muted-foreground">
              Academic background, certifications, and technical expertise
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Education */}
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                <GraduationCap className="h-6 w-6 text-primary" />
                Academic Background
              </h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <Card
                    key={edu.id}
                    className="border border-border shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-base font-medium text-foreground">
                        {edu.school}
                      </CardDescription>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{edu.duration}</span>
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>

                      <div>
                        <h4 className="font-semibold mb-2 text-foreground flex items-center gap-1">
                          <Book className="h-4 w-4" />
                          Key Coursework:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <Badge key={course} variant="secondary">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {edu.achievements.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground flex items-center gap-1">
                            <Award className="h-4 w-4" />
                            Achievements:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.achievements.map((achievement) => (
                              <Badge
                                key={achievement}
                                variant="outline"
                                className="border-primary text-primary"
                              >
                                {achievement}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications & Skills */}
            <div className="space-y-12">
              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                  <Award className="h-6 w-6 text-primary" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <Card
                      key={index}
                      className="border border-border shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-primary">
                          {cert.name}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-foreground">
                          {cert.issuer}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                          <span>Earned: {cert.year}</span>
                          <span className="font-mono text-xs">
                            ID: {cert.credentialId}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                  <Code className="h-6 w-6 text-primary" />
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div
                      key={category}
                      className="relative h-32 group perspective-1000"
                      style={{ perspective: "1000px" }}
                    >
                      <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-1000 group-hover:rotate-y-180">
                        {/* Front side - Category heading */}
                        <Card className="absolute inset-0 w-full h-full border border-border shadow-sm backface-hidden flex items-center justify-center">
                          <CardContent className="flex items-center justify-center h-full p-6">
                            <CardTitle className="text-lg text-primary text-center">
                              {category}
                            </CardTitle>
                          </CardContent>
                        </Card>

                        {/* Back side - Skills */}
                        <Card className="absolute inset-0 w-full h-full border border-border shadow-sm backface-hidden rotate-y-180 overflow-hidden">
                          <CardContent className="p-4 h-full flex flex-col justify-center">
                            <div className="flex flex-wrap gap-2 justify-center">
                              {skillList.map((skill) => (
                                <Badge
                                  key={skill}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationSection;
