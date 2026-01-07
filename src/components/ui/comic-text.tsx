import { CSSProperties } from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

type ComicTextProps = {
  children: string
  className?: string
  style?: CSSProperties
  fontSize?: number
}

export function ComicText({
  children,
  className,
  style,
  fontSize = 5,
}: ComicTextProps) {
  if (typeof children !== "string") {
    throw new Error("children must be a string")
  }

  const dotColor = "#FFFFFF"
  const backgroundColor = "#FACC15"

  return (
    <motion.div
      className={cn("text-center select-none inline-block", className)}
      style={{
        fontSize: `${fontSize}rem`,
        fontFamily: "'Bangers', 'Comic Sans MS', 'Impact', sans-serif",
        fontWeight: "1000",
        transform: "skewX(-10deg)",
        textTransform: "uppercase",
        filter: `
          drop-shadow(5px 5px 0px #000000)
          drop-shadow(3px 3px 0px #EF4444)
        `,
        color: "#000000",
        padding: `${fontSize * 0.15}rem ${fontSize * 0.25}rem`,
        background: backgroundColor,
        backgroundImage: `radial-gradient(circle at 2px 2px, ${dotColor} 1.5px, transparent 0)`,
        backgroundSize: "12px 12px",
        ...style,
      }}
      initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.175, 0.885, 0.32, 1.275],
        type: "spring",
      }}
    >
      {children}
    </motion.div>
  )
}
