import _ from 'lodash'
import { combineReducers } from 'redux'
import * as actions from '../actions'

const initialState = [
    { "name": "Justin", "score": 1 },
    { "name": "Bob",    "score": 2 },
    { "name": "Bill",   "score": 5 }
]

function players(state = initialState, action) {
    debugger
    switch (action.type) {
        case 'SELECT_PLAYER':
            return state.map(player => {
                return player.name === action.player.name
                    ? Object.assign({}, action.player, {selected: true})
                    : Object.assign({}, player, {selected: false})
            })

        case 'REQUEST_UPDATE_SCORE':
            //TODO make a loading spinner
            return state

        case 'RECEIVE_UPDATE_SCORE':
            const newState = state.map(player => {
                return player.name === action.player.name
                    ? Object.assign({}, action.player, {selected: false})
                    : Object.assign({}, player, {selected: false})
            })

            localStorage.setItem('players', JSON.stringify(newState))

            return newState

        case 'RECEIVE_FETCH_PLAYERS':
            return action.players

        default:
            return state
    }
}

const rootReducer = combineReducers({
    players
})

export default rootReducer
