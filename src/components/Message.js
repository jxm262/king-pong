import React, { Component } from 'react'
import * as actions from '../redux/actions'


class Message extends Component {
    render() {
        return (
            <div className='message'>
                Click a player to select
            </div>
        )
    }
}

export default Message