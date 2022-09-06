import styled from "styled-components"

import {SiVisualstudio,SiPostman,SiNpm,SiYarn,SiNetlify,SiCanva,SiVercel,SiHeroku,SiReplit,SiCodesandbox,SiCodepen} from "react-icons/si"
import { Divider, Flex ,Grid,Heading,Stack } from "@chakra-ui/react"
import {DiGit} from "react-icons/di"
const Box = styled.div `
height : 120px;
width : 100px;
border : 5px solid cyan ;
border-radius : 5px;

&:hover {
    background-color : red ;
}
`


const Tools= ()=>{
    return( 
        <div style={{marginTop : "400px"}}>
            <Heading mb="36" fontSize="7xl" color="cyan" margin="auto" w="fit-content">Tools</Heading>
            <Flex wrap="wrap" gap="50px" p="5" alignItems="center" justifyContent="center">
            <div style={{ textAlign : "center", display:"block" }}>
            <Box>
 
 <SiVisualstudio style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiVisualstudio>
 <h5>Vs Code</h5>
         </Box>
        </div>
  
        <div style={{ textAlign : "center" }}>
            <Box>
 
 <SiPostman style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiPostman>
 <h5>Postman</h5>
         </Box>
        </div>

        <div style={{ textAlign : "center" }}>
            <Box>
 
 <SiNpm style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiNpm>
 <h5>NPM</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box>
 
 <SiYarn style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiYarn>
 <h5>Yarn</h5>
         </Box>
        </div>

        <div style={{ textAlign : "center" }}>
            <Box>
 
 <SiNetlify style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiNetlify>
 <h5>Netlify</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box>
 
 <SiCanva style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiCanva>
 <h5>Canva</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box>
 
 <SiVercel style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiVercel>
 <h5>Vercel</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box>
 
 <SiHeroku style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiHeroku>
 <h5>Heroku</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box>
 
 <SiReplit style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiReplit>
 <h5>Replit</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box>
 
 <SiCodesandbox style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiCodesandbox>
 <h5>Codesanbox</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box>
 
 <SiCodepen style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiCodepen>
 <h5>Codepen</h5>
         </Box>
        </div>




        </Flex>
        </div>
        
    )
}
export {Tools}