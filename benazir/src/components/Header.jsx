import { Text, Box, Circle, Flex, Stack } from "@chakra-ui/layout"
import { useColorMode } from '@chakra-ui/color-mode'
import { useMediaQuery } from '@chakra-ui/media-query'
import { FaSun, FaMoon, FaLinkedin, FaGithub } from 'react-icons/fa'
import {FiMail} from "react-icons/fi"
import { IconButton } from "@chakra-ui/button";
import React from "react"
import { Button, Image } from "@chakra-ui/react"
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
        <Stack>
            <Circle visibility={matches ? "visible" : "hidden"} top="100" right="100" position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" ></Circle>
            <Flex direction={matches ? 'row' : 'column'}
                spacing="200px" p={bigScreen ? "32" : "0"}
                alignSelf={matches? "flex-start" : "center"}
                
                justifyContent={matches ? "" : "center"}
                alignItems={matches ? "" : "center"}
                textAlign={matches ? "" : "center"}
                >



                <Box mt={bigScreen ? "0" : "16"} alignSelf="flex-start" >

                    <Text color={matches ? "red" : "blue"} fontSize="5xl" fontWeight="semibold">Hi, I am</Text>

                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, green.800, pink.800)" bgClip='text'> {Name}</Text>



                    <Button mt={8} colorScheme="linkedin" onClick={() => {
                        window.open("")
                    }}> Hire Me</Button>
                    <Flex mt="5" alignSelf={matches? "flex-start" : "center"}  w="fit-content" margin={matches ? "" : "auto"}>
                        <IconButton  backgroundColor="transparent" ml={2} icon={<FaLinkedin />}></IconButton>
                        <IconButton backgroundColor="transparent" ml={2} icon={<FaGithub />}></IconButton>
                        <IconButton backgroundColor="transparent" ml={2} icon={< FiMail />}></IconButton>
                    </Flex>
                </Box>


                <Image alignSelf='center' mt={matches ? "0" : "12"}
                    mb={bigScreen ? "0" : "12"} borderRadius="full"
                    backgroundColor="transparent" 
                    boxSize="300px" src="https://avatars.githubusercontent.com/u/73729386?v=4"
                    boxShadow ='full'    
                ></Image>

            </Flex>


        </Stack>

    )
}
export { Header }