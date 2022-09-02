import { Text, Box, Circle, Flex, Stack, Heading } from "@chakra-ui/layout"
import { Tabs, TabList, TabPanels, Tab, TabPanel, Textarea } from '@chakra-ui/react'
import { Button, Image } from "@chakra-ui/react"
import React from "react"

const Profile = () => {
    
    const [matches, setMatches] = React.useState(
        window.matchMedia("(min-width: 768px)").matches
    )

    React.useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
    
    
    
    
    
    return (

        <Stack w="100%"  >
            
            <Box w="fit-content" alignSelf="center" >
                <Heading fontSize="6xl" alignSelf="center" w="fit-content" m="auto" color="cyan.500" >About</Heading>

                <Flex alignSelf="center" mt="50px" w="fit-content">
                    <Heading color="cyan.400"> Hii there </Heading>
                    <Image
                        src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
                        boxSize="70px"
                    ></Image>
                    <Heading color="cyan.400"> I'm </Heading>

                    <Heading ml="15px" fontStyle="italic" fontWeight="bold" bgGradient="linear(to-r, green.800, pink.800)" bgClip='text'> Benazir Sultana</Heading>

                </Flex>
               
                
            </Box>
            
            
<Flex

direction={matches ? 'row' : 'column'}
 
alignSelf={matches? "flex-start" : "center"}
pl={matches ? "32" : "0"}
pr={matches ? "32" : "0"}
justifyContent={matches ? "" : "center"}
alignItems={matches ? "" : "center"}
textAlign={matches ? "" : "center"}



>
<Box color="aqua" fontSize="2xl" >

<p>
        I'm a Front End Developer based in Kolkata,India.
        </p>
        <p>My coding journey started unexpectedly in my first year of University in 2012. I went to uni for graphic design but in our first year we had to build a basic website and I thought writing code was so cool. I was hooked so I switched my degree to Web Technologies. I've been working in the industry since graduating in 2015 with a first class honours.</p>

        <p>Outside of work I like to spend my time walking our cocker spaniel, drinking coffee, playing golf, gaming and watching Formula 1.</p>

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