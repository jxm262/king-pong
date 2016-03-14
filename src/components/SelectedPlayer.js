import React, { Component } from 'react'


class Details extends Component {
    render() {
        <div className='details'>
            <div className='name'>{ this.props.player.name }</div>
            <button className='inc'>Add a win</button>
        </div>
    }
}

class Message extends Component {
    render() {
        return (
            <div className='message'>Click a player to select</div>
        )
    }
}

class SelectedPlayer extends Component {
    render() {
        const content = this.props.selectedPlayer
            ? <Details player={ this.props.selectedPlayer } />
            : <Message />

        return (
            <div>
                { content }
            </div>
        )
    }
}

export default SelectedPlayer