import React from "react"
import { motion } from "framer-motion"
import { Box, Stack, Badge, VStack, Flex, Heading, Image, useColorMode, color, List } from "@chakra-ui/react"
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaRedux, FaNodeJs, FaExpressJs, FaMongoDb, FaJsonServer, FaChakraUI, FaMaterialui, FaStinked, FaBootstrap, FaJs } from "react-icons/fa"
import styled from "styled-components"
import { SiJson } from "react-icons/si"
import { useRef } from "react";
import { useInView } from "framer-motion";
import "./style.css"
function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref);
  
  
    return (
      <section ref={ref}>
        <span
          style={{
            transform: isInView ? "none" : "translateX(-200px) ",
            opacity: isInView ? 1 : 0,
            transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`
          }}
        >
          {children}
        </span>
      </section>
    );
  }








const Button = styled.button`
 height : 30px;
 width : 100px;
 border-radius : 10px;
 margin-bottom: 20px;
 margin-top : 20px;
 color: black;
 `
const Header = styled.h1`
align-items : "center";
font-size : 30px;
color : #0000FF;

`
const Listitem = styled.li`
`
const Div = styled.div`
opacity:0.1,
padding : 20px;
border : 5px solid #52057B;
height : fit-content;
margin-bottom : 50px;
`
export const Projects = () => {
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
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
        listStyle:"none"
      }
      
    return (

        <div style={{ marginTop: "200px", width: "100%" ,color : "whitesmoke", listStyle:"none"}}>
            <Heading fontSize={matches ? "7xl" : "5xl"} color={isDark ? "#52057B" : "#FFE6F7"} margin="auto" w="fit-content" mb="20" >My Projects</Heading>



           
          <Section> <div style={{width:matches ? "80%" : "100%",
margin:"auto",
backgroundColor: isDark ? "darkorchid" : "rgba(76, 175, 80, 0.1)"
}}
   whileHover={{rotateY:[0,15,-15,0] ,rotateX:15}}
   transition={{ type: "spring", stiffness: 400, damping: 5,duration:1}}
>
           <Div> <Heading style={{ color: isDark ? "#52057B" : "#FFE6F7" }} margin="auto" w="fit-content" mb="20" >Coschedule clone</Heading>

<Flex gap="10px" mb="10" ml="10" wrap="wrap" >
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white" />&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/MongoDB%20-%23F7DF1E.svg?&style=for-the-badge&color=f60c88&logo=MongoDB&logoColor=white" />&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Express%20-%23F7DF1E.svg?&style=for-the-badge&color=f60c88&logo=Express&logoColor=white" />&nbsp;&nbsp;
</Flex>

<Flex direction={matches ? 'row' : 'column'}>

    <Box w={matches ? '35%' : '90%'} m="auto" h="300px">
        <Image src="https://user-images.githubusercontent.com/90378786/194885425-faf156b0-bb07-4ddf-bc0d-3194124c5e5e.jpg" style={{ height: "85%", width: "100%" }} />
        <Flex justifyContent="space-evenly" >
            <Button style={{ backgroundColor: isDark ? "#52057B" : "#FFE6F7" }} onClick={() => {
                window.open("https://coschedule-clone-new.vercel.app/")
            }} >Live</Button>
            <Button style={{ backgroundColor: isDark ? "#52057B" : "#FFE6F7" }} onClick={() => {
                window.open("https://github.com/Be-create/coSchedule_Clone")
            }}>Github</Button>
        </Flex>
    </Box>
    <Box w={matches ? '60%' : '90%'} p={matches ? '0' : '10'}  >
        <Header style={{ color: isDark ? "#52057B" : "#FFE6F7" }}>Manage your tasks with interactive task management app</Header>
        <Header style={{ color: isDark ? "#52057B" : "#FFE6F7" }}>Features</Header>
        <motion.ul variants={container} 
initial="hidden"
whileInView="show"
style={{ fontFamily: "serif" , marginBottom:"20px" }}
>
            <motion.li variants={item}>Signup</motion.li>
            <motion.li variants={item}>Login</motion.li>
            <motion.li variants={item}>Add weekly tasks to weely calender </motion.li>
            <motion.li variants={item}>Manage Projects by add them to calender </motion.li>
            <motion.li variants={item}>Color code projects according to preference</motion.li>
            <motion.li variants={item}>Edits projects</motion.li>
            <motion.li variants={item}>Database to save all projects of user</motion.li>

        </motion.ul>
        <Header style={{ color: isDark ? "#52057B" : "#FFE6F7" }}>Resposibilties</Header>
        <motion.ul variants={container} 
initial="hidden" 
whileInView="show"
style={{ fontFamily: "serif" , marginBottom:"20px" }}
>
            <motion.li variants={item}>Creating Signup page using React and chakra-ui</motion.li>
            <motion.li variants={item}>Creating Login page using React and chakra-ui</motion.li>
            <motion.li variants={item}>Creating Homepage page using React and chakra-ui</motion.li>
            <motion.li variants={item}>Creating sidebar for entire website</motion.li>
            <motion.li variants={item}>Creating feature to colorcode projects</motion.li>
            <motion.li variants={item}>Creating feature to getall projects by date and show them accordingly</motion.li>

        </motion.ul>
    </Box>
</Flex>

</Div>

           </div>
</Section>
           <Section><div
style={{width:matches ? "80%" : "100%",
margin:"auto",
backgroundColor: isDark ? "darkorchid" : "rgba(76, 175, 80, 0.1)"
}}
   whileHover={{rotateY:[0,15,-15,0] ,rotateX:15}}
   transition={{ type: "spring", stiffness: 400, damping: 5,duration:1}}

>
    
    
    
     <Div> <Heading style={{ color: isDark ? "#52057B" : "#FFE6F7" }} margin="auto" w="fit-content" mb="20" >India Today Clone</Heading>

<Flex gap="10px" mb="10" ml="10" wrap="wrap" >
    <Badge variant="subtle" h="8" w="20" colorScheme="purple">
        <Flex p="5px" alignItems="center" gap="5px">
            <FaHtml5 />
            <h1>HTML5</h1></Flex>
    </Badge>
    <Badge variant="solid" h="8" w="20" colorScheme="red">
        <Flex p="5px" alignItems="center" gap="5px" color="black">
            <FaCss3 />
            <h1>CSS</h1></Flex>
    </Badge>
    <Badge variant="outlined" h="8" w="30" bg="red.300" color="black" >
        <Flex p="5px" alignItems="center" gap="3px">
            <FaJs />
            <h1>Javascript</h1></Flex>
    </Badge>
    <Badge variant="outlined" h="8" w="30" bg="red.300" color="black" >
        <Flex p="5px" alignItems="center" gap="3px">
            <SiJson />
            <h1>Jason Sever</h1></Flex>
    </Badge>
</Flex>

<Flex direction={matches ? 'row' : 'column'}>

    <Box w={matches ? '35%' : '90%'} m="auto" h="300px">
        <Image src="https://lovetoreads.com/wp-content/uploads/2020/05/1589842726_maxresdefault.jpg" style={{ height: "85%", width: "100%" }} />
        <Flex justifyContent="space-evenly" >
            <Button style={{ backgroundColor: isDark ? "#52057B" : "#FFE6F7" }} onClick={() => {
                window.open("https://india-today-news.vercel.app/")
            }} >Live</Button>
            <Button style={{ backgroundColor: isDark ? "#52057B" : "#FFE6F7" }} onClick={() => {
                window.open("https://github.com/Be-create/india-today-clone")
            }}>Github</Button>
        </Flex>
    </Box>
    <Box w={matches ? '60%' : '90%'} p={matches ? '0' : '10'}  >
        <Header style={{ color: isDark ? "#52057B" : "#FFE6F7" }}>You can read latest News here</Header>
        <Header style={{ color: isDark ? "#52057B" : "#FFE6F7" }}>Features</Header>
        <motion.ul variants={container} 
initial="hidden"
whileInView="show"
style={{ fontFamily: "serif" , marginBottom:"20px"  }}

>
            <motion.li variants={item}>Signup</motion.li>
            <motion.li variants={item}>Login</motion.li>
            <motion.li variants={item}>Latest news</motion.li>
            <motion.li variants={item}>Read new articles </motion.li>
            <motion.li variants={item}>Listen to news article with audio feature</motion.li>
            <motion.li variants={item}>Watch latest news videos</motion.li>
            <motion.li variants={item}>Fully responsive</motion.li>

        </motion.ul>
        <Header style={{ color: isDark ? "#52057B" : "#FFE6F7" }}>Resposibilties</Header>
        <motion.ul variants={container} 
initial="hidden"
whileInView="show"
style={{ fontFamily: "serif" , marginBottom:"20px" }}
>
            <motion.li variants={item}>Creating Signup page using Html Css and Javascript</motion.li>
            <motion.li variants={item}>Creating Login Page using Html Css and Javascript</motion.li>
            <motion.li variants={item}>Creating Navbar for entire website</motion.li>
            <motion.li variants={item}>Creating sidebar for entire website</motion.li>


        </motion.ul>
    </Box> 
</Flex>

</Div></div>
</Section>

<Section>
<div 
           style={{width: matches ? "80%" : "100%",
        margin:"auto",
        backgroundColor: isDark ? "darkorchid" : "rgba(76, 175, 80, 0.1)" ,
       
        
        }}
           whileHover={{rotateY:[0,15,-15,0] ,rotateX:15}}
           transition={{ type: "spring", stiffness: 400, damping: 5,duration:1}}
           >
           <Div  > <Heading margin="auto" w="fit-content" mb="20" color={isDark ? "#52057B" : "#FFE6F7"} >Spotify Clone</Heading>

<Flex gap="10px" mb="10" ml="10" >
    <Badge variant="subtle" h="8" w="20" colorScheme="purple">
        <Flex p="5px" alignItems="center" gap="5px">
            <FaHtml5 />
            <h1>HTML5</h1></Flex>
    </Badge>
    <Badge variant="solid" h="8" w="20" colorScheme="red">
        <Flex p="5px" alignItems="center" gap="5px" color="black">
            <FaCss3 />
            <h1>CSS</h1></Flex>
    </Badge>
    <Badge variant="outlined" h="8" w="30" bg="red.300" color="black" >
        <Flex p="5px" alignItems="center" gap="3px">
            <FaJs />
            <h1>Javascript</h1></Flex>
    </Badge>
</Flex>

<Flex direction={matches ? 'row' : 'column'}>

    <Box w={matches ? '35%' : '90%'} m="auto" h="300px">
        <Image src="https://c.tenor.com/iczjaEFdW20AAAAC/spotify-music.gif" style={{ height: "85%", width: "100%" }} />
        <Flex justifyContent="space-evenly" >
            <Button style={{ backgroundColor: isDark ? "#52057B" : "#FFE6F7" }} onClick={() => {
                window.open("https://admirable-churros-26f716.netlify.app/")
            }}>Live</Button>
            <Button style={{ backgroundColor: isDark ? "#52057B" : "#FFE6F7" }} onClick={() => {
                window.open("https://github.com/Be-create/Spotify")
            }}>Github</Button>
        </Flex>
    </Box>
    <Box w={matches ? '60%' : '90%'} p={matches ? '0' : '10'}  >
        <Header style={{ color: isDark ? "#52057B" : "#FFE6F7" }}>You can listen to your Favorite Music here</Header>
        <Header style={{ color: isDark ? "#52057B" : "#FFE6F7" }}>Features</Header>
        <motion.ul variants={container}
    initial="hidden"
    whileInView="show"
    style={{ fontFamily: "serif" , marginBottom:"20px"  }}
    >
            <motion.li  variants={item}>Signup</motion.li>
            <motion.li variants={item}>Login</motion.li>
            <motion.li variants={item}>Search Playlist</motion.li>
            <motion.li variants={item}>Filter </motion.li>
            <motion.li variants={item}>Listen to curated list of music</motion.li>

        </motion.ul>
        <Header style={{ color: isDark ? "#52057B" : "#FFE6F7" }}>Resposibilties</Header>
        <motion.ul variants={container}
    initial="hidden"
    whileInView="show"
    style={{ fontFamily: "serif" , marginBottom:"20px" }}
    >
            <motion.li variants={item}>Creating Signup page using Html Css and Javascript</motion.li>
            <motion.li variants={item}>Creating Login Page using Html Css and Javascript</motion.li>
            <motion.li variants={item}>Create Playlist Page using Html Css and Javascript</motion.li>
            <motion.li variants={item}>Write Javascript code  to make the music player functional </motion.li>


        </motion.ul>
    </Box>
</Flex>

</Div>

           </div>
</Section>

            

        </div>

    )
}