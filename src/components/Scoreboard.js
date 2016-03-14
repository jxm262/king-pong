import React, { Component } from 'react'
import Player from './Player'


class Scoreboard extends Component {
    render() {

        const players = this.props.players.map((player, idx) => <Player player={player} idx={idx}/>)

        return (
            <ol className='scoreboard'>
                { players }
            </ol>
        )
    }
}

export default Scoreboard