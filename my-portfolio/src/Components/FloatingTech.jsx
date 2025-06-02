// components/FloatingTech.jsx
import { FaJava, FaUnity, FaReact } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import { motion } from 'framer-motion';

const FloatingTech = () => {
  const icons = [
    { icon: <FaJava size={48} />, color: "text-red-500", position: [-5, 2, 0] },
    { icon: <SiCplusplus size={48} />, color: "text-blue-400", position: [4, -1, 2] },
    { icon: <FaUnity size={48} />, color: "text-gray-300", position: [3, 3, -2] },
  ];

  return (
    <div className="fixed inset-0 -z-10 opacity-20 pointer-events-none">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.color}`}
          style={{
            left: `${50 + item.position[0] * 5}%`,
            top: `${50 + item.position[1] * 5}%`,
          }}
          animate={{
            y: [0, -15, 0],
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingTech;