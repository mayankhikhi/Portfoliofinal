import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="orb-2 absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="orb-3 absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        {/* Greeting */}
        <p className="text-muted-foreground text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-in">
          Hello, I'm
        </p>

        {/* Name with typing */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="typing-animation inline-block whitespace-nowrap overflow-hidden border-r-2 border-yellow-400">
              Mayank Kumar
          </span>
       </h1>

        {/* Tagline */}
        <p
          className="text-lg md:text-xl text-muted-foreground mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "2.8s" }}
        >
          Full-Stack Developer & Game Dev Enthusiast
        </p>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-5 mb-16 opacity-0 animate-fade-up"
          style={{ animationDelay: "3.2s" }}
        >
          {[
            { icon: Github, href: "https://github.com/mayankhikhi", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/mayank-kum", label: "LinkedIn" },
            { icon: Mail, href: "mayankk6452@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:scale-110"
            >
              <Icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "3.8s" }}
        >
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="bounce-down inline-block text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
