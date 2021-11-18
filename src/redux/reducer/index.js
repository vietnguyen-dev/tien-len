const SET_PLAYERS = "SET_PLAYERS";

const defaultState = {
    players: [],
    pot: 0
}

const gameReducer = (state = defaultState, action) => {
    switch (action.type) {
      case SET_PLAYERS:
        return { ...state, players: [action.payload] };
    default:
        return state
    }
}

export default gameReducer