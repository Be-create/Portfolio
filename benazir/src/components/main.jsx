import { Flex , VStack , Heading} from "@chakra-ui/layout"
import { IconButton } from "@chakra-ui/button";
import { FaSun,FaMoon ,FaInstagram,FaGithub,FaFacebook } from 'react-icons/fa'
import {useColorMode} from '@chakra-ui/color-mode'
import { Spacer } from "@chakra-ui/react";
import { Header } from "./Header";
import { Profile } from "./profile";
import { Social } from "./Social";

function Main() {
  const { colorMode, toggleColorMode } = useColorMode()
   const isDark = colorMode === "dark"      
  return (
    <div className="App">
      <VStack p="5">
        <Flex w ="100%"> 
        
        <Heading color="cyan.400">Benazir</Heading>

        <Spacer></Spacer>
       <Heading ml={2}>Home</Heading>
       <Heading ml={2}>About</Heading>
       <Heading ml={2}>Skills</Heading>
       <Heading ml={2}>Projects</Heading>
       <Heading ml={2}>Resume</Heading>
        <IconButton ml={8}onClick={toggleColorMode} icon={isDark ? <FaSun/> : <FaMoon/>}> Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</IconButton>
        
        </Flex>
        
        <Header>
        
        </Header>
        <Profile></Profile>
        <Social></Social>
        
      </VStack>
      
    </div>
  );
}

export default Main;
