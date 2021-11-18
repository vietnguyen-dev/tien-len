import { Box, Button } from '@chakra-ui/layout'
import React from 'react'

const PlayersForm = ({setGameState}) => {
    return (
        <Box bg='grey' w='50vw' height='50vh'>
            <button onClick={() => setGameState(true)}>PLAY</button>
        </Box>
    )
}

export default PlayersForm
