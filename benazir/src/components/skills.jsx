import styled from "styled-components"
import { FaHtml5, FaCss3,FaJsSquare,FaReact,FaRedux,FaNodeJs,FaExpressJs ,FaMongoDb,FaJsonServer,FaChakraUI,FaMaterialui,FaStinked,FaBootstrap} from "react-icons/fa"
import {SiRedux,SiExpress,SiJson,SiChakraui,SiMaterialui,SiStyledcomponents,SiMongodb} from "react-icons/si"
import { Divider, Flex ,Grid,Heading,Stack } from "@chakra-ui/react"
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


const Skills= ()=>{
    return( 
        <div style={{marginTop : "250px"}}>
            <Heading mb="36" fontSize="7xl" color="cyan" margin="auto" w="fit-content">Skills</Heading>
            <Flex wrap="wrap" gap="50px" p="5" alignItems="center" justifyContent="center">
            <div style={{ textAlign : "center", display:"block" }}>
            <Box>
 
 <FaHtml5 style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></FaHtml5>
 <h5>HTML5</h5>
         </Box>
        </div>
  
        <div style={{ textAlign : "center" }}>
            <Box>
 
 <FaCss3 style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></FaCss3>
 <h5>CSS</h5>
         </Box>
        </div>

        <div style={{ textAlign : "center" }}>
            <Box>
 
 <FaJsSquare style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></FaJsSquare>
 <h5>Javascript</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box>
 
 <FaReact style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></FaReact>
 <h5>React</h5>
         </Box>
        </div>

        <div style={{ textAlign : "center" }}>
            <Box>
 
 <SiRedux style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiRedux>
 <h5>Redux</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box>
 
 <FaNodeJs style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></FaNodeJs>
 <h5>Node js</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box>
 
 <SiExpress style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiExpress>
 <h5>Express Js</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box>
 
 <SiMaterialui style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiMaterialui>
 <h5>Material-UI</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box>
 
 <SiMongodb style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiMongodb>
 <h5>MongoDb</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box>
 
 <SiChakraui style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiChakraui>
 <h5>Chakra-UI</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box>
 
 <SiJson style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiJson>
 <h5>Json server</h5>
         </Box>
        </div>



        <div style={{ textAlign : "center" }}>
            <Box>
 
 <FaBootstrap style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></FaBootstrap>
 <h5>BootStrap</h5>
         </Box>
        </div>


        <div style={{ textAlign : "center" }}>
            <Box>
 
 <SiStyledcomponents style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiStyledcomponents>
 <h5>Styled Componets</h5>
         </Box>
        </div>
        </Flex>
        </div>
        
    )
}
export {Skills}