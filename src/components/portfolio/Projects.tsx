import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "Annoshoot",
    description: "ANNOSHOOT is a high-intensity, top-down anomaly shooter developed using the Godot Engine. Players must navigate atmospheric environments and survive relentless waves of supernatural threats known as Anomalies.",
    tags: ["Godot", "GDScript", "aseprite"],
    github: "https://github.com/mayankhikhi/annoshoot",
    live: "https://mayankhikhi.itch.io/annoshoot",
  },
  {
    title: "AI repo explainer",
    description: "AI Repo Explainer is a simple full-stack application that fetches GitHub repository data and generates a readable summary using API integrations and AI.",
    tags: ["JavaScript", "API", "SDK", "HTML", "TailwindCSS"],
    github: "https://github.com/mayankhikhi/AIRepoExplainer",
    live: "#",
  },
  {
    title: "Project Three",
    description: "A brief description of your third project. Mention any challenges you overcame during development.",
    tags: ["Godot", "GDScript", "Game Dev"],
    github: "#",
    live: "#",
  },
];

const ProjectCard = ({
  project,
  delay,
}: {
  project: (typeof projects)[0];
  delay: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollAnimation(0.1);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)";
  };

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="tilt-card glass rounded-xl p-6 h-full flex flex-col hover:border-primary/30 transition-colors duration-300 group"
      >
        {/* Glow line at top */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{project.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Live demo"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-12" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
