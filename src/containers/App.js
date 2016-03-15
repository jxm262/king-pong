import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectPlayer, updateScore } from '../redux/actions'
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

    updateScore = (player) => {
        this.props.dispatch(updateScore(player))
    }

    render() {
        return (
            <div>
                <div className='outer'>
                    <div className='logo'></div>
                    <h1 className='title'>ScoreBoard</h1>
                    <div className='subtitle'>Select a player to give them points</div>

                    <Scoreboard
                        players={ this.props.players }
                        selectPlayer={ this.selectPlayer } />

                    <SelectedPlayer
                        selectedPlayer={ _.find(this.props.players, {selected: true }) }
                        updateScore={ this.updateScore } />

                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { players: state.players }
}

export default connect(mapStateToProps)(App)
