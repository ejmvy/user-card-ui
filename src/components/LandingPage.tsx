import { Flex } from "@chakra-ui/react"
import DisplayPersonArea from "./DisplayPersonArea"
import FetchNewPerson from "./FetchNewPerson"


const LandingPage = () => {
  console.log('landing');
  return (
    <Flex>
      <FetchNewPerson />
      <DisplayPersonArea />

    </Flex>
  )
}

export default LandingPage;