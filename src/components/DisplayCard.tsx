import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import PersonCard from "./PersonCard";

const DisplayCard = () => {

  const { id } = useParams<{ id: string }>();

  const personList = useSelector((state: RootState) => state.person.personList);
  const personFound = personList.find(person => person.id === id);


  return (
    <Flex h='100vh' justifyContent='center' alignItems='center' flexDirection='column'>
      <PersonCard personInfo={personFound} />
    </Flex>
  )
}


export default DisplayCard;
