var margin = {
    top: 30,
    right: 0,
    bottom: 130,
    left: 40
  },
  width = 600 - margin.left - margin.right,
  height = 600 - margin.top - margin.bottom;

// elemento para parsear info de data ref: http://bit.ly/2bQbu6H
var parseDate = d3.time.format("%x").parse;

var xValue = function(d) {
    return +d.dataus;
  }, 
  xScale = d3.time.scale()
              .domain([05/01/2016, 08/31/2016])
              .range([0,width]), 
  xMap = function(d) {
    return xScale(xValue(d));
  }, 
  xAxis = d3.svg.axis()
          .scale(xScale)
          .orient("bottom")
          .ticks(3)
          .tickFormat(d3.time.format('%d/%m'));

// setup y
var yValue = function(d) {
    return d.headlines;
  }, // data -> value
  yScale = d3.scale.linear().range([height, -20]), // value -> display
  yMap = function(d) {
    return yScale(yValue(d));
  }, // data -> display
  yAxis = d3.svg.axis().scale(yScale).orient("left");

// setup fill color
var cValue = function(d) {
    return d.categoria;
  },
    
    //escala de cores basica D3
  color = d3.scale.category20();
    
// add the graph canvas to the body of the webpage
var svg = d3.select("#scatter").append("svg")
//  .attr("width", width + margin.left + margin.right)
//  .attr("height", height + margin.top + margin.bottom)
  .attr("viewBox", "0 0 650 500")
  .append("g")
  .style("font", "14px Inconsolata")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//adicionar linha de referencia
//svg.append("rect")
//  .attr("x", 482)
//  .attr("y", 10)
//  .attr("width", 1)
//  .style("fill", "#ababab")
//  .attr("height", height);

//adicionar texto se precisar
//svg.append("text")
//.attr("x", 270)
//  .attr("y", 310)
//  .attr("width", 1)
//  .style("fill", "#000")
//  .attr("height", height)
//  .text("");

// tooltip
var tooltip = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

// load data
d3.csv("../dados/dados_cat.csv", 
       function(error, data) {

  // CSV pra número
  data.forEach(function(d) {
    d.dataus = parseDate(d.dataus);
    d.headlines = +d.headlines;
  });

  // evita interpolação de eixos
  xScale.domain([d3.min(data, xValue) - 1, d3.max(data, xValue) + 1]);
  yScale.domain([d3.min(data, yValue) - 1, d3.max(data, yValue) + 1]);

  // x
  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .style("fill", "#fff")
    .style("font", "16px Inconsolata")
    .call(xAxis)
    .append("text")
    .attr("class", "label")
    .attr("x", width)
    .attr("y", -6)
    .style("fill", "#fff")
    .style("text-anchor", "end")
    .style("font", "16px Inconsolata")
    .text("");

  // function for the y grid lines
//function make_y_axis() {
//  return d3.svg.axis()
 //     .scale(y)
  //    .orient("left")
  //    .ticks(5)
//}
  
  // y
  svg.append("g")
    .attr("class", "y axis")
    .style("fill", "#fff")
    .style("font", "16px Inconsolata")
    .call(yAxis)
    .append("text")
    .attr("class", "label")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    
    .text("Matérias publicadas");

  // pontos
  svg.selectAll(".dot")
    .data(data)
    .enter().append("circle")
    .attr("class", "dot")
    .attr("r", 6)
    .attr("cx", xMap)
    .attr("cy", yMap)
    .style("opacity", ".8")
    .style("fill", function(d) {
      return color(cValue(d));
    })
    .on("mouseover", function(d) {
      tooltip.transition()
        .duration(50)
        .attr("min-height", "120px")
        .style("opacity", 1)
        .style("background-color", "rgba(0,0,0,.8)")
        .style("font", "14px Inconsolata")
        .style("padding", "10px");

      tooltip.html("Categoria:<strong> " + d.categoria + "</strong> <br/>" + "Data:<strong> "+ d.data + "</strong>" + "<br/>" +
          "Matérias:<strong> " + yValue(d) + "</strong>")
        .style("left", (d3.event.pageX + 5) + "px")
        .style("top", (d3.event.pageY - 28) + "px")
        .style("bottom", (d3.event.pageY - 28) + "px");
    })
    .on("mouseout", function(d) {
      tooltip.transition()
        .duration(500)
        .style("opacity", 0);
    });
  

  // legenda
  var legend = svg.selectAll(".legend")
    .data(color.domain())
    .enter().append("g")
    .attr("class", "legend")
    .style("font", "18px Inconsolata")
    .attr("transform", function(d, i) {
      return "translate(0," + i * 20 + ")";
    });

  // retângulos da legenda
  legend.append("rect")
    .attr("x", width - 18)
    .attr("width", 18)
    .attr("height", 18)
    .style("fill", color);

  // texto da legenda
  legend.append("text")
    .attr("x", width - 24)
    .attr("y", 9)
    .attr("dy", ".35em")
    .style("fill", "#fff")
    .style("font", "16px Inconsolata")
    .style("text-anchor", "end")
    .text(function(d) {
      return d;
    })
});

