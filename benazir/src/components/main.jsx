import { Flex , VStack , Heading} from "@chakra-ui/layout"
import { IconButton } from "@chakra-ui/button";
import { FaSun,FaMoon } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import {useColorMode} from '@chakra-ui/color-mode'
import { Spacer } from "@chakra-ui/react";
import { Header } from "./Header";
import { Profile } from "./profile";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Skills } from "./skills";
import {useRef} from "react"
import { Tools } from "./Tools";
import { Projects } from "./projects";
import { Contact } from "./contact";
function Main() {
  const { colorMode, toggleColorMode } = useColorMode()
   const isDark = colorMode === "dark"      

   

  return (
    
      <VStack p="5"className="App">
        <Flex w ="100%" position="absolute"> 
        
        <Heading color="cyan.400">Benazir</Heading>

        <Spacer></Spacer>
        <Tabs variant='enclosed' colorScheme={"linkedin"}>
  <TabList>
    <Tab onClick={()=>{window.scrollTo(
      {
        top : 800,
        behavior : "smooth"
      }
    )}}>Home</Tab>
    <Tab>About</Tab>
    <Tab>Skills</Tab>
    <Tab>Project</Tab>
    <Tab>Resume</Tab>
  </TabList>
  
</Tabs>
        <IconButton ml={8}onClick={toggleColorMode} icon={isDark ? <FaSun fill="cyan.400"/> : <FaMoon fill="cyan.400"/>}> Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</IconButton>
        
        </Flex>
        
        <Header>
        
        </Header>
        
        <Profile ></Profile>
        
        <Typewriter
        options={{
          
          autoStart: true,
          loop: true,
        }}
  onInit={(typewriter) => {
    typewriter.typeString('<strong style="color: #27ae60 ; font-size : 40px ">Hii i am Benazir </strong>')
      
    .pauseFor(2500)
    .typeString('A simple yet powerful native javascript')
    .pauseFor(300)
    .deleteChars(10)
    .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
    .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
    .pauseFor(1000)
    .deleteAll()
    .start();
  }}
/>

<Skills />
<Tools />

<Projects />
        <Contact />
      </VStack>
      
    
  );
}

export default Main;
