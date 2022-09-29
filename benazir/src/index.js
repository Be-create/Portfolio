import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import { BrowserRouter } from 'react-router-dom';

import {App} from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <ChakraProvider>
        <ColorModeScript initialColorMode='dark' />
        <App />
    </ChakraProvider>
    
    </BrowserRouter>
    


);


