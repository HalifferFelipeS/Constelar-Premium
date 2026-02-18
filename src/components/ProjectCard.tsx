interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  className?: string;
}

const ProjectCard = ({ title, category, description, image, className = "" }: ProjectCardProps) => {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden glass-hover cursor-pointer ${className}`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
        style={{
          background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(255 80% 65% / 0.07), transparent 40%)",
        }}
      />
      <div className="relative h-full flex flex-col">
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <span className="text-xs font-body uppercase tracking-widest text-cosmic-glow mb-2">
            {category}
          </span>
          <h3 className="text-lg font-display font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
