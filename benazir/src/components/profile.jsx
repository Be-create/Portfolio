import { Text, Box, Circle, Flex, Stack, Heading } from "@chakra-ui/layout"
import { Tabs, TabList, TabPanels, Tab, TabPanel, Textarea, useColorMode } from '@chakra-ui/react'
import { Button, Image } from "@chakra-ui/react"
import React from "react"

const Profile = () => {
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





    return (

        <Stack w="100%"   >

            <Box w="fit-content" alignSelf="center" >
                <Heading fontSize="6xl" alignSelf="center" w="fit-content" m="auto" color={isDark ? "#BC6FF1": "#FFE6F7" } >About</Heading>

                <Flex alignSelf="center" alignItems="center" mt="50px" w="fit-content" direction={matches ? 'row' : 'column'}>

                    <Flex>
                        <Heading color={isDark ? "#52057B": "#FFE6F7" }> Hii  </Heading>
                        <Image
                            src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
                            boxSize="50px"
                        ></Image>
                        <Heading color={isDark ? "#52057B": "#FFE6F7" }> I'm </Heading>
                    </Flex>


                    <Heading ml="15px" fontStyle="italic" fontWeight="bold" bgGradient={isDark ?"linear(to-r, #52057B, #892CDC,#BC6FF1)": "linear(to-r, #C689C6, #FFABE1,#FFE6F7)"}  bgClip='text'> Benazir Sultana</Heading>

                </Flex>


            </Box>


            <Flex

                direction={matches ? 'row' : 'column'}

                alignSelf={matches ? "flex-start" : "center"}
                pl={matches ? "32" : "0"}
                pr={matches ? "32" : "0"}
                justifyContent={matches ? "" : "center"}
                alignItems={matches ? "" : "center"}
                textAlign={matches ? "" : "center"}



            >
                <Box color={isDark ? "#C689C6": "#FFE6F7" } fontSize="2xl" >

                    <p>
                        I'm a Fullstack Developer based in Kolkata,India.
                    </p>
                    <p>My coding journey started unexpectedly in my third year of college in 2021. I went to college for Physics  but in our third year we had to do solve some physics problem using c and I thought writing code was so cool. I was hooked so I joined Masai school to learn web development. I've been training in masai since last year to acquire necessary skills .</p>

                    <p>Outside of work I like to spend my time reading books, drinking coffee and painting </p>

                </Box>

                <Image alignSelf='center'

                    backgroundColor="transparent"
                    bgClip="content-box"
                    boxSize="300px"
                    borderRadius="full"
                    src="https://avatars.githubusercontent.com/u/73729386?v=4"
                ></Image>
            </Flex>
        </Stack>


    )
}
export { Profile }