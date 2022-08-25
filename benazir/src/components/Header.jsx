import { Text, Box, Circle, Flex, Stack } from "@chakra-ui/layout"
import { useColorMode } from '@chakra-ui/color-mode'
import { useMediaQuery } from '@chakra-ui/media-query'
import React from "react"
import { Button, Image } from "@chakra-ui/react"
const Header = () => {
    const { colorMode } = useColorMode()
    const isDark = colorMode === "dark";
    const [ bigScreen ] = useMediaQuery('(min-width : 600px)')
    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" ></Circle>
            <Flex direction= { bigScreen ? 'row' : 'column'}
                spacing="200px" p={ bigScreen ? "32" : "0"}
                alignSelf="flex-start">



                <Box mt={bigScreen ? "0" : "16"} alignSelf="flex-start" >

                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>

                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, green.800, pink.800)" bgClip='text'> Benazir Sultana</Text>

                    <Text fontSize="2xl" color={isDark ? "purple.200" : "purple.600"}>Devaloper , ux-ui designer ,Freelancer</Text>
                   
                    <Button mt={8} colorScheme="linkedin" onClick={() => {
                    window.open("")
                }}> Hire Me</Button>
                </Box>
                

<Image alignSelf='center' mt={bigScreen ? "0" : "12"}
                    mb={bigScreen ? "0" : "12"} borderRadius="full"
                    backgroundColor="transparent" boxShadow="full"
                    boxSize="300px" src="https://avatars.githubusercontent.com/u/73729386?v=4"

                ></Image>

            </Flex>


        </Stack>

    )
}
export { Header }