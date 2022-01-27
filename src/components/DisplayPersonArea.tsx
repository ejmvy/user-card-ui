import { Flex } from "@chakra-ui/react"
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import PersonCard from "./PersonCard";



const DisplayPersonArea = () => {

  const personList = useSelector((state: RootState) => state.person.personList);

  return (
    <Flex h='100vh' overflow='auto' w='50%' flexDirection='column' p={4}>
      { personList.map((person, idx) => <PersonCard  personInfo={person}  key={idx} /> )}
      
    </Flex>
  )
}

export default DisplayPersonArea;