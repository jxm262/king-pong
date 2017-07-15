import React, { Component, PropTypes } from 'react';
import {
	line,
	timeFormat,
	timeParse,
	scaleLinear,
	scaleBand,
	scaleTime,
	min,
	max,
	extent,
	curveLinear,
	axisLeft,
	axisRight,
	axisBottom,
	area
} from 'd3';
import GridLines from './GridLines';
import Axis from './Axis';



//100 x 30

class BarChart extends Component {
		constructor(props) {
				super(props);

				this.state = {
						tooltip: {
								display: false,
								data: {
										key: '',
										value: ''
								}
						},
						width: 0
				};
		}

		render() {

				const n = 7;    //num samples
				const m = 2;    //num series

				var parseDate = timeParse("%m-%d-%Y");

				var data = [
						{x: '07-01-2017', y: 50, y1: 70},
						{x: '07-02-2017', y: 100, y2: 150},
						{x: '07-03-2017', y: 300, y2: 200},
						{x: '07-04-2017', y: 540, y2: 500},
						{x: '07-05-2017', y: 880, y2: 1000},
						{x: '07-06-2017', y: 1110, y2: 200},
						{x: '07-07-2017', y: 1500, y2: 490},
				].map((d) => {
						const x = {x: parseDate(d.x)};
						return {...d, ...x};
				});

				const margin = this.props.margin;
				const w = this.props.width - margin.left - margin.right;
				const h = this.props.height - margin.top - margin.bottom;

				console.log('--w ', w);
				console.log('--w ', w);

				const w2 = w - this.props.padding.left - this.props.padding.right;

				const xScale = scaleBand()
					.domain(data.map(function(d){
							return d.x;
					}))
 					.range([0, w2])
					.paddingInner(.7)
					.paddingOuter(.2);        //similar to old rangeRoundBand for outer padding



				const yScale = scaleLinear()
					.domain([0,1600])
					.range([h,0]);

				var transform = 'translate(' + margin.left + ',' + margin.top + ')';

				const rect = data.map(function(d, i) {
						const barWidth = xScale.bandwidth();

						return (
							<g>
									<rect
										key={`x1-${i}`}
										fill="#354961"
										x={xScale(d.x)}
										y={yScale(d.y)}
										height={h-yScale(d.y)}
										width={barWidth} />

									<rect
										key={`x2-${i}`}
										fill="#6a7685"
										x={xScale(d.x) + barWidth + 5}
										y={yScale(d.y)}
										height={h-yScale(d.y)}
										width={barWidth} />
							</g>
						)
				});

				const yAxis = axisLeft(yScale)
					.ticks(7);

				console.log('-- width ', xScale.bandwidth());

				const xAxis = axisBottom(xScale)
					.ticks(data.length)
					.tickFormat(timeFormat("%a %_m/%_d"));
				//	.tickValues(data.map(function(d,i){
				//			if(i>0)
				//					return d.date;
				//	}).splice(1))

				const yGrid = axisLeft(yScale)
					.ticks(data.length)
					.tickSizeInner(-w)
					.tickSizeOuter(0)
					.tickFormat('');
				//	.paddingInner(.7);


 				const transPadding = 'translate(' + this.props.padding.left + ',' + this.props.padding.top + ')';

				return (
					<div className="bar-chart-container">
							<div>hello</div>
							<div>
									<svg id={this.props.id} width={this.props.width} height={this.props.height}>
											<g transform={transPadding}>
													<g transform={transform}>
															<GridLines h={h} grid={yGrid} gridType="y" />
															<Axis h={h} axis={yAxis} dimension="y" />
															<Axis h={h} axis={xAxis} tx={ xScale.bandwidth() / 2 } ty={h} />
															{rect}
													</g>
											</g>
									</svg>
							</div>
					</div>
				);
		}
}

BarChart.defaultProps = {
		id: 'line-chart',
		width: 905,
		height: 302,
		padding: {
				top: 15,
				right: 15,
				bottom: 15,
				left: 15
		},
		margin: {
				top: 0,
				right: 30,
				bottom: 40,
				left: 30
		}
}

BarChart.propTypes = {
		id: PropTypes.string,
		width: PropTypes.number,
		height: PropTypes.number,
		margin: PropTypes.object,
		padding: PropTypes.object
}

export default BarChart;
