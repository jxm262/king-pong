import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
	select,
	scaleLinear,
	scaleBand
} from 'd3';

class GridLines extends Component {
		constructor(props) {
				super(props);

				this.state = {};
		}

		render() {
				var translate = "translate(0,"+(this.props.h)+")";
				return (
					<g className="y-grid" transform={this.props.gridType=='x'?translate:""} className="grid-line" ref={(node) => { this.node = node; }} >
					</g>
				);
		}

		renderGrid() {
				var node = this.node;
				select(node).call(this.props.grid);

		}

		componentDidUpdate() {
				this.renderGrid();
		}

		componentDidMount() {
				this.renderGrid();
		}
}

GridLines.propTypes = {
		h: PropTypes.number,
		grid: PropTypes.func,
		gridType: PropTypes.oneOf(['x','y'])
};


export default GridLines;

