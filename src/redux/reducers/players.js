import { combineReducers } from 'redux'
import * as actions from '../actions'


const defaultPlayers = [
    {name: 'Justin', score: 1},
    {name: 'Bob', score: 2},
    {name: 'Bill', score: 5}
]

function players(state = defaultPlayers, action) {
    switch (action.type) {
        case 'SELECT_PLAYER':
            debugger
            return state.map(player => {
                return player.name === action.player.name
                    ? Object.assign({}, action.player, {selected: true})
                    : player
            })
        default:
            return state
    }
}

//function posts(state = {
//    isFetching: false,
//    didInvalidate: false,
//    items: []
//}, action) {
//    switch (action.type) {
//        case INVALIDATE_REDDIT:
//            return Object.assign({}, state, {
//                didInvalidate: true
//            })
//        case REQUEST_POSTS:
//            return Object.assign({}, state, {
//                isFetching: true,
//                didInvalidate: false
//            })
//        case RECEIVE_POSTS:
//            return Object.assign({}, state, {
//                isFetching: false,
//                didInvalidate: false,
//                items: action.posts,
//                lastUpdated: action.receivedAt
//            })
//        default:
//            return state
//    }
//}

//function postsByReddit(state = { }, action) {
//    switch (action.type) {
//        case INVALIDATE_REDDIT:
//        case RECEIVE_POSTS:
//        case REQUEST_POSTS:
//            return Object.assign({}, state, {
//                [action.reddit]: posts(state[action.reddit], action)
//            })
//        default:
//            return state
//    }
//}

const rootReducer = combineReducers({
    players
})

export default rootReducer
