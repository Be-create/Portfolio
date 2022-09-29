import React from "react"

import { Box, Stack,Badge ,VStack,Flex, Heading,Image } from "@chakra-ui/react"
import { FaHtml5, FaCss3,FaJsSquare,FaReact,FaRedux,FaNodeJs,FaExpressJs ,FaMongoDb,FaJsonServer,FaChakraUI,FaMaterialui,FaStinked,FaBootstrap, FaJs} from "react-icons/fa"
import styled from "styled-components"
import { SiJson } from "react-icons/si"
 const Button = styled.button`
 height : 30px;
 width : 100px;
 border-radius : 10px;
 background-color : cyan;
 margin-top : 20px;
 color: black;
 `
const Header = styled.h1`
align-items : "center";
font-size : 30px;
color : cyan;

`
const Listitem = styled.li`
`
const Div = styled.div`
padding : 20px;
border : 5px solid black;
height : fit-content;
margin-bottom : 50px;
`
export const Projects = ()=> {
    const [matches, setMatches] = React.useState(
        window.matchMedia("(min-width: 768px)").matches
    )
    
    React.useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
       
    return (
         
            <div style={{marginTop : "200px",width : "100%" }}>
                <Heading  fontSize={matches ? "7xl" : "5xl"} color="cyan" margin="auto" w="fit-content"  mb ="20" >My Projects</Heading>
           <Div> <Heading margin="auto" w="fit-content" mb="20" color="cyan">Spotify Clone</Heading>
            
                <Flex gap="10px" mb="10" ml="10" >
                <Badge variant="subtle" h="8" w ="20" colorScheme="purple">
                    <Flex p="5px" alignItems="center" gap="5px">
                        <FaHtml5  />
                    <h1>HTML5</h1></Flex>
                </Badge>
                <Badge variant="solid" h="8" w ="20" colorScheme="red">
                    <Flex p="5px" alignItems="center" gap="5px" color="black">
                        <FaCss3  />
                    <h1>CSS</h1></Flex>
                </Badge>
                <Badge variant="outlined" h="8" w ="30" bg="red.300" color="black" >
                    <Flex p="5px" alignItems="center" gap="3px">
                        <FaJs  />
                    <h1>Javascript</h1></Flex>
                </Badge>
            </Flex>
            
            <Flex direction={matches ? 'row' : 'column'}>
                
            <Box w={matches ? '35%' : '90%'}   m="auto" h="300px">
                <Image src="https://c.tenor.com/iczjaEFdW20AAAAC/spotify-music.gif" style={{height : "85%" ,width : "100%"}} />
            <Flex justifyContent="space-evenly" >
            <Button onClick={() => {
                        window.open("https://remarkable-piroshki-182a27.netlify.app/")
                    }}>Live</Button>
            <Button onClick={() => {
                        window.open("https://github.com/Be-create/CW-1-Spotify-")
                    }}>Github</Button>
            </Flex>
            </Box>
            <Box w={matches ? '60%' : '90%'} p={matches ? '0' : '10'}  >
                <Header>You can listen to your Favorite Music here</Header>
                       <Header>Features</Header>
          <ul>
            <Listitem>Signup</Listitem>
            <Listitem>Login</Listitem>
            <Listitem>Search Playlist</Listitem>
            <Listitem>Filter </Listitem>
            <Listitem>Listen to curated list of music</Listitem>
            
          </ul>
          <Header>Resposibilties</Header>
          <ul>
            <Listitem>Creating Signup page using Html Css and Javascript</Listitem>
            <Listitem>Creating Login Page using Html Css and Javascript</Listitem>
            <Listitem>Create Playlist Page using Html Css and Javascript</Listitem>
            <Listitem>Write Javascript code  to make the music player functional </Listitem>
            
            
          </ul>
            </Box>
            </Flex>
            
            </Div>
           
           
           
           
            <Div> <Heading margin="auto" w="fit-content" mb="20" color="cyan">India Today Clone</Heading>
            
            <Flex gap="10px" mb="10" ml="10" wrap="wrap" >
            <Badge variant="subtle" h="8" w ="20" colorScheme="purple">
                <Flex p="5px" alignItems="center" gap="5px">
                    <FaHtml5  />
                <h1>HTML5</h1></Flex>
            </Badge>
            <Badge variant="solid" h="8" w ="20" colorScheme="red">
                <Flex p="5px" alignItems="center" gap="5px" color="black">
                    <FaCss3  />
                <h1>CSS</h1></Flex>
            </Badge>
            <Badge variant="outlined" h="8" w ="30" bg="red.300" color="black" >
                <Flex p="5px" alignItems="center" gap="3px">
                    <FaJs  />
                <h1>Javascript</h1></Flex>
            </Badge>
            <Badge variant="outlined" h="8" w ="30" bg="red.300" color="black" >
                <Flex p="5px" alignItems="center" gap="3px">
                    <SiJson  />
                <h1>Jason Sever</h1></Flex>
            </Badge>
        </Flex>
        
        <Flex direction={matches ? 'row' : 'column'}>
            
        <Box w={matches ? '35%' : '90%'}   m="auto" h="300px">
            <Image src="https://lovetoreads.com/wp-content/uploads/2020/05/1589842726_maxresdefault.jpg" style={{height : "85%" ,width : "100%"}} />
        <Flex justifyContent="space-evenly" >
        <Button onClick={() => {
                        window.open("https://chipper-praline-efbd1e.netlify.app/")
                    }} >Live</Button>
        <Button onClick={() => {
                        window.open("https://github.com/SaurabhSinghRbz/india-today-clone")
                    }}>Github</Button>
        </Flex>
        </Box>
        <Box w={matches ? '60%' : '90%'} p={matches ? '0' : '10'}  >
            <Header>You can read latest News here</Header>
                   <Header>Features</Header>
      <ul>
        <Listitem>Signup</Listitem>
        <Listitem>Login</Listitem>
        <Listitem>Latest news</Listitem>
        <Listitem>Read new articles </Listitem>
        <Listitem>Listen to news article with audio feature</Listitem>
        <Listitem>Watch latest news videos</Listitem>
        <Listitem>Fully responsive</Listitem>
        
      </ul>
      <Header>Resposibilties</Header>
      <ul>
        <Listitem>Creating Signup page using Html Css and Javascript</Listitem>
        <Listitem>Creating Login Page using Html Css and Javascript</Listitem>
        <Listitem>Creating Navbar for entire website</Listitem>
        <Listitem>Creating sidebar for entire website</Listitem>
        
        
      </ul>
        </Box>
        </Flex>
        
        </Div>
       
        <Div> <Heading margin="auto" w="fit-content" mb="20" color="cyan">Recipe App</Heading>
            
            <Flex gap="10px" mb="10" ml="10" >
            <Badge variant="subtle" h="8" w ="20" colorScheme="purple">
                <Flex p="5px" alignItems="center" gap="5px">
                    <FaHtml5  />
                <h1>HTML5</h1></Flex>
            </Badge>
            <Badge variant="solid" h="8" w ="20" colorScheme="red">
                <Flex p="5px" alignItems="center" gap="5px" color="black">
                    <FaCss3  />
                <h1>CSS</h1></Flex>
            </Badge>
            <Badge variant="outlined" h="8" w ="30" bg="red.300" color="black" >
                <Flex p="5px" alignItems="center" gap="3px">
                    <FaJs  />
                <h1>Javascript</h1></Flex>
            </Badge>
        </Flex>
        
        <Flex direction={matches ? 'row' : 'column'}>
            
        <Box w={matches ? '35%' : '90%'}   m="auto" h="300px">
            <Image src="data:image/jpeg;base64,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" style={{height : "85%" ,width : "100%"}} />
        <Flex justifyContent="space-evenly" >
        <Button onClick={() => {
                        window.open("https://delicious-recipes-new.netlify.app")
                    }} >Live</Button>
        <Button onClick={() => {
                        window.open("https://github.com/masai-course/benazir_pw3_074/tree/master/unit-5/sprint-4/day-1/assignments")
                    }}>Github</Button>
        </Flex>
        </Box>
        <Box w={matches ? '60%' : '90%'} p={matches ? '0' : '10'}  >
            <Header>Here you can get recipes for many delicious dishes</Header>
                   <Header>Features</Header>
      <ul>
        <Listitem>Signup</Listitem>
        <Listitem>Login</Listitem>
        <Listitem>Search Recipe</Listitem>
        <Listitem>Recipe of the day</Listitem>
        
        
      </ul>
      
        </Box>
        </Flex>
        
        </Div>
       
        </div>
        
    )
}