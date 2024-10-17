// src/components/Slider.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Slider.css';

const Slider = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const slideVariants = {
    initial: { opacity: 0, x: 100 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="slider">
      <AnimatePresence>
        {React.Children.map(children, (child) => {
          const isActive = currentPath === child.props.path;

          return (
            isActive && (
              <motion.div
                key={child.props.path}
                variants={slideVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="slide"
              >
                {child}
              </motion.div>
            )
          );
        })}
      </AnimatePresence>
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Slider;
