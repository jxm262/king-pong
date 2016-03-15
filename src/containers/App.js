import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { selectPlayer } from '../redux/actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
import Scoreboard from '../components/Scoreboard'
import SelectedPlayer from '../components/SelectedPlayer'


class App extends Component {
    constructor(props) {
        super(props)
    }

    selectPlayer = (player) => {
        this.props.dispatch(selectPlayer(player))
    }

    render() {
        const { selectedReddit, posts, isFetching, lastUpdated } = this.props
        return (
            <div>
                <div className='outer'>
                    <div className='logo'></div>
                    <h1 className='title'>ScoreBoard</h1>
                    <div className='subtitle'>Select a player to give them points</div>

                    <Scoreboard players={ this.props.players } selectPlayer={ this.selectPlayer } />

                    <SelectedPlayer selectedPlayer={ _.find(this.props.players, {selected: true }) } />

                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { players: state.players }
}

export default connect(mapStateToProps)(App)
