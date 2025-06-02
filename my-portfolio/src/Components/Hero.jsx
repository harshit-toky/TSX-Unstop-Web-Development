import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Harshit Toky
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Computer Science Engineer & Game Developer
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Passionate about creating efficient solutions with Java and C++, and 
            crafting immersive game experiences with Unity. Currently pursuing 
            B.Tech at Graphic Era University with a 9.58/10 GPA.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-6"
        >
          <a 
            href="https://github.com/harshit-toky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a 
            href="https://www.linkedin.com/in/harshit-toky-4126b02a6/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a 
            href="mailto:tokyharshit0@gmail.com" 
            className="p-4 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
          >
            <HiOutlineMail className="text-2xl" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-2 bg-primary rounded-full mt-2"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}