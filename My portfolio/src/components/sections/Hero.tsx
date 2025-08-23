import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/linkedin-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-gradient-surface opacity-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-lg opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-elevated">
                <img
                  src={profileImage}
                  alt="Muhammad Hassnain - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Tech Icons */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center shadow-card animate-bounce animation-delay-500">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center shadow-card animate-bounce animation-delay-1000">
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
              ✨ Available For Projects
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Muhammad Hassnain
              </span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-muted-foreground mb-4 font-medium">
              Web Developer
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Building modern web solutions with passion for innovation. Specialized in React, JavaScript, and cutting-edge web technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group px-8 py-6 text-lg"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-primary/20 hover:border-primary hover:bg-primary/10 px-8 py-6 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://github.com/rj-hassnain"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary/10 border border-border hover:border-primary/30 rounded-full transition-all duration-300 hover:shadow-glow group"
              >
                <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-hassnain-9759a2379/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary/10 border border-border hover:border-primary/30 rounded-full transition-all duration-300 hover:shadow-glow group"
              >
                <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:hassnain2275@gmail.com"
                className="p-3 bg-card hover:bg-primary/10 border border-border hover:border-primary/30 rounded-full transition-all duration-300 hover:shadow-glow group"
              >
                <Mail className="h-5 w-5 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;