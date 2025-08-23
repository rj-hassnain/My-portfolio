import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/rj-hassnain",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/muhammad-hassnain-9759a2379/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:hassnain2275@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <footer className="bg-darker-surface border-t border-border relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-blue/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                Muhammad Hassnain
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Passionate frontend developer creating modern web solutions with 
                cutting-edge technologies. Always excited to work on innovative projects 
                and collaborate with amazing teams.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="p-3 bg-card hover:bg-primary/10 border border-border hover:border-primary/30 rounded-full transition-all duration-300 hover:shadow-glow group"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5 group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:hassnain2275@gmail.com"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                hassnain2275@gmail.com
              </a>
              <a
                href="tel:03335104066"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                +92 333 5104066
              </a>
              <p className="text-muted-foreground">
                Pakistan
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-muted-foreground">
              <span>© {currentYear} Muhammad Hassnain. All rights reserved.</span>
            </div>
            
            <div className="text-muted-foreground text-sm">
              <span>Designed & Developed by </span>
              <span className="text-primary font-medium">Muhammad Hassnain</span>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => scrollToSection("home")}
          className="fixed bottom-8 right-8 p-3 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full shadow-glow transition-all duration-300 hover:scale-110 z-50 group"
          aria-label="Back to top"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-primary-foreground group-hover:animate-bounce"></div>
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;