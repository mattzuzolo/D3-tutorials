var data = [30, 86, 168, 281, 303, 365];

//365 value (in data[] above ) is too big for the hard coded size of 320px.
//built-in D3 scale. Creates linear relationship between data and the output values/appearence (data translated to output values, which appear on webpage)
//var scale = d3.scale.linear()

//d3.scaleLinear syntax changed debtween D3 3.0 and 4.0
var scale = d3.scaleLinear()


  //pass in array. Domain is the values that'll go into the scale — the range of values
  //.domain([0,365])
  //values that'll put into the scale (from the data above)
  //This code ranges from 0 to max value in the array above.
  .domain([0, (Math.max.apply(Math,data))])




  //output values which data[] will be squeezed into. And will set width of bars.
  //.range([0, 300])
  //***output*** values that above values will be squeezed into.
  //cannot go above 320 max because CSS hard codes max as 320px
  .range([0, 300])


  //using select method on D3 Object (imported using script) —— trying to select div chart from CSS. Data viz will occur in "chart"
  d3.select(".chart")

    //select all divs inside of "chart" (none currently exist — yet instead returns empty selection).
    .selectAll("div")

    //passes in data (from the array above). Invoke Data method with data as an arguement. Everything after this method will be executed 6 times (for each of 6 items in the array)
    .data(data)

      //enter looks at DOM and creates placeholders for the six data points above.
      .enter()

      //passes placeholder to next method. Finally have a div to work with.
      .append("div")

      //basical styling. "d" in function(d) represents current element in the array.

      //.style only changes the appearence. Not data.
      //this code doesn't scale dynamically.
      //.style("width", function(d) { return d + "px"; })

      //this code scales
      .style("width", function(d) {return scale(d) + 'px'})

      //This line can manipulate values that appear on the bars.
      .text(function(d) { return '$' + d; });
