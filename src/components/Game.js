import React from 'react'
import { useSelector } from 'react-redux'

const Game = () => {
    const players = useSelector(state => state.players)
    const pot = useSelector(state => state.pot)

    return (
        <div>
            <p>{(JSON.stringify(players))}</p>
            <p>{pot}</p>
        </div>
    )
}

export default Game
