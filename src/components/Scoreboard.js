import React, { Component } from 'react'
import Player from './Player'


class Scoreboard extends Component {
    render() {

        const players = this.props.players.map((player, idx) => {
            return <Player player={player} idx={idx}  selectPlayer={ this.props.selectPlayer } />
        })

        return (
            <ol className='scoreboard'>
                { players }
            </ol>
        )
    }
}

export default Scoreboard