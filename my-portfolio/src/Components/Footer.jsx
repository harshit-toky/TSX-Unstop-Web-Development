import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Harshit Toky</h3>
            <p className="text-light/70">Computer Science Engineer & Game Developer</p>
          </div>
          
          <div className="flex gap-4">
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
            <a 
              href="mailto:tokyharshit0@gmail.com" 
              className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
            >
              <HiOutlineMail className="text-xl" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-primary/10 text-center text-sm text-light/50">
          <p>© {new Date().getFullYear()} Harshit Toky. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}