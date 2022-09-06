import { Image,Flex, Box, Input } from "@chakra-ui/react"
import footergif from "../assets/footergif.gif"
export const Contact = ()=> {
    return(
        <Flex alignItems="center">
            <Image alignSelf='center' 
                     
                     backgroundColor="aliceblack" 
                     bgClip="content-box"
                     boxSize="500px" src={footergif}
                       
                 ></Image>
                 
                 
        </Flex>
    )
}