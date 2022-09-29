import React from 'react'
import { Flex , VStack , Heading} from "@chakra-ui/layout"
import { IconButton } from "@chakra-ui/button";
import { FaSun,FaMoon,FaHamburger } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import {useColorMode} from '@chakra-ui/color-mode'
import { Spacer } from "@chakra-ui/react";
import { Header } from "./Header";
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
function Main() {
  const { colorMode, toggleColorMode } = useColorMode()
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
    
      <VStack p="5"className="App">
        <Flex w ="100%" position="absolute" pl="5" pr="5"> 
        
        <Heading color="cyan" >Benazir</Heading>

        <Spacer></Spacer>
        {matches ? <Tabs variant='enclosed' color={"cyan"}>
  <TabList>
    <Tab onClick={()=>{window.scrollTo(
      {
        top : 0,
        behavior : "smooth"
      }
    )}}>Home</Tab>
    <Tab onClick={()=>{window.scrollTo(
      {
        top : 800,
        behavior : "smooth"
      }
    )}}>About</Tab>
    <Tab onClick={()=>{window.scrollTo(
      {
        top : 1600,
        behavior : "smooth"
      }
    )}}>Skills</Tab>
    <Tab onClick={()=>{window.scrollTo(
      {
        top : 2800,
        behavior : "smooth"
      }
    )}}>Project</Tab>
    <Tab onClick={()=>{window.open(
      "https://drive.google.com/file/d/1RKoiPYRbcKQaODzLUVapr8o4FJAQ1Bdi/view?usp=sharing"
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
    )}}>
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
    typewriter.typeString('<strong style="color: #27ae60 ; font-size : 40px ">I am benazir </strong>')
      
    .pauseFor(1500)
    .deleteChars(8)
    .typeString('<strong style="color: #27ae60 ; font-size : 40px "> a Developer </strong>')
    .pauseFor(1000)
    .deleteAll()
    .typeString('<strong style="color: #27ae60 ; font-size : 40px ">I Love coding </strong>')
    .deleteChars(7)
    .typeString('<strong style="color: #27ae60 ; font-size : 40px ">Designing </strong>')
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
