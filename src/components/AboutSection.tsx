import { motion } from "framer-motion";
import profileImage from "@/assets/profile.jpg";

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="section-padding relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/10 rounded-2xl blur-2xl scale-110" />
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-4 border-primary/30 glow-effect">
                <img
                  src={profileImage}
                  alt="Olwethu Madubela"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="font-display text-2xl font-semibold mb-6">
              Crafting Digital Experiences
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I'm an IT graduate with a deep passion for software development and creating 
                user-centric digital solutions. My journey in technology has equipped me with 
                a diverse skill set spanning front-end development, backend systems, and 
                database management.
              </p>
              <p>
                I'm particularly interested in responsible AI, cloud security, and building 
                accessible applications that deliver exceptional user experiences. I believe 
                in writing clean, efficient code that not only works but is also maintainable 
                and scalable.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, and continuously learning to stay ahead in this 
                ever-evolving field.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
