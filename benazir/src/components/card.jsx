import React from "react";
import { Flex, Box, Heading, HStack } from "@chakra-ui/react";
import { motion, motionValue, useAnimation } from "framer-motion";

const CBox = (props) => (
  <Box justify="center" align="center" {...props} />
);

const ABox = motion(CBox);

export function Card() {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const controlsFront = useAnimation();
  const controlsBack = useAnimation();

  const variants = {
    visible: { transform: "rotateY(180deg)" },
    hidden: { transform: "rotateY(0deg)" }
  };

  const variants2 = {
    visible: { transform: "rotateY(-180deg)" },
    hidden: { transform: "rotateY(0deg)" }
  };

  const handleClick = (e) => {
    /* if (isFlipped) {
      controlsFront.start("hidden");
      controlsBack.start("visible");
    } else {
      controlsFront.start("visible");
      controlsBack.start("hidden");
    } */
    setIsFlipped(!isFlipped);
  };

  return (
    <Box
      id="scene"
      m={10}
      style={{
        perspective: "600px",
        height: "200px",
        width: "200px"
      }}
      border="1px solid tomato"
    >
      <Heading as="h1" size="xl">
        {isFlipped.toString()}
      </Heading>
      <Box
        id="card"
        position="relative"
        w="full"
        h="full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          variants={variants}
          animate={isFlipped ? "hidden" : "visible"}
          /* initial="visible" */
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backfaceVisibility: "hidden",
            color: "white",
            backgroundColor: "red"
          }}
          onClick={handleClick}
        >
          Card front
        </motion.div>
        <motion.div
          variants={variants2}
          animate={!isFlipped ? "hidden" : "visible"}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backfaceVisibility: "hidden",
            color: "white",
            backgroundColor: "blue",
            transform: "rotateY(180deg)"
          }}
          onClick={handleClick}
        >
          Card back
        </motion.div>
      </Box>
    </Box>
  );
}
