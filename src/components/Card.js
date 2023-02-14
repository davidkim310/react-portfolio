import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  const textWrapper = {
    display:"flex",
    flexDirection:"column",
    justifyContent: "space-around",
    margin:"1rem"
  }
  return (
  <HStack>
    <VStack style={{backgroundColor:"#fff", color:"#000", borderRadius:"1rem"}}>
      <Image src={imageSrc} style={{borderRadius:"1rem"}}></Image>
      <div style={textWrapper}>
        <Heading size="md">{title}</Heading>
        <Text style={{margin:"1rem 0",color:"grey"}} fontSize='sm'>{description}</Text>
        <Text as='b' fontSize='sm'>See more <FontAwesomeIcon icon={faArrowRight} size="1x" style={{marginLeft:".5rem"}}></FontAwesomeIcon></Text>
      </div>  
    </VStack>
  </HStack>
  )
};

export default Card;
