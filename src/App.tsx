import { Flex } from '@chakra-ui/react';
import './App.css';
import FetchNewPerson from './components/FetchNewPerson';
import DisplayPersonArea from './components/DisplayPersonArea';

function App() {
  return (
    <Flex>
      <FetchNewPerson />
      <DisplayPersonArea />
    </Flex>
  );
}

export default App;
