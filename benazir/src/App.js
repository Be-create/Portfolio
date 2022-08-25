import { Flex , VStack , Heading} from "@chakra-ui/layout"
import { IconButton } from "@chakra-ui/button";
import { FaSun,FaMoon ,FaInstagram,FaGithub,FaFacebook } from 'react-icons/fa'
import {useColorMode} from '@chakra-ui/color-mode'
import { Spacer } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Profile } from "./components/profile";
import { Social } from "./components/Social";
function App() {
  const { colorMode, toggleColorMode } = useColorMode()
   const isDark = colorMode === "dark"      
  return (
    <div className="App">
      <VStack p="5">
        <Flex w ="100%"> 
        
        <Heading color="cyan.400">Benazir</Heading>

        <Spacer></Spacer>


        <IconButton ml={8}onClick={toggleColorMode} icon={isDark ? <FaSun/> : <FaMoon/>}> Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</IconButton>
        <IconButton ml={2} icon={<FaFacebook/>}></IconButton>
        <IconButton ml={2}icon={<FaInstagram/>}></IconButton>
        <IconButton ml={2}icon={<FaGithub/>}></IconButton>
        </Flex>
        
        <Header></Header>
        <Profile></Profile>
        <Social></Social>
        
      </VStack>
      
    </div>
  );
}

export default App;
