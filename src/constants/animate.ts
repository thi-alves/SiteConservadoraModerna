// #################### A  N  I  M  A  T  E #################### \\
import { Variants } from "framer-motion";
export const fadeIn = (direction: "up" | "down" = "up"): Variants => {
    return {
        initial: {
            y: direction === 'up' ? 40 : -40,
            opacity: 0,
        },
        whileInView: {
            y: 0,
            opacity: 1,

            transition: {
                duration: 0.8,
                ease: "easeInOut",
            },
        },
    }
};


// #################### A  N  I  M  A  T  E #################### \\