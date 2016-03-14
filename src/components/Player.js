import React, { Component } from 'react'


class Player extends Component {
    render() {
        return (
            <li className='player' idx={ this.props.idx }>
                <span className='name'>{ this.props.player.name }</span>
                <span className='score'>{ this.props.player.score }</span>
            </li>
        )
    }
}

export default Player