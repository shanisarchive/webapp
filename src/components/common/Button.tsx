import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'right',
  disabled = false,
  fullWidth = false,
  type = 'button',
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full transition-all duration-300 font-medium focus:outline-none backdrop-blur-sm';
  
  const variantStyles = {
    primary: 'bg-aura-white/90 text-aura-black hover:bg-aura-white',
    secondary: 'bg-aura-black/90 text-aura-white border border-aura-white/30 hover:border-aura-white hover:bg-aura-black',
    outline: 'bg-transparent text-aura-white border border-aura-white/30 hover:border-aura-white hover:bg-aura-white/10',
  };
  
  const sizeStyles = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabledStyles}
        ${widthStyles}
        ${className}
      `}
      whileHover={disabled ? {} : { 
        scale: 1.03,
        boxShadow: '0 0 20px rgba(255,255,255,0.2)'
      }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {icon && iconPosition === 'left' && (
        <motion.span 
          className="mr-2"
          animate={{ x: [-2, 0] }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <motion.span 
          className="ml-2"
          animate={{ x: [0, 2] }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.span>
      )}
    </motion.button>
  );
};

export default Button;