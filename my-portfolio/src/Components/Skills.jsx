import { motion } from 'framer-motion';

const skillsData = [
  { name: "Java", level: 90, category: "Languages" },
  { name: "C++", level: 85, category: "Languages" },
  { name: "C", level: 75, category: "Languages" },
  { name: "Python", level: 70, category: "Languages" },
  { name: "JavaScript", level: 65, category: "Languages" },
  { name: "HTML/CSS", level: 80, category: "Web" },
  { name: "Unity", level: 85, category: "Game Dev" },
  { name: "OpenCV", level: 75, category: "Computer Vision" },
  { name: "MySQL", level: 80, category: "Database" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "OOP", level: 90, category: "Concepts" },
  { name: "DSA", level: 85, category: "Concepts" },
];

export default function Skills() {
  const categories = [...new Set(skillsData.map(skill => skill.category))];
  
  return (
    <section id="skills" className="py-20 bg-dark/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          <span className="border-b-4 border-primary pb-2">Technical Skills</span>
        </motion.h2>
        
        {categories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="space-y-4">
              {skillsData
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark/30 h-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}