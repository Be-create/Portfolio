import React from "react"
import { Image,Flex, Box, Input, Heading, useColorMode } from "@chakra-ui/react"
import footergif from "../assets/footergif.gif"
import { ContactForm } from "./contactform"
export const Contact = ()=> {
    const [matches, setMatches] = React.useState(
        window.matchMedia("(min-width: 768px)").matches
    )
    const { colorMode } = useColorMode()

    const isDark = colorMode === "dark";
    React.useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
    return(
        <div style={{marginTop :"200px"}}>
            <Heading color={isDark ? "#52057B": "#FFE6F7" }  fontSize="7xl" m="auto" w="fit-content"  >Contact</Heading>
            <Flex alignItems="center" direction={matches ? "row" : "column"} >
            <Image alignSelf='center' 
                     
                     backgroundColor="aliceblack" 
                     bgClip="content-box"
                     boxSize="500px" src={footergif}
                       
                 ></Image>
                 <ContactForm />
                 
        </Flex>
        </div>
    )
}