import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
	select,
	scaleLinear,
	scaleBand
} from 'd3';

class Axis extends Component {
		constructor(props) {
				super(props);

				this.state = {};
		}

		render() {
				const translate = `translate(${this.props.tx}, ${this.props.ty})`;

				return (
					<g transform={translate} className="axis" ref={(node) => { this.node = node; }} />
				);
		}

		renderAxis() {
			select(this.node).call(this.props.axis);
		}

		componentDidUpdate() {
				this.renderAxis();
		}

		componentDidMount() {
				this.renderAxis();
		}
}

Axis.defaultProps = {
		h: 0,
		tx: 0,
		ty: 0
}

Axis.propTypes = {
		axis: PropTypes.func.isRequired,
		h: PropTypes.number,
		tx: PropTypes.number,
		ty: PropTypes.number
};


export default Axis;

