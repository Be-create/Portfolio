import { Text, Box, Circle, Flex, Stack, Heading } from "@chakra-ui/layout"
import { Tabs, TabList, TabPanels, Tab, TabPanel, Textarea, useColorMode } from '@chakra-ui/react'
import { Button, Image } from "@chakra-ui/react"
import React from "react"
import { useMediaQuery } from '@chakra-ui/react'
const Profile = () => {
    const { colorMode } = useColorMode()
    const [isLargerThan800] = useMediaQuery('(min-width: 1200px)')
    const [matches]=useMediaQuery('(min-width: 768px)')
    const isDark = colorMode === "dark";
    





    return (

        <Stack w="100%"   >

            <Box w="fit-content" alignSelf="center" >
                <Heading fontSize="6xl" alignSelf="center" w="fit-content" m="auto" color={isDark ? "#BC6FF1" : "#FFE6F7"} >About</Heading>

                <Flex alignSelf="center" alignItems="center" mt="50px" w="fit-content" direction={matches ? 'row' : 'column'}>

                    <Flex>
                        <Heading color={isDark ? "#52057B" : "#FFE6F7"}> Hii  </Heading>
                        <Image
                            src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
                            boxSize="50px"
                        ></Image>
                        <Heading color={isDark ? "#52057B" : "#FFE6F7"}> I'm </Heading>
                    </Flex>


                    <Heading ml="15px" fontStyle="italic" fontWeight="bold" bgGradient={isDark ? "linear(to-r, #52057B, #892CDC,#BC6FF1)" : "linear(to-r, #C689C6, #FFABE1,#FFE6F7)"} bgClip='text'> Benazir Sultana</Heading>

                </Flex>


            </Box>


            <Flex
 
               
              
   direction={ isLargerThan800 ? "row":"column"}
                

                alignSelf={matches ? "flex-start" : "center"}
                pl={matches ? "32" : "0"}
                pr={matches ? "32" : "0"}
                justifyContent={matches ? "" : "center"}
                alignItems={matches ? "" : "center"}
                textAlign={matches ? "" : "center"}



            >
                <Box color={isDark ? "#C689C6" : "#FFE6F7"} fontSize="2xl" >

                    <p>
                        I am a Fullstack developer based in Kolkata, India.
                    </p>
                    <p>In 2021, during my third year in college, I unintentionally began my adventure toward coding. I studied physics in college, but in our third year, we had to use C language to solve some physics problems. I found writing code to be really exciting at the time. I entered the Masai School to study web development because I was really intrigued. Since last year, I have been training in Masai school to gain essential skills.</p>

                    <p>I enjoy reading books, sipping coffee, and drawing while I'm not working.</p>

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