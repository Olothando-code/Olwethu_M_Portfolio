import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Bot, Brain, Sparkles, FileText, BarChart3, Scale, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectChatbot from "@/assets/project-chatbot.jpg";
import projectAiPrototype from "@/assets/project-ai-prototype.jpg";
import projectContentGen from "@/assets/project-content-gen.jpg";
import projectResume from "@/assets/project-resume.jpg";
import projectSentiment from "@/assets/project-sentiment.jpg";
import projectBiasAudit from "@/assets/project-bias-audit.jpg";

const projects = [
  {
    title: "AI Concept Chatbot",
    description: "Intelligent conversational AI using Dialogflow and ChatGPT API. Built to demonstrate natural language understanding and response generation.",
    category: "AI/ML",
    icon: Bot,
    image: projectChatbot,
    tags: ["Dialogflow", "Node.js", "ChatGPT API"],
    links: { live: "https://sites.google.com/view/codecraftbot/home", github: "https://github.com/OlwethuM" },
  },
  {
    title: "Sector-Specific AI Prototype",
    description: "AI classifier built using Teachable Machine & Hugging Face for industry-specific image classification.",
    category: "AI/ML",
    icon: Brain,
    image: projectAiPrototype,
    tags: ["Teachable Machine", "Hugging Face", "TensorFlow"],
    links: { live: "https://jot-volume-61733637.figma.site/", github: "https://github.com/OlwethuM" },
  },
  {
    title: "Custom Content Generator",
    description: "Text, image & code generator built using the Lovable AI tool for creative content automation.",
    category: "AI/ML",
    icon: Sparkles,
    image: projectContentGen,
    tags: ["Lovable AI", "React", "Node.js"],
    links: { live: "https://mobile-first-ai.lovable.app", github: "https://github.com/Olothando-code/AI-CONTENT-GENERATOR" },
  },
  {
    title: "AI Resume Builder",
    description: "Automated resume generator using GPT-4 for content generation and PDF.co for document creation.",
    category: "AI/ML",
    icon: FileText,
    image: projectResume,
    tags: ["GPT-4", "PDF.co", "React"],
    links: { live: "https://resume-builder-week4.lovable.app/", github: "https://github.com/Olothando-code/RESUME-BUILDER" },
  },
  {
    title: "Sentiment Analysis Dashboard",
    description: "Interactive dashboard analyzing text sentiment using AWS Comprehend, Hugging Face & VADER.",
    category: "Data",
    icon: BarChart3,
    image: projectSentiment,
    tags: ["AWS Comprehend", "Hugging Face", "VADER"],
    links: { live: "https://codecrafters-week5.lovable.app/", github: "https://github.com/Olothando-code/SENTIMENT-ANALYSIS" },
  },
  {
    title: "Bias Audit Report",
    description: "Comprehensive AI bias audit using IBM Fairness 360 toolkit for ethical AI assessment.",
    category: "AI Ethics",
    icon: Scale,
    image: projectBiasAudit,
    tags: ["IBM Fairness 360", "Python", "Data Analysis"],
    links: { live: "https://colab.research.google.com/drive/1yGhm4yn78XIjeQeUfkXFV18jRIEkS1ui", github: "https://github.com/Olothando-code/BIAS-AUDIT-REPORT" },
  },
];

const categoryColors: Record<string, string> = {
  "AI/ML": "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  "Data": "bg-amber-500/20 text-amber-600 dark:text-amber-400",
  "AI Ethics": "bg-violet-500/20 text-violet-600 dark:text-violet-400",
};

const ITEMS_PER_PAGE = 3;

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const currentProjects = projects.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of AI-powered projects showcasing my skills in machine learning, 
            natural language processing, and intelligent systems.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
              >
                <div className="h-40 relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${categoryColors[project.category]}`}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-secondary rounded text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="gap-2 flex-1" asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" className="gap-2 flex-1" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github size={14} />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="p-2 rounded-full bg-secondary hover:bg-primary/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous projects"
            >
              <ChevronLeft size={20} className="text-foreground" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === currentPage ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-full bg-secondary hover:bg-primary/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Next projects"
            >
              <ChevronRight size={20} className="text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
