import './App.css';
import { useState } from 'react'
import PlayersForm from './components/PlayersForm'
import Game from './components/Game';
import { Box } from '@chakra-ui/layout';

const App = () => {
  const [gameState, setGameState] = useState(false)

  return (
    <Box  bg='aquamarine' height='100vh' p='30' className="App"> 
      {gameState ? <Game /> : <PlayersForm setGameState={setGameState}/>}
    </Box>
  );
}

export default App;
