import { Box, Stack,Badge ,VStack,Flex, Heading } from "@chakra-ui/react"
import { FaHtml5, FaCss3,FaJsSquare,FaReact,FaRedux,FaNodeJs,FaExpressJs ,FaMongoDb,FaJsonServer,FaChakraUI,FaMaterialui,FaStinked,FaBootstrap, FaJs} from "react-icons/fa"
import styled from "styled-components"
 const Button = styled.button`
 height : 30px;
 width : 50px;
 border-radius : 10px;
 background-color : cyan;
 margin-top : 20px
 `
const Header = styled.h1`
align-items : "center";
background-color :cyan;
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
    return (
         
            <div style={{marginTop : "300px",width : "100%" }}>
           <Div> <Heading margin="auto" w="fit-content" mb="20">Spotify Clone</Heading>
            <Flex gap="10px" mb="10" ml="10">
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
            
            <Flex>
                
            <Box w="35%"  m="auto" h="300px">
                <iframe src="https://www.pexels.com/videos/" style={{height : "85%" ,width : "100%"}} />
            <Flex justifyContent="space-evenly" >
            <Button >Live</Button>
            <Button>Github</Button>
            </Flex>
            </Box>
            <Box w= "60%">
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
            <Div> <Heading margin="auto" w="fit-content" mb="20">Spotify Clone</Heading>
            <Flex gap="10px" mb="10" ml="10">
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
            
            <Flex>
                
            <Box w="35%"  m="auto" h="300px">
                <iframe src="https://www.pexels.com/videos/" style={{height : "85%" ,width : "100%"}} />
            <Flex justifyContent="space-evenly" >
            <Button >Live</Button>
            <Button>Github</Button>
            </Flex>
            </Box>
            <Box w= "60%">
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
            <Div> <Heading margin="auto" w="fit-content" mb="20">Spotify Clone</Heading>
            <Flex gap="10px" mb="10" ml="10">
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
            
            <Flex>
                
            <Box w="35%"  m="auto" h="300px">
                <iframe src="https://www.pexels.com/videos/" style={{height : "85%" ,width : "100%"}} />
            <Flex justifyContent="space-evenly" >
            <Button >Live</Button>
            <Button>Github</Button>
            </Flex>
            </Box>
            <Box w= "60%">
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
        </div>
        
    )
}