import styled from "styled-components"

import {SiVisualstudio,SiPostman,SiNpm,SiYarn,SiNetlify,SiCanva,SiVercel,SiHeroku,SiReplit,SiCodesandbox,SiCodepen} from "react-icons/si"
import { Divider, Flex ,Grid,Heading,Stack, useColorMode } from "@chakra-ui/react"
import {DiGit} from "react-icons/di"
const Box = styled.div `
height : 120px;
width : 100px;
border : 5px solid cyan ;
border-radius : 5px;
color : cyan;
transition : transform .2s;
&:hover {
    transform : scale(1.5);
}
`


const Tools= ()=>{
    const { colorMode } = useColorMode()

    const isDark = colorMode === "dark";
    return( 
        <div style={{marginTop : "200px"}}>
            <Heading mb="36" fontSize="7xl" color={isDark ? "#52057B": "#FFE6F7" }margin="auto" w="fit-content">Tools</Heading>
            <Flex wrap="wrap" gap="50px" p="5" alignItems="center" justifyContent="center">
            <div style={{ textAlign : "center", display:"block" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <SiVisualstudio  color={isDark ? "#52057B": "#FFE6F7" }  style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiVisualstudio>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>Vs Code</h5>
         </Box>
        </div>
  
        <div style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <SiPostman  color={isDark ? "#52057B": "#FFE6F7" }  style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiPostman>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>Postman</h5>
         </Box>
        </div>

        <div style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <SiNpm  color={isDark ? "#52057B": "#FFE6F7" }  style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiNpm>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>NPM</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <SiYarn  color={isDark ? "#52057B": "#FFE6F7" }  style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiYarn>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>Yarn</h5>
         </Box>
        </div>

        <div style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <SiNetlify  color={isDark ? "#52057B": "#FFE6F7" }  style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiNetlify>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>Netlify</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <SiCanva  color={isDark ? "#52057B": "#FFE6F7" }  style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiCanva>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>Canva</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <SiVercel  color={isDark ? "#52057B": "#FFE6F7" }  style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiVercel>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>Vercel</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <SiHeroku  color={isDark ? "#52057B": "#FFE6F7" }  style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiHeroku>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>Heroku</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <SiReplit  color={isDark ? "#52057B": "#FFE6F7" }  style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiReplit>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>Replit</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <SiCodesandbox  color={isDark ? "#52057B": "#FFE6F7" }  style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiCodesandbox>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>Codesanbox</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <SiCodepen  color={isDark ? "#52057B": "#FFE6F7" }  style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiCodepen>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>Codepen</h5>
         </Box>
        </div>




        </Flex>
        </div>
        
    )
}
export {Tools}