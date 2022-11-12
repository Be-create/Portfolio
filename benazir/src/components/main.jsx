import React from 'react'
import { Flex , VStack , Heading} from "@chakra-ui/layout"
import { IconButton } from "@chakra-ui/button";
import { FaSun,FaMoon,FaHamburger } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import {useColorMode} from '@chakra-ui/color-mode'
import { Spacer } from "@chakra-ui/react";
import { Header } from "./Header";
import { motion, useScroll } from "framer-motion"
import { Profile } from "./profile";
import { Tabs, TabList, TabPanels, Tab, TabPanel,Menu,MenuItem,MenuList,MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,MenuButton } from '@chakra-ui/react'
  import {GiHamburgerMenu} from "react-icons/gi"
import { Skills } from "./skills";
import {useRef} from "react"
import { Tools } from "./Tools";
import { Projects } from "./projects";
import { Contact } from "./contact";
import background1 from "../assets/background6.svg"

function Main() {
  const { colorMode, toggleColorMode } = useColorMode('dark')
  
   const isDark = colorMode === "dark"      
   const [matches, setMatches] = React.useState(
    window.matchMedia("(min-width: 768px)").matches
)

React.useEffect(() => {
    window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches(e.matches));
}, []);
   

  return (
   
      <VStack p="5"className="App" backgroundColor="black" backgroundImage={!isDark && background1 } backgroundPosition="center" backgroundAttachment="fixed">
        <Flex w ="100%" position="fixed" pl="5" pr="5"> 
        
        <Heading color={isDark ? "#52057B": "#C689C6" } >Benazir</Heading>

        <Spacer></Spacer>
        {matches ? <Tabs variant='enclosed'  color={isDark ? "#52057B": "#FFABE1" }>
  <TabList>
    <Tab _selected={{ color: isDark ? "white": "#FFE6F7" }} onClick={()=>{window.scrollTo(
      {
        top : 0,
        behavior : "smooth"
      }
    )}}>Home</Tab>
    <Tab _selected={{ color: isDark ? "white": "#FFE6F7" }}  onClick={()=>{window.scrollTo(
      {
        top : 800,
        behavior : "smooth"
      }
    )}}>About</Tab>
    <Tab _selected={{ color: isDark ? "white": "#FFE6F7" }}  onClick={()=>{window.scrollTo(
      {
        top : 1600,
        behavior : "smooth"
      }
    )}}>Skills</Tab>
    <Tab _selected={{ color: isDark ? "white": "#FFE6F7" }}  onClick={()=>{window.scrollTo(
      {
        top : 2800,
        behavior : "smooth"
      }
    )}}>Project</Tab>
    <Tab _selected={{ color: isDark ? "white": "#FFE6F7" }}  onClick={()=>{window.open(
      "https://drive.google.com/drive/folders/12pBWjsLCsOa_6ahFUVTt23myEK-y4ZTe?usp=sharing"
    )}}>Resume</Tab>
  </TabList>
  
</Tabs> :<Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<GiHamburgerMenu />}
    variant='outline'
  />
  <MenuList>
    <MenuItem  onClick={()=>{window.scrollTo(
      {
        top : 0,
        behavior : "smooth"
      }
    )}}
    
    
    >
      Home
    </MenuItem>
    <MenuItem onClick={()=>{window.scrollTo(
      {
        top : 1220,
        behavior : "smooth"
      }
    )}}>
      About
    </MenuItem>
    <MenuItem  onClick={()=>{window.scrollTo(
      {
        top : 2720,
        behavior : "smooth"
      }
    )}}>
      Skills
    </MenuItem>
    <MenuItem  onClick={()=>{window.scrollTo(
      {
        top : 4700,
        behavior : "smooth"
      }
    )}}>
      Projects
    </MenuItem>
    <MenuItem  onClick={()=>{window.scrollTo(
      {
        top :8500,
        behavior : "smooth"
      }
    )}}>
      Contact
    </MenuItem>
  </MenuList>
</Menu>}
        {/*<IconButton ml={8}onClick={toggleColorMode} icon={isDark ? <FaSun style={{fill:"#52057B"}}/> : <FaMoon style={{fill:"darkorchid"}}/>}> Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</IconButton>*/}
        
        </Flex>
        
        <Header>
        
        </Header>
        
<Profile  ></Profile>

        
        <Typewriter
        options={{
          
          autoStart: true,
          loop: true,
        }}
  onInit={(typewriter) => {
    typewriter.typeString('<strong style="color: #52057B; font-size : 40px ">I am Benazir </strong>')
      
    .pauseFor(1500)
    .deleteChars(8)
    .typeString('<strong style="color: #52057B; font-size : 40px "> a Developer </strong>')
    .pauseFor(1000)
    .deleteAll()
    .typeString('<strong style="color: #52057B ; font-size : 40px ">I Love Coding </strong>')
    .deleteChars(7)
    .typeString('<strong style="color: #52057B; font-size : 40px ">Designing </strong>')
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
