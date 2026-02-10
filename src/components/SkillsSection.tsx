import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Layout, 
  Server,
  Brain,
  GitBranch,
  MessageSquare,
  FileSpreadsheet,
  Heart,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useAutoCarousel } from "@/hooks/use-auto-carousel";
const skills = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    icon: Layout,
    items: ["React", "Tailwind CSS", "Responsive Design", "Accessibility"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "REST APIs", "SDLC", "System Design"],
  },
  {
    category: "AI & ML",
    icon: Brain,
    items: ["Machine Learning", "Prompt Engineering", "Hugging Face", "TensorFlow"],
  },
  {
    category: "Tools & DevOps",
    icon: GitBranch,
    items: ["Git & GitHub", "Version Control", "Agile/Scrum"],
  },
  {
    category: "Communication",
    icon: MessageSquare,
    items: ["Zoom & Microsoft Teams", "Professional Writing", "Public Speaking"],
  },
  {
    category: "Microsoft Office",
    icon: FileSpreadsheet,
    items: ["Word - Documents", "Excel - Data Analysis & Formulas", "PowerPoint - Presentations", "Outlook"],
  },
  {
    category: "Soft Skills",
    icon: Heart,
    items: ["Emotional Intelligence", "Conflict Resolution", "Team Collaboration", "Adaptability"],
  },
];

const ITEMS_PER_PAGE = 4;

const SkillsSection = () => {
  const totalPages = Math.ceil(skills.length / ITEMS_PER_PAGE);
  const { currentPage, goTo, prev, next } = useAutoCarousel(totalPages, 5000);
  const currentSkills = skills.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);
  return (
    <section id="skills" className="section-padding bg-secondary/20 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and methodologies I use to 
            build robust, scalable, and user-friendly applications.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentSkills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <skill.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm bg-secondary rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="Previous skills"
            >
              <ChevronLeft size={20} className="text-foreground" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentPage ? "bg-primary scale-125" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
              aria-label="Next skills"
            >
              <ChevronRight size={20} className="text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
