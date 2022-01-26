import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { removePerson } from "../redux/personSlice";
import { PersonState } from "../types";


const PersonCard = ({ personInfo }: any) => {

  const dispatch = useDispatch();


  const removePersonId = () => {
    console.log('current', personInfo.name.first);
    const id = personInfo.id;
    dispatch(removePerson({ id }));
  }

  return (

    <Box boxShadow='base' rounded='md' my={4}>
      <Flex>
        <Flex borderLeftRadius='8px' p={4}  bg='tomato' w='30%' flexDirection='column' alignItems='center'>
          <Box fontSize='xs' color='white' fontWeight='semibold'>
            <img width='100%'  src={personInfo.picture.medium} alt='User Person Pic' />
            <Text mt={4} >{ personInfo.phone }</Text>
            <Text mt={2} >{ personInfo.nat }</Text>
          </Box>

        </Flex>
        <Box p={4} w='100%'>

          <Flex justifyContent='space-between' alignItems='center' fontWeight='semibold' color='tomato'>
            <Flex w='50%'  justifyContent='space-between' alignItems='center' >
              <Text fontSize='xl' >{ `${personInfo.name.first} ${personInfo.name.last}`  }</Text>
              <Text fontSize='lg' >{ personInfo.dob.age }</Text>
            </Flex>

            <Button _focus={{boxShadow: "none", outline: 'none'}} onClick={() => removePersonId()} leftIcon={<DeleteIcon />} colorScheme='tomato' variant='ghost'></Button>            

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