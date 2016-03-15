import React, { Component } from 'react'
import Details from './Details'
import Message from './Message'


class SelectedPlayer extends Component {
    render() {
        const content = (this.props.selectedPlayer)
            ? <Details player={ this.props.selectedPlayer } updateScore={ this.props.updateScore } />
            : <Message />

        return (
            <div>
                { content }
            </div>
        )
    }
}

export default SelectedPlayer