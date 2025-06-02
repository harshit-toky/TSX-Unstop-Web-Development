import { motion } from 'framer-motion';

const educationData = [
  {
    year: "Sep 2022 - Jun 2026",
    degree: "B.Tech in Computer Science",
    institute: "Graphic Era University, Dehradun",
    marks: "GPA: 9.58/10"
  },
  {
    year: "2021",
    degree: "12th, C.B.S.E",
    institute: "Aggarsain Public School",
    marks: "91.00%"
  },
  {
    year: "2019",
    degree: "10th, C.B.S.E",
    institute: "Aggarsain Public School",
    marks: "94.60%"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-dark/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          <span className="border-b-4 border-primary pb-2">Education</span>
        </motion.h2>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-6 rounded-xl bg-dark border border-primary/20 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}
            >
              <div className={`absolute top-6 -left-2 w-4 h-4 rounded-full bg-primary ${index % 2 === 0 ? 'md:-left-16' : 'md:hidden'}`}></div>
              <div className={`absolute top-6 -right-2 w-4 h-4 rounded-full bg-primary ${index % 2 !== 0 ? 'md:-right-16' : 'md:hidden'}`}></div>
              
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-primary">{edu.institute}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-light/70">{edu.year}</p>
                  <p className="text-lg font-medium">{edu.marks}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}