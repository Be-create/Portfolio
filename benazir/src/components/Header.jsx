import { Text, Box, Circle, Flex, Stack } from "@chakra-ui/layout"
import { useColorMode } from '@chakra-ui/color-mode'
import { useMediaQuery } from '@chakra-ui/media-query'
import { FaSun, FaMoon, FaLinkedin, FaGithub } from 'react-icons/fa'
import {FiMail} from "react-icons/fi"
import { IconButton } from "@chakra-ui/button";
import React from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Button, Image } from "@chakra-ui/react"
import headgif from "../assets/headgif.gif"
import { useRef } from "react";
import { useInView } from "framer-motion";
import "./style.css"
function Section({ children , time }) {
  const ref = useRef(null);
  const isInView = useInView(ref);


  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px) ",
          opacity: isInView ? 1 : 0,
          transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${time}s`
        }}
      >
        {children}
      </span>
    </section>
  );
}
const Header = () => {
    const { colorMode } = useColorMode()
    
  

    const isDark = colorMode === "dark";
    
    const [matches, setMatches] = React.useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    React.useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
  let Name = "Benazir Sultana"
    return (
        <motion.div initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} >
        <Stack mb="200px" >
           {/* // <Circle visibility={matches ? "visible" : "hidden"} top="100" right="100" position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" ></Circle> */}
            <Flex direction={matches ? 'row' : 'column'}
                spacing="200px" p={matches ? "32" : "0"}
                alignSelf={matches? "flex-start" : "center"}
                
                justifyContent={matches ? "" : "center"}
                alignItems={matches ? "" : "center"}
                textAlign={matches ? "" : "center"}
                >



                <Box mt={matches ? "0" : "16"} alignSelf="flex-start"   >

                    <Section time="0.5"><Text color={isDark ? "white": "#FFABE1" } fontSize="5xl" fontWeight="semibold">Hello, I am</Text></Section>

                    <Section time="0.7"><Text fontSize="7xl" fontWeight="bold"  bgGradient={isDark ?"linear(to-r, #52057B, #892CDC,#BC6FF1)": "linear(to-r, #C689C6, #FFABE1,#FFE6F7)"} bgClip='text'> {Name}</Text></Section>

                    <Text color={isDark ? "white": "#FFE6F7" }>Full Stack Web Developer capable of creating high-quality work who is skilled in both frontend and backend development.</Text>

                    <motion.button
                    style={{borderRadius:"10px", padding:"10px", color:isDark ? "#52057B": "#FFABE1" , border: isDark ? "1px solid #52057B": "1px solid #FFABE1", marginTop:" 8px",marginBottom:"10px", backgroundColor: isDark ? "#00000": "#937DC2" }}
                     
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    onClick={()=>{window.scrollTo(
      {
        top : 8000,
        behavior : "smooth"
      }
    )}}> Hire Me</motion.button>
                    <Flex  alignSelf={matches? "flex-start" : "center"}  w="fit-content" margin={matches ? "" : "auto"}>
                        <IconButton backgroundColor="transparent" ml={2} icon={<FaLinkedin fill={isDark ? "#52057B": "#FFABE1" } size={30} onClick={() => {
                        window.open("https://www.linkedin.com/in/benazir-sultana-880b7b184/")
                    }} />}></IconButton>
                        <IconButton backgroundColor="transparent" ml={2} icon={<FaGithub fill={isDark ? "#52057B": "#FFABE1" }size={30} onClick={() => {
                        window.open("https://github.com/Be-create")
                    }}/>}></IconButton>
                        <IconButton backgroundColor="transparent" ml={2} icon={< FiMail fill={isDark ? "#52057B": "#FFABE1" } size={30} onClick={()=>{window.scrollTo(
      {
        top : 8000,
        behavior : "smooth"
      }
    )}}/>}></IconButton>
                    </Flex>
                </Box>


                <Image alignSelf='center' mt={matches ? "0" : "12"}
                    mb={matches ? "0" : "12"} 
                    backgroundColor="aliceblack" 
                    bgClip="content-box"
                    boxSize="500px" src={headgif}
                      
                ></Image>

            </Flex>


        </Stack>
        </motion.div>
    )
}
export { Header }