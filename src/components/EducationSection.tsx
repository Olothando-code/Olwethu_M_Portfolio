import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { useAutoCarousel } from "@/hooks/use-auto-carousel";
const education = [
  {
    degree: "National Diploma in Information Technology",
    institution: "Walter Sisulu University",
    year: "2023",
    location: "Eastern Cape, South Africa",
    description: "Comprehensive program covering software development, database management, networking, and IT project management.",
    highlights: ["Software Development", "Database Systems", "Network Administration", "Project Management"],
  },
  {
    degree: "National Senior Certificate (Matric)",
    institution: "Cibeni High School",
    year: "2016",
    location: "South Africa",
    description: "Completed the National Senior Certificate, providing a solid academic foundation.",
    highlights: [],
  },
];

const experiences = [
  {
    title: "Digital Associate (Web/Software Developer)",
    company: "Capaciti",
    period: "Current",
    location: "Cape Town, South Africa",
    description:
      "Building AI-powered solutions, web tools, and prototypes using modern technologies. Completing an intensive AI Bootcamp focused on generative AI and intelligent systems.",
    highlights: ["AI Development", "Web Development", "Generative AI", "Prototyping"],
  },
  {
    title: "Indexer",
    company: "Department Of Home Affairs",
    period: "01/2024 - 12/2024",
    location: "South Africa",
    description:
      "Analyzed variety of materials to fully understand and extract key concepts and information, optimizing searchability and enhancing content accessibility across digital platforms.",
    highlights: ["Data Analysis", "Content Optimization", "Digital Platforms", "Information Extraction"],
  },
];

const certifications = [
  { name: "Responsive Web Design", link: "https://freecodecamp.org/certification/olothandomadubela/responsive-web-design" },
  { name: "AI Foundations: Prompt Engineering with ChatGPT", link: "https://www.coursera.org/account/accomplishments/certificate/3R46B01F0JX3" },
  { name: "Python for Data Science, AI & Development", link: "https://www.coursera.org/account/accomplishments/certificate/EOEL0XWLM97D" },
  { name: "Generative AI with Large Language Models", link: "https://www.coursera.org/account/accomplishments/certificate/ERPTH98PF5O7" },
  { name: "Advance Learning Algorithm", link: "https://www.coursera.org/account/accomplishments/certificate/ERPTH98PF5O7" },
  { name: "Emotional Intelligence", link: null },
  { name: "Verbal Communication and Presentation Skills", link: null },
  { name: "Introduction to Cloud Computing", link: null },
  { name: "Developing Back-end Apps with Node.js and Express", link: null },
  { name: "Developing Front-End Apps with React", link: null },
  { name: "Full Stack Application Development Capstone", link: null },
];

const CERTS_PER_PAGE = 4;

const CertificationsCarousel = () => {
  const totalPages = Math.ceil(certifications.length / CERTS_PER_PAGE);
  const { currentPage, goTo, prev, next } = useAutoCarousel(totalPages, 4000);
  const currentCerts = certifications.slice(currentPage * CERTS_PER_PAGE, (currentPage + 1) * CERTS_PER_PAGE);

  return (
    <div>
      <div className="grid gap-3">
        {currentCerts.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="glass-card p-4 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <Award size={18} className="text-primary" />
            </div>
            {cert.link ? (
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="font-medium text-sm hover:text-primary transition-colors">
                {cert.name}
              </a>
            ) : (
              <span className="font-medium text-sm">{cert.name}</span>
            )}
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 mt-6">
        <button onClick={prev} className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors" aria-label="Previous certifications">
          <ChevronLeft size={20} className="text-foreground" />
        </button>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentPage ? "bg-primary scale-125" : "bg-muted-foreground/30"}`}
              aria-label={`Go to certifications page ${i + 1}`}
            />
          ))}
        </div>
        <button onClick={next} className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors" aria-label="Next certifications">
          <ChevronRight size={20} className="text-foreground" />
        </button>
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-secondary/20 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" />
              Education
            </h3>

            <div className="relative pl-8 border-l-2 border-primary/30">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pb-8"
                >
                  <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary border-4 border-background" />
                  <div className="glass-card p-6 rounded-xl">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <span className="flex items-center gap-1 text-sm text-primary">
                        <Calendar size={14} />
                        {edu.year}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin size={14} />
                        {edu.location}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-semibold mb-1">{edu.degree}</h4>
                    <p className="text-primary mb-3">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm mb-4">{edu.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <span key={highlight} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-semibold mb-8 flex items-center gap-3">
              <Briefcase className="text-primary" />
              Work Experience
            </h3>

            <div className="relative pl-8 border-l-2 border-primary/30">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pb-10 last:pb-0"
                >
                  <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary border-4 border-background" />
                  <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <span className="flex items-center gap-1 text-sm text-primary font-medium">
                        <Briefcase size={14} />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-semibold mb-3">{exp.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span key={highlight} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-semibold mb-8 flex items-center gap-3">
              <Award className="text-primary" />
              Certifications
            </h3>

            <CertificationsCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
