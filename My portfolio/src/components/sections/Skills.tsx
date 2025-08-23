import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cpu, Palette, Server, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "text-neon-cyan",
      bgColor: "bg-neon-cyan/10",
      borderColor: "border-neon-cyan/20",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "Tailwind CSS", level: 82 },
        { name: "Responsive Design", level: 90 },
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "text-neon-blue",
      bgColor: "bg-neon-blue/10",
      borderColor: "border-neon-blue/20",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "API Development", level: 72 },
        { name: "Authentication", level: 68 },
      ]
    },
    {
      title: "Database & Tools",
      icon: Database,
      color: "text-neon-purple",
      bgColor: "bg-neon-purple/10",
      borderColor: "border-neon-purple/20",
      skills: [
        { name: "MongoDB", level: 78 },
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 75 },
      ]
    }
  ];

  const generalSkills = [
    "Problem Solving", "Team Collaboration", "Project Management", 
    "UI/UX Design", "Version Control", "Agile Methodology",
    "Code Review", "Testing", "Performance Optimization"
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className={`bg-card/30 border-border hover:${category.borderColor} transition-all duration-300 hover:shadow-card group`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-full ${category.bgColor} ${category.borderColor} border group-hover:shadow-glow transition-all duration-300`}>
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className={`ml-4 text-lg font-semibold group-hover:${category.color} transition-colors`}>
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-2 bg-gradient-to-r from-${category.color.split('-')[1]}-${category.color.split('-')[2]} to-primary rounded-full transition-all duration-1000 ease-out animate-pulse`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* General Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">
            General <span className="text-primary">Competencies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {generalSkills.map((skill, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-card/50 hover:bg-primary/10 hover:text-primary border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-surface border-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Cpu className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Currently Learning</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Expanding my expertise in emerging technologies and advanced development practices
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Artificial Intelligence", "Machine Learning", "TypeScript", "Next.js", "Docker", "AWS"].map((tech, index) => (
                  <Badge 
                    key={index}
                    className="px-4 py-2 bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;