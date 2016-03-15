import React, { Component } from 'react'


class Details extends Component {
    render() {
        return (
            <div className='details'>
                <div className='name'>{ this.props.player.name }</div>
                <button className='inc'>Add a win</button>
            </div>
        )
    }
}

export default Details