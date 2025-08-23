import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, Eye } from "lucide-react";
import movieAppImage from "@/assets/movie-search-app.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Movie Search App",
      description: "A modern movie discovery application built with React and TMDB API. Features include advanced search functionality, detailed movie information, ratings, and a sleek user interface with responsive design.",
      image: movieAppImage,
      technologies: ["React", "JavaScript", "TMDB API", "CSS3", "Responsive Design"],
      features: [
        "Real-time movie search",
        "Detailed movie information",
        "Responsive design",
        "User-friendly interface",
        "API integration"
      ],
      githubLink: "https://github.com/rj-hassnain/Movie-Search/blob/main/README.md",
      liveLink: "https://www.kapwing.com/videos/68a85cdba3369a2ccc367d58",
      status: "Completed",
      category: "Web Application"
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/2 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of my recent work and technical achievements
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="bg-card/30 border-border hover:border-primary/20 transition-all duration-300 hover:shadow-elevated overflow-hidden group"
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-video relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    
                    {/* Overlay Icons */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        size="sm" 
                        variant="secondary"
                        className="bg-background/80 hover:bg-primary/20"
                        onClick={() => window.open(project.liveLink, '_blank')}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="secondary"
                        className="bg-background/80 hover:bg-primary/20"
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {project.category}
                    </Badge>
                    <Badge variant="outline" className={`border-green-500/20 text-green-400`}>
                      {project.status}
                    </Badge>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-muted-foreground">
                          <Star className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline" 
                          className="border-primary/20 text-primary hover:bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="bg-gradient-primary hover:shadow-glow transition-all duration-300 flex-1"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                     <Button 
                       variant="outline"
                       className="border-primary/20 hover:border-primary hover:bg-primary/10 flex-1"
                       onClick={() => window.open(project.githubLink, '_blank')}
                     >
                       <Github className="mr-2 h-4 w-4" />
                       View Code
                     </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-surface border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Want to See More?
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub profile for more projects and contributions to the open-source community.
              </p>
              <Button 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => window.open('https://github.com/rj-hassnain', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                View All Projects
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;