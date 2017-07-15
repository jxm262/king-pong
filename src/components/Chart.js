import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import LineChart from './LineChart';
import BarChart from './BarChart';


class Chart extends Component {
    render() {
        const values = this.props.players.map(player => {
            return {x: player.name, y: player.score}
        })

        const data = [{
            name: 'Series A',
            values: values
        }]

        return (
            <div className="chart">
                <LineChart id="test-id" hello="thing" />
                <BarChart id="bar-id" hello="thing" />
            </div>
        )
    }
}
//<BarChart
//    data={data}
//    width={500}
//    height={200}
//    title='Score Chart'/>

function mapStateToProps(state) {
    return { players: state.players }
}

export default connect(mapStateToProps)(Chart)