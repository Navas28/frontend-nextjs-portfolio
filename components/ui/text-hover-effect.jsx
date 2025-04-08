"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({ text, duration}) => {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && hovered && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      
      // Ensure cursor is within bounds of SVG
      if (cursor.x >= svgRect.left && cursor.x <= svgRect.right && 
          cursor.y >= svgRect.top && cursor.y <= svgRect.bottom) {
        const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
        const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
        
        // Check if values are valid numbers before updating
        if (!isNaN(cxPercentage) && !isNaN(cyPercentage)) {
          setMaskPosition({
            cx: `${cxPercentage}%`,
            cy: `${cyPercentage}%`,
          });
        }
      }
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none min-w-[150px] min-h-[80px] cursor-none "
    >
      <defs>
        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0.4, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-transparent stroke-neutral-700 dark:stroke-neutral-500 text-6xl md:text-7xl font-bold"
        strokeWidth="0.6"
        style={{
          opacity: hovered ? 0.3 : 0.1,
        }}
      >
        {text}
      </text>

      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.8"
        className="fill-transparent stroke-white text-6xl md:text-7xl font-bold"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        style={{
          filter: "drop-shadow(0 0 8px rgba(255,255,255,0.2))",
        }}
      >
        {text}
      </motion.text>
  
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.8"
        mask="url(#textMask)"
        className="fill-transparent text-6xl md:text-7xl font-bold"
        style={{
          filter: "drop-shadow(0 0 15px rgba(255,255,255,0.3))",
        }}
      >
        {text}
      </text>
    </svg>
  );
};
