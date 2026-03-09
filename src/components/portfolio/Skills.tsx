import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillGroups = [
  {
    title: "Languages",
    skills: ["C", "Python", "JavaScript"],
  },
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Flask"],
  },
  {
    title: "Tools & Systems",
    skills: ["Git", "GitHub", "Linux"],
  },
  {
    title: "Game Dev",
    skills: ["Godot Engine", "GDScript", "Aseprite"],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-12" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => {
            const { ref: gRef, isVisible: gVis } = useScrollAnimation(0.1);
            return (
              <div
                key={group.title}
                ref={gRef}
                className={`reveal ${gVis ? "visible" : ""}`}
                style={{ transitionDelay: `${gi * 0.1}s` }}
              >
                <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
                  {group.title}
                </h3>
                <div className={`flex flex-wrap gap-2 stagger-children ${gVis ? "visible" : ""}`}>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg text-sm font-medium bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
