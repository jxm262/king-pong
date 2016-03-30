import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BarChart } from 'react-d3';

class Chart extends Component {
    render() {
        debugger
        const values = this.props.players.map(player => {
            return {x: player.name, y: player.score}
        })

        const data = [{
            name: 'Series A',
            values: values
        }]

        return (
            <div className="chart">
                <BarChart
                    data={data}
                    width={500}
                    height={200}
                    title='Score Chart'/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { players: state.players }
}

export default connect(mapStateToProps)(Chart)