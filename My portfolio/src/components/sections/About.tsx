import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const About = () => {
  const timeline = [
    {
      type: "education",
      title: "Bachelor's in Computer Science",
      institution: "COMSATS University",
      period: "2023 - 2027",
      status: "current",
      icon: GraduationCap,
    },
    {
      type: "work",
      title: "Web Development Intern",
      institution: "Digital Empowerment Pakistan", 
      period: "June - July 2024",
      status: "completed",
      icon: Briefcase,
    },
    {
      type: "education",
      title: "FSC & Matric in Computer Science",
      institution: "Fazaia Inter College Nur Khan",
      period: "2016 - 2023",
      status: "completed",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate web developer with a strong focus on creating innovative digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div>
            <Card className="bg-card/50 border-border hover:border-primary/20 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">My Story</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I am a <span className="text-foreground font-semibold">20-year-old web developer</span> proficient in HTML, CSS, JavaScript, React, MongoDB, and Node.js, with a strong focus on frontend development.
                  </p>
                  <p>
                    Passionate about <span className="text-primary font-semibold">web technologies</span> and gradually moving towards AI, I enjoy creating modern, user-friendly interfaces and scalable web applications.
                  </p>
                  <p>
                    Currently pursuing my <span className="text-foreground font-semibold">Bachelor's in Computer Science at COMSATS University</span> (2023–2027), where I'm expanding my knowledge in advanced programming concepts and emerging technologies.
                  </p>
                  <p>
                    I gained practical experience through a <span className="text-primary font-semibold">one-month internship at Digital Empowerment Pakistan</span> (June–July 2024), where I worked on real-world projects and enhanced my development skills.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
              Education & Experience
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card 
                    key={index} 
                    className="bg-card/30 border-border hover:border-primary/20 transition-all duration-300 hover:shadow-card group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-full ${
                          item.status === "current" 
                            ? "bg-primary/20 text-primary" 
                            : "bg-muted text-muted-foreground"
                        } group-hover:shadow-glow transition-all duration-300`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {item.title}
                            </h4>
                            {item.status === "current" && (
                              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-muted-foreground font-medium mb-1">
                            {item.institution}
                          </p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {item.period}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;