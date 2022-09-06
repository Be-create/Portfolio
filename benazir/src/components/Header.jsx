import { Text, Box, Circle, Flex, Stack } from "@chakra-ui/layout"
import { useColorMode } from '@chakra-ui/color-mode'
import { useMediaQuery } from '@chakra-ui/media-query'
import { FaSun, FaMoon, FaLinkedin, FaGithub } from 'react-icons/fa'
import {FiMail} from "react-icons/fi"
import { IconButton } from "@chakra-ui/button";
import React from "react"
import { Button, Image } from "@chakra-ui/react"
import headgif from "../assets/headgif.gif"
const Header = () => {
    const { colorMode } = useColorMode()

    const isDark = colorMode === "dark";
    const [bigScreen] = useMediaQuery('(min-width : 600px)')
    const [matches, setMatches] = React.useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    React.useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
  let Name = "Benazir sultana"
    return (
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

                    <Text color={"turquoise"} fontSize="5xl" fontWeight="semibold">Hello, I am</Text>

                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, green.800, pink.800)" bgClip='text'> {Name}</Text>

                    <Text color="cyan.400">Full Stack Web Developer with proficient Skilled in both Frontend and Backend Development for producing the Quality work</Text>

                    <Button mt={8} mb="10" colorScheme="linkedin" onClick={() => {
                        window.open("")
                    }}> Hire Me</Button>
                    <Flex  alignSelf={matches? "flex-start" : "center"}  w="fit-content" margin={matches ? "" : "auto"}>
                        <IconButton backgroundColor="transparent" ml={2} icon={<FaLinkedin fill="cyan.400" size={30} />}></IconButton>
                        <IconButton backgroundColor="transparent" ml={2} icon={<FaGithub fill="cyan.400"size={30} />}></IconButton>
                        <IconButton backgroundColor="transparent" ml={2} icon={< FiMail fill="cyan.400" size={30}/>}></IconButton>
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

    )
}
export { Header }