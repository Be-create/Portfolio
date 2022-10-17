import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Flex,Box, useColorMode } from '@chakra-ui/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("maykqjln");
  const [matches, setMatches] = React.useState(
    window.matchMedia("(min-width: 768px)").matches
)
const { colorMode } = useColorMode()

    const isDark = colorMode === "dark";
React.useEffect(() => {
    window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches(e.matches));
}, []);
  
  
  if (state.succeeded) {
      return <p style={{color : isDark ? "#52057B": "#FFE6F7" }}>Thanks for contacting me!</p>;
  }
  
  return (
      <Box w={matches ? 'container.lg' : '90%'} >
        <form style={{ width: "100%",margin:"20px",padding:"20px"}} onSubmit={handleSubmit}>
        <input
        id="name"
        type="text" 
        name="name"
        placeholder='Please enter your name'
        style={{display : "block",width : "80%", margin:"auto", marginBottom :"25px",height:"40px",border : isDark ? "1px solid #52057B": "1px solid #FFE6F7", backgroundColor :isDark ? "#892CDC" : "#FFABE1" }}
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Enter your email Address'
        style={{display : "block",width : "80%", margin:"auto", marginBottom :"25px",height:"40px", border : isDark ? "1px solid #52057B": "1px solid #FFE6F7", backgroundColor :isDark ? "#892CDC" : "#FFABE1" }}
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder ="Please enter your massage"
        style={{display : "block", width : "80%", margin:"auto",height :"100px",color:"black",border : isDark ? "1px solid #52057B": "1px solid #FFE6F7", backgroundColor :isDark ? "#892CDC" : "#FFABE1" }}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} style={{display : "block",margin : "auto",marginTop : "30px",backgroundColor : isDark ? "#892CDC" : "#FFABE1",padding : "10px",borderRadius : "5px"}}>
        Submit
      </button>
    </form>
      </Box>
  );
}
export {ContactForm}