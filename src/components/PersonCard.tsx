import { Box, Flex, Text } from "@chakra-ui/react";
import { PersonState } from "../types";


const PersonCard = ({ personInfo }: any) => {
  return (

    <Box h='250px'  boxShadow='base' rounded='md' my={4}>
      <Flex>
        <Flex borderLeftRadius='8px' p={4}  bg='tomato' w='30%' flexDirection='column'>
          <Box  borderColor='blue'>
            <img  src={personInfo.picture.medium} alt='User Person Pic' />
            <Text mt={4} fontSize='xs'>{ personInfo.phone }</Text>
            <Text mt={2} fontSize='xs'>{ personInfo.nat }</Text>
          </Box>

        </Flex>
        <Box p={4} w='100%'>

          <Flex justifyContent='space-between' alignItems='center' fontWeight='semibold' color='tomato'>
            <Text fontSize='xl' >{ `${personInfo.name.first} ${personInfo.name.last}`  }</Text>
            <Text fontSize='lg' >{ personInfo.dob.age }</Text>

          </Flex>
          <Flex flexDirection='column' fontSize='xs'>
            <Text fontSize='sm' color='gray.500'>{ personInfo.email }</Text>
            <Text  mt={4}>{ `${personInfo.location.street.number } ${personInfo.location.street.name }` }</Text> 
            <Text>{ personInfo.location.city }</Text>
            <Text >{ personInfo.location.country }</Text>

            <Flex alignItems='center' mt='4'>
              <Text fontSize='xs' fontWeight='semiBold' color='gray.500' mr={4}>Registered</Text>
              <Text>{ ` ${personInfo.registered.age} years ago` }</Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
    
  )
}


export default PersonCard;