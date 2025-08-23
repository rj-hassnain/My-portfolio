import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Database } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Create responsive, modern, and user-friendly interfaces using React, JavaScript, and CSS frameworks.",
      features: [
        "Responsive Web Design",
        "React Applications",
        "Modern UI/UX",
        "Performance Optimization"
      ],
      color: "neon-cyan"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Build scalable and efficient server-side applications with Node.js and modern database solutions.",
      features: [
        "RESTful API Development",
        "Database Design",
        "Server Configuration", 
        "Authentication Systems"
      ],
      color: "neon-blue"
    },
    {
      icon: Smartphone,
      title: "Full-Stack Solutions",
      description: "End-to-end web application development combining frontend and backend expertise.",
      features: [
        "Complete Web Apps",
        "Database Integration",
        "User Management",
        "Deployment & Hosting"
      ],
      color: "neon-purple"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to bring your ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="bg-card/30 border-border hover:border-primary/20 transition-all duration-300 hover:shadow-card group cursor-pointer"
              >
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Icon and Title */}
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-primary/10 rounded-full border border-primary/20 group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Button 
                      onClick={scrollToContact}
                      variant="outline" 
                      className="w-full border-primary/20 hover:border-primary hover:bg-primary/10 group-hover:shadow-glow transition-all duration-300"
                    >
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;