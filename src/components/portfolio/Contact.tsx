import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Github, Linkedin, Mail } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "mayankk6452@gmail.com", href: "mailto:mayankk6452@gmail.com" },
  { icon: Github, label: "github.com/mayankhikhi", href: "https://github.com/mayankhikhi" },
  { icon: Linkedin, label: "linkedin.com/in/mayank-kum", href: "https://linkedin.com/in/mayank-kum" },
];

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div ref={ref} className={`max-w-3xl mx-auto text-center reveal ${isVisible ? "visible" : ""}`}>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />

        <p className="text-muted-foreground text-lg mb-12">
          I'm currently looking for a web development or game development internship. Feel free to reach out if you'd like to
          collaborate or just say hi!
        </p>

        <div className={`flex flex-col items-center gap-5 stagger-children ${isVisible ? "visible" : ""}`}>
          {contactLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                <Icon size={18} className="group-hover:text-primary transition-colors" />
              </span>
              <span className="link-underline text-sm md:text-base">{label}</span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-20 text-xs text-muted-foreground/50">
          {new Date().getFullYear()} Mayank Kumar. Built with React & Tailwind.
        </p>
      </div>
    </section>
  );
};

export default Contact;
