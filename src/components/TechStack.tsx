import { motion } from "framer-motion";

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      techs: [
        { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
        { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-800" },
        { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
        { name: "Tailwind CSS", icon: "🎨", color: "from-teal-400 to-blue-500" }
      ]
    },
    {
      category: "Backend", 
      techs: [
        { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-700" },
        { name: "Express.js", icon: "🚀", color: "from-gray-600 to-gray-800" },
        { name: "Socket.io", icon: "🔌", color: "from-purple-500 to-pink-500" },
        { name: "GraphQL", icon: "🔺", color: "from-pink-500 to-rose-500" }
      ]
    },
    {
      category: "Database",
      techs: [
        { name: "MongoDB", icon: "🍃", color: "from-green-600 to-green-800" },
        { name: "PostgreSQL", icon: "🐘", color: "from-blue-700 to-indigo-800" },
        { name: "Redis", icon: "🔴", color: "from-red-500 to-red-700" },
        { name: "Prisma", icon: "⚡", color: "from-violet-500 to-purple-600" }
      ]
    },
    {
      category: "Tools & DevOps",
      techs: [
        { name: "Docker", icon: "🐳", color: "from-blue-500 to-blue-700" },
        { name: "AWS", icon: "☁️", color: "from-orange-400 to-orange-600" },
        { name: "Git", icon: "📚", color: "from-red-600 to-pink-600" },
        { name: "Vercel", icon: "▲", color: "from-black to-gray-800" }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The cutting-edge technologies I use to build scalable, performant, 
            and maintainable applications that exceed expectations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: categoryIndex * 0.1 
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-primary">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="card-elegant p-6 text-center group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: (categoryIndex * 0.2) + (index * 0.1) 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 10,
                      rotateX: 5
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className="text-4xl mb-3"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -10, 10, -10, 0]
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {tech.icon}
                    </motion.div>
                    
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </h4>
                    
                    {/* Animated Progress Bar */}
                    <motion.div 
                      className="mt-3 h-2 bg-muted rounded-full overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div 
                        className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.3) + (index * 0.2) }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                    
                    {/* Glow Effect on Hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 rounded-xl blur-xl -z-10`}
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-secondary">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Responsive Design", "RESTful APIs", "Microservices", 
              "CI/CD", "Testing", "Agile", "UI/UX Design", "Performance Optimization"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;