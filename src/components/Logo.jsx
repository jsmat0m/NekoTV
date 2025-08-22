import { Link } from "react-router-dom";
import { useState } from "react";

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const redColor = '#FF4A3F'; // unified red for T and V

  return (
    <Link to="/home" className="block relative">
      <h1 
        className="select-none text-3xl md:text-4xl font-black tracking-wide transition-all duration-500 ease-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          filter: isHovered ? 'drop-shadow(0 0 12px rgba(255, 111, 97, 0.5))' : 'none',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      >
        <span className="inline-block" style={{ 
          color: '#FF804A', 
          transform: isHovered ? 'rotate(-5deg)' : 'none',
          transition: 'transform 0.3s ease-out'
        }}>ネ</span>
        <span className="inline-block" style={{ 
          color: '#FF7F50', 
          transform: isHovered ? 'translateY(-3px)' : 'none',
          transition: 'transform 0.3s ease-out 0.05s'
        }}>コ</span>
        <span className="inline-block" style={{ 
          color: redColor, 
          transform: isHovered ? 'translateY(3px)' : 'none',
          transition: 'transform 0.3s ease-out 0.1s'
        }}>T</span>
        <span className="inline-block" style={{ 
          color: redColor, 
          transform: isHovered ? 'rotate(5deg)' : 'none',
          transition: 'transform 0.3s ease-out 0.15s'
        }}>V</span>
        
        {/* Optional TV screen glow effect */}
        {isHovered && (
          <span className="absolute -inset-2 rounded-lg bg-gradient-to-r from-orange-400/10 to-red-400/10 opacity-70 blur-md -z-10"></span>
        )}
      </h1>
    </Link>
  );
};

export default Logo;
