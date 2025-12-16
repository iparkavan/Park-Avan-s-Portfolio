import { motion } from "framer-motion";
import { Code, Database, Server, Smartphone } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks.",
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Building robust server-side applications with Node.js, Express.js, and RESTful API design.",
    },
    {
      icon: Database,
      title: "Database Management",
      description:
        "Designing and optimizing databases with MongoDB, PostgreSQL, and efficient data modeling.",
    },
    {
      icon: Smartphone,
      title: "Full-Stack Integration",
      description:
        "Seamlessly connecting frontend and backend to create complete, scalable web applications.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate MERN stack developer with a love for creating
            innovative web solutions. With expertise in modern technologies and
            a keen eye for design, I transform ideas into powerful digital
            experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              My Journey
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Started my coding journey 5 years ago and fell in love with the
                endless possibilities of web development. I specialize in the
                MERN stack, creating full-stack applications that are both
                beautiful and functional.
              </p>
              <p>
                My passion lies in solving complex problems through clean,
                efficient code and creating user experiences that make a
                difference. I stay up-to-date with the latest technologies and
                best practices in the industry.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-secondary">4.5+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-accent">6+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold gradient-text">∞</div>
                <div className="text-sm text-muted-foreground">
                  Learning Never Stops
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="card-elegant p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-foreground">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
