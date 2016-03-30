import _ from 'lodash'
import React, { Component } from 'react'
import Player from './Player'


class Scoreboard extends Component {
    render() {

        const players = _
            .chain(this.props.players)
            .sortBy('score')
            .map((player, idx) => {
                return <Player player={player} idx={idx} selectPlayer={ this.props.selectPlayer }/>
            })
            .reverse()
            .value()

        return (
            <ol className='scoreboard'>
                { players }
            </ol>
        )
    }
}

export default Scoreboard