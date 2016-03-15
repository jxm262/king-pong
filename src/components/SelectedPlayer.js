import React, { Component } from 'react'
import Details from './Details'
import Message from './Message'


class SelectedPlayer extends Component {
    render() {
debugger
        const content = (this.props.selectedPlayer)
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