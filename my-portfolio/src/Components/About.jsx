import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="border-b-4 border-primary pb-2">About Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              I am currently pursuing my Bachelor's degree in Computer Science and Engineering 
              at Graphic Era University. With a strong foundation in programming, I'm experienced 
              in designing and implementing scalable, efficient solutions using C++ and Java.
            </p>
            <p className="text-lg">
              I have hands-on expertise in game development and software engineering, with skills 
              in object-oriented programming, algorithm development, and application performance 
              optimization.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-primary/10 rounded-full">Java</span>
              <span className="px-4 py-2 bg-primary/10 rounded-full">C++</span>
              <span className="px-4 py-2 bg-primary/10 rounded-full">Unity</span>
              <span className="px-4 py-2 bg-primary/10 rounded-full">OpenCV</span>
              <span className="px-4 py-2 bg-primary/10 rounded-full">DSA</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-primary to-secondary rounded-xl overflow-hidden">
              {/* Placeholder for your image */}
              <div className="w-full h-full flex items-center justify-center text-2xl">
                Your Photo Here
              </div>
            </div>
            <div className="absolute -inset-4 border-2 border-primary/30 rounded-xl -z-10"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}