import { motion } from "framer-motion";
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
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-body uppercase tracking-widest text-cosmic-glow mb-4 block">
            Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Projetos que{" "}
            <span className="gradient-text">brilham</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={project.className}
            >
              <ProjectCard
                {...project}
                image={images[i] || ""}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
