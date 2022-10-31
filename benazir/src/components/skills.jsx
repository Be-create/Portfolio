import styled from "styled-components"
import { motion } from "framer-motion"
import { FaHtml5, FaCss3,FaJsSquare,FaReact,FaRedux,FaNodeJs,FaExpressJs ,FaMongoDb,FaJsonServer,FaChakraUI,FaMaterialui,FaStinked,FaBootstrap} from "react-icons/fa"
import {SiRedux,SiExpress,SiJson,SiChakraui,SiMaterialui,SiStyledcomponents,SiMongodb} from "react-icons/si"
import { border, Divider, Flex ,Grid,Heading,Stack, useColorMode } from "@chakra-ui/react"
const Box = styled.div `
height : 120px;
width : 100px;

border-radius : 5px;
`


const Skills= ()=>{
    const { colorMode } = useColorMode()

    const isDark = colorMode === "dark";
    return( 
        <div style={{marginTop : "250px"}}>
            <Heading mb="36" fontSize="7xl" color={isDark ? "#52057B": "#FFE6F7" } margin="auto" w="fit-content">Skills</Heading>
            <Flex wrap="wrap" gap="50px" p="5" alignItems="center" justifyContent="center">
            <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{ textAlign : "center", display:"block"}}>
            <Box 
             
            style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }} >
 
 <FaHtml5   color={isDark ? "#52057B": "#FFE6F7" }  style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px"  }} ></FaHtml5>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>HTML5</h5>
         </Box>
        </motion.div>
  
        <motion.div 
         whileHover={{ scale: 1.2 }}
         transition={{ type: "spring", stiffness: 400, damping: 10 }}
        style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <FaCss3 color={isDark ? "#52057B": "#FFE6F7" } style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></FaCss3>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>CSS</h5>
         </Box>
        </motion.div>

        <motion.div 
         whileHover={{ scale: 1.2 }}
         transition={{ type: "spring", stiffness: 400, damping: 10 }}
        style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <FaJsSquare  color={isDark ? "#52057B": "#FFE6F7" }style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></FaJsSquare>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>Javascript</h5>
         </Box>
        </motion.div>


        <motion.div  whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <FaReact color={isDark ? "#52057B": "#FFE6F7" } style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></FaReact>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>React</h5>
         </Box>
        </motion.div>

        <motion.div  whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <SiRedux color={isDark ? "#52057B": "#FFE6F7" } style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiRedux>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>Redux</h5>
         </Box>
        </motion.div>


        <motion.div  whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <FaNodeJs color={isDark ? "#52057B": "#FFE6F7" } style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></FaNodeJs>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>Node js</h5>
         </Box>
        </motion.div>


        <motion.div  whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <SiExpress color={isDark ? "#52057B": "#FFE6F7" } style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiExpress>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>Express Js</h5>
         </Box>
        </motion.div>


        <motion.div  whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <SiMaterialui color={isDark ? "#52057B": "#FFE6F7" } style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiMaterialui>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>Material-UI</h5>
         </Box>
        </motion.div>


        <motion.div  whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <SiMongodb color={isDark ? "#52057B": "#FFE6F7" } style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiMongodb>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>MongoDb</h5>
         </Box>
        </motion.div>


        <motion.div  whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <SiChakraui color={isDark ? "#52057B": "#FFE6F7" } style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiChakraui>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>Chakra-UI</h5>
         </Box>
        </motion.div>


        <motion.div  whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <SiJson color={isDark ? "#52057B": "#FFE6F7" } style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiJson>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>Json server</h5>
         </Box>
        </motion.div>



        <motion.div  whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <FaBootstrap color={isDark ? "#52057B": "#FFE6F7" } style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></FaBootstrap>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>BootStrap</h5>
         </Box>
        </motion.div>


        <motion.div  whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} style={{ textAlign : "center" }}>
            <Box style={{border: isDark ? "5px solid #52057B" : "5px solid #FFE6F7" }}>
 
 <SiStyledcomponents color={isDark ? "#52057B": "#FFE6F7" } style={{height : "50%" , width:"80%",margin : "auto",paddingTop:"20px" }} ></SiStyledcomponents>
 <h5 style={{color: isDark ? "#52057B": "#FFE6F7" }}>Styled Componets</h5>
         </Box>
        </motion.div>
        </Flex>
        </div>
        
    )
}
export {Skills}