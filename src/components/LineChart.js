import React, { Component, PropTypes } from 'react';
import {
	axisLeft,
	axisBottom,
	line,
	timeFormat,
	timeParse,
	scaleLinear,
	scaleTime,
	min,
	max,
	extent,
	curveLinear,
	area
} from 'd3'


//100 x 30

class LineChart extends Component {
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

				var parseDate = timeParse("%m-%d-%Y");

				var data = [
						{x: '07-01-2017', y: 0},
						{x: '07-02-2017', y: 10},
						{x: '07-03-2017', y: 30},
						{x: '07-04-2017', y: 54},
						{x: '07-05-2017', y: 88},
						{x: '07-06-2017', y: 111},
						{x: '07-07-2017', y: 150},
				].map((d) => {
						const x = {x: parseDate(d.x)};
						return {...d, ...x};
				});

				console.log('data ', data);

				const margin = this.props.margin;
				const w = this.props.width - margin.left - margin.right;
				const h = this.props.height - margin.top - margin.bottom;


				const yExtent = extent(data, (d) => {
						return d.y;
				});

				const xExtent = extent(data, (d) => {
						return d.x;
				});

				const [xMin, xMax] = xExtent;
				const [yMin, yMax] = yExtent;

				var xScale = scaleTime()
					.domain(extent(data, function (d) {
							return d.x;
					}))
					.rangeRound([0, w]);

				var yScale = scaleLinear()
					.domain(yExtent)
					.range([h, 0]);

				var yAxis = axisLeft(yScale)
					.ticks(5);

				var xAxis = axisBottom(xScale)
					.tickValues(data.map(function (d, i) {
							if (i > 0)
									return d.x;
					}).splice(1))
					.ticks(4);

				var interpolations = [
						curveLinear,
						"step-before",
						"step-after",
						"basis",
						"basis-closed",
						"cardinal",
						"cardinal-closed"];

				var lineFn = line()
					.x(function (d) {
							return xScale(d.x);
					})
					.y(function (d) {
							return yScale(d.y);
					}).curve(interpolations[0]);


				const areaFn = area()
					.x(function (d) {
							return xScale(d.x);
					})
					.y0(h)
					.y1(function (d) {
							return yScale(d.y);
					});


				var transform = 'translate(' + margin.left + ',' + margin.top + ')';


				return (
					<div>
							<div>hello</div>
							<div>

									<svg id={this.props.id} width={this.props.width} height={this.props.height}>
											<g transform={transform}>
													<path className="line" d={lineFn(data)}/>
													<path className="area" d={areaFn(data)}/>
													<circle className="dot"
											        r="2"
											        cx={xScale(xMax)}
											        cy={yScale(yMax)}
											        fill="#ff9d0d"
													/>
											</g>
									</svg>
							</div>
					</div>
				);
		}
}

//<g transform={transform}>
//
//		<Axis h={h} axis={yAxis} axisType="y" />
//		<Axis h={h} axis={xAxis} axisType="x"/>
//
//		<path className="line shadow" d={line(data)} strokeLinecap="round"/>
//
//		<Dots data={data} x={x} y={y} showToolTip={this.showToolTip} hideToolTip={this.hideToolTip}/>
//</g>

LineChart.defaultProps = {
		id: 'line-chart',
		width: 200,
		height: 50,
		margin: {
				top: 5,
				right: 5,
				bottom: 5,
				left: 5
		}
}

LineChart.propTypes = {
		id: PropTypes.string,
		width: PropTypes.number,
		height: PropTypes.number,
		margin: PropTypes.object
}

export default LineChart;
