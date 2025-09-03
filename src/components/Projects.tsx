import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitBranch, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Stripe",
        "JWT",
        "Tailwind CSS",
      ],
      github: "https://github.com/iparkavan/e-commerce",
      live: "#",
      featured: true,
      stats: {
        stars: 124,
        forks: 45,
        views: 2300,
      },
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description:
        "Real-time social media analytics dashboard with interactive charts, post scheduling, and multi-platform integration using React and Express.js.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: [
        "React",
        "TypeScript",
        "Express.js",
        "Socket.io",
        "Charts.js",
        "PostgreSQL",
      ],
      github: "#",
      live: "#",
      featured: true,
      stats: {
        stars: 89,
        forks: 32,
        views: 1850,
      },
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: [
        "Next.js",
        "Prisma",
        "PostgreSQL",
        "NextAuth",
        "Tailwind CSS",
        "Framer Motion",
      ],
      github: "#",
      live: "#",
      featured: false,
      stats: {
        stars: 67,
        forks: 23,
        views: 1200,
      },
    },
    {
      id: 4,
      title: "Weather Application",
      description:
        "Beautiful weather app with location-based forecasts, interactive maps, and weather alerts using modern React patterns.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: [
        "React",
        "TypeScript",
        "Weather API",
        "Leaflet",
        "CSS Modules",
      ],
      github: "#",
      live: "#",
      featured: false,
      stats: {
        stars: 45,
        forks: 18,
        views: 890,
      },
    },
    {
      id: 5,
      title: "Chat Application",
      description:
        "Modern chat application with AI integration, real-time messaging, and smart conversation features using OpenAI API.",
      image:
        "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop",
      technologies: [
        "React",
        "Node.js",
        "OpenAI API",
        "Socket.io",
        "MongoDB",
        "JWT",
      ],
      github: "https://github.com/iparkavan/chat-app-client",
      live: "https://chat-app-client-rose.vercel.app/login",
      featured: true,
      stats: {
        stars: 156,
        forks: 62,
        views: 3100,
      },
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "This very portfolio website built with modern technologies, featuring smooth animations and responsive design.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: [
        "React",
        "TypeScript",
        "Framer Motion",
        "Tailwind CSS",
        "Vite",
      ],
      github: "#",
      live: "#",
      featured: false,
      stats: {
        stars: 78,
        forks: 29,
        views: 1450,
      },
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my best work - from full-stack applications to
            innovative solutions that demonstrate my expertise in modern web
            development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <motion.div
                className={`relative group ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-elegant p-2 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        className="btn-primary"
                        onClick={() => window.open(project.live, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </motion.div>
                </div>

                {/* Project Stats */}
                <motion.div
                  className="flex justify-center space-x-6 mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Star className="h-4 w-4" />
                    <span className="text-sm">{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <GitBranch className="h-4 w-4" />
                    <span className="text-sm">{project.stats.forks}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Eye className="h-4 w-4" />
                    <span className="text-sm">{project.stats.views}</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Project Details */}
              <motion.div
                className={index % 2 === 1 ? "lg:col-start-1" : ""}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-primary">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <Button
                      className="btn-primary"
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-secondary">
            Other Notable Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="card-elegant p-6 group cursor-pointer h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4 text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3" />
                        <span className="text-xs">{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitBranch className="h-3 w-3" />
                        <span className="text-xs">{project.stats.forks}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="h-4 w-4" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="text-muted-foreground hover:text-secondary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Projects;
