import { motion } from 'framer-motion';
import { FaGamepad, FaRobot, FaDatabase } from 'react-icons/fa';
import { IoMdFingerPrint } from 'react-icons/io';

const projectsData = [
  {
    id: 1,
    title: "Clash Royale Clone",
    description: "Engineered a Clash Royale clone in Unity 3D utilizing C# scripting for gameplay mechanics, multiplayer networking, and real-time synchronization.",
    icon: <FaGamepad className="text-4xl text-primary" />,
    tags: ["Unity", "C#", "Networking", "Agile"],
    link: "/projects/1"
  },
  {
    id: 2,
    title: "Face Recognition System",
    description: "Developed a real-time face recognition system using OpenCV, integrating Haar Cascades, HOG, deep learning, and LBPH for detection and classification.",
    icon: <IoMdFingerPrint className="text-4xl text-primary" />,
    tags: ["OpenCV", "Python", "Deep Learning", "Computer Vision"],
    link: "/projects/2"
  },
  {
    id: 3,
    title: "Nurse Robot Research",
    description: "Research on Personal Assistant Nurse (PAN) robots in healthcare, examining their hardware, software, and challenges like trust, security, and errors.",
    icon: <FaRobot className="text-4xl text-primary" />,
    tags: ["Research", "Healthcare", "Robotics", "AI"],
    link: "/projects/3"
  },
  {
    id: 4,
    title: "Banking Software",
    description: "Developed a robust banking application in Java utilizing Swing for UI and MySQL for data management, ensuring secure financial transactions.",
    icon: <FaDatabase className="text-4xl text-primary" />,
    tags: ["Java", "Swing", "MySQL", "OOP"],
    link: "/projects/4"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          <span className="border-b-4 border-primary pb-2">Projects</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-dark/50 border border-primary/20 rounded-xl overflow-hidden backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-dark rounded-lg">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-light/80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="px-6 py-3 bg-dark/50 border-t border-primary/10">
                <a 
                  href={project.link} 
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}