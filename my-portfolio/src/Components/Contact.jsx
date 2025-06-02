import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          <span className="border-b-4 border-primary pb-2">Get In Touch</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p>Feel free to reach out to me for any questions or opportunities!</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <HiOutlineMail className="text-xl text-primary" />
                </div>
                <div>
                  <p className="text-sm text-light/70">Email</p>
                  <a href="mailto:tokyharshit0@gmail.com" className="hover:text-primary transition-colors">
                    tokyharshit0@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <FaPhone className="text-xl text-primary" />
                </div>
                <div>
                  <p className="text-sm text-light/70">Phone</p>
                  <a href="tel:+919817610471" className="hover:text-primary transition-colors">
                    +91 9817610471
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/harshit-toky" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/harshit-toky-4126b02a6/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </motion.div>
          
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full px-4 py-2 bg-dark/50 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}