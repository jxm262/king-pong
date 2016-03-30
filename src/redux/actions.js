import request from 'superagent'


export function selectPlayer(player) {
  return {
    type: 'SELECT_PLAYER',
    player
  }
}

function requestUpdateScore() {
  return {
    type: 'REQUEST_UPDATE_SCORE'
  }
}

function receieveUpdateScore(player) {
  return {
    type: 'RECEIVE_UPDATE_SCORE',
    player: player
  }
}

function requestFetchPlayers() {
  return {
    type: 'REQUEST_FETCH_PLAYERS'
  }
}

function receiveFetchPlayers(players) {
  return {
    type: 'RECEIVE_FETCH_PLAYERS',
    players: players
  }
}

export const fetchPlayers = () => {
  return function (dispatch) {
    dispatch(requestFetchPlayers())

    const storedPlayers = JSON.parse(localStorage.getItem('players'))

    if (storedPlayers) {
      dispatch(receiveFetchPlayers(storedPlayers))

    } else {
      return request
          .get('http://127.0.0.1:8080/playerData.json')
          .set('Accept', 'application/json')
          .end((err, response) => {
              dispatch(receiveFetchPlayers(response.body))
          })
    }
  }
}

export const updateScore = (player) => {
  return function (dispatch) {
    dispatch(requestUpdateScore())

    const updatedPlayer = Object.assign({}, player, {score: player.score+1})

    dispatch(receieveUpdateScore(updatedPlayer))
  }
}
