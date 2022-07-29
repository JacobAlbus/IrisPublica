import React from 'react';
import * as d3 from "d3";
import * as topojson from "topojson" 

export default class CarMap extends React.Component {
  constructor(props) {
    super(props);

    this.myReference = React.createRef();
    this.svgReference = React.createRef();
  }

  componentDidMount() {
    this.update();
  }

  update() {
    var svg = d3.select(this.svgReference.current);
    var path = d3.geoPath();

    d3.json("https://d3js.org/us-10m.v1.json").then(function(us) {
      svg.style("width", 960).style("height", 600);

      svg.append("g")
          .attr("class", "counties")
        .selectAll("path")
        .data(topojson.feature(us, us.objects.counties).features)
        .enter().append("path")
          .attr("d", path);

      svg.append("path")
          .attr("class", "county-borders")
          .attr("d", path(topojson.mesh(us, us.objects.counties, function(a, b) { return a !== b; })));
    }).catch(function(error) {
      if (error) throw error;
    });
  }

  render() {
    return (
      <svg ref={this.svgReference}></svg>
    );
  }
}