import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div ref={ref} className={`max-w-3xl mx-auto reveal ${isVisible ? "visible" : ""}`}>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-8" />
        <p className="text-muted-foreground text-lg leading-relaxed">
          Full-stack developer experienced in building applications with{" "}
          <span className="text-foreground font-medium">Python</span>,{" "}
          <span className="text-foreground font-medium">Flask</span>,{" "}
          <span className="text-foreground font-medium">JavaScript</span>, and modern frontend tools like
          <span className="text-foreground font-medium">Tailwind CSS</span>. Passionate about creating interactive applications and exploring game development
          with <span className="text-foreground font-medium">Godot Engine</span>. Built multiple projects
          from scratch and led development in the Smart India Hackathon internal round.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mt-4">
          Currently seeking a web development internship to contribute to real products
          and scale my engineering skills.
        </p>
      </div>
    </section>
  );
};

export default About;
