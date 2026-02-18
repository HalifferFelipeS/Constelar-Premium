import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Nova Finance",
    category: "App Design",
    description: "App de finanças pessoais com interface intuitiva e dashboard interativo.",
    image: "",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Stellar Brand",
    category: "Design Gráfico",
    description: "Identidade visual completa para marca de tecnologia espacial.",
    image: "",
    className: "",
  },
  {
    title: "Orbit Social",
    category: "App Design",
    description: "Rede social focada em comunidades criativas.",
    image: "",
    className: "",
  },
  {
    title: "Cosmos Store",
    category: "Design Gráfico",
    description: "Branding e materiais visuais para e-commerce premium.",
    image: "",
    className: "md:col-span-2",
  },
  {
    title: "Nebula Health",
    category: "App Design",
    description: "Plataforma de saúde digital com UX centrada no paciente.",
    image: "",
    className: "",
  },
];

interface BentoGridProps {
  images: string[];
}

const BentoGrid = ({ images }: BentoGridProps) => {
  return (
    <section id="projetos" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-body uppercase tracking-widest text-cosmic-glow mb-4 block">
            Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Projetos que{" "}
            <span className="gradient-text">brilham</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              {...project}
              image={images[i] || ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
