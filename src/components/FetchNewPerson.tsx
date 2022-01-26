import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import axios from 'axios';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPerson } from "../redux/personSlice";
import { v4 as uuidv4 } from "uuid";


const FetchNewPerson = () => {

  const defaultPerson = {
      name: {
        first: '',
        last: '',
      },
      picture: {
        large: '',
        medium: '',
        thumbnail: '',
      },
      location: {
        city: '',
        country: '',
      }
    };

  const [ newPerson, setNewPerson ] = useState(defaultPerson);
  const dispatch = useDispatch();
  


  const fetchData = () => {
    axios.get('https://randomuser.me/api/')
    .then((res: any) => {
      setNewPerson(res.data.results[0]);
    })
    .catch((err: any) => console.log(err));

  }

  const saveNewPerson = () => {
    const addPerson = {
      ...newPerson,
      id: uuidv4(),
    }
    dispatch(addNewPerson(addPerson))
    setNewPerson(defaultPerson);
  }

  return (
    <Flex bg='tomato' w='50%' h='100vh' justifyContent='center' alignItems='center' flexDirection='column'>
 
        <Button _focus={{boxShadow: "none", outline: 'none'}} colorScheme='whiteAlpha' variant='solid' onClick={() => fetchData()}>Fetch New User</Button>
        { newPerson.name.first &&  
        <Flex flexDirection='column' alignItems='center' >
          <Box  mt='10' >
            <Image mx="auto" src={newPerson.picture.large}  alt='User Image' /> 
            <Box p='6' textAlign='center'>
              <Text fontWeight='semibold'  textTransform='uppercase' >
              {`${newPerson.name.first}  ${newPerson.name.last}`} 
              </Text>
              <Text color='gray.500' fontSize='xs'>
                { `${newPerson.location.city}, ${newPerson.location.country} `}
              </Text>
            </Box>
          </Box>
          <Stack direction='row' spacing={4} align='center'>
            <Button onClick={() => setNewPerson(defaultPerson)} colorScheme='whiteAlpha' variant='outline'>
              Reject
            </Button>
            <Button border='none' onClick={() => saveNewPerson()} colorScheme='whiteAlpha' variant='solid'>
              Add
            </Button>
          </Stack>
          </Flex>
        }
    </Flex>
  )
}


export default FetchNewPerson;