// First undefine 'd3draw' so we can easily reload this file.

//console.log("at the tone, the time will be: " + Date.now());

require.undef('d3draw');
define('d3draw', ['d3'], function (d3) {
  // this is just odd. javascript, why you do this to me?
  function drawgraph(container, graph, width=300, height=300) {
///////////////////////////////////////////////////////////
// boilerplate in here
///////////////////////////////////////////////////////////

    var linkWidth = d3.scaleLinear()
      .domain(d3.extent(graph.links.map(function(d){return d.weight;})))
      .range([0.5, 3]);

    var svg = d3.select(container).select("svg")
    if (svg.empty()) {
        svg = d3.select(container).append("svg")
          .attr("width", width)
          .attr("height", height);
    }

    var simulation = d3.forceSimulation()
        .force("center",  d3.forceCenter(width/2, height/2))
        .force("collide", d3.forceCollide()
              .radius(function(d){return d.radius+2})
        )
        .force("link",    d3.forceLink()
              .id(function(d){return d.id;})
              .distance(function(d){
                  var dist = 30
                  if(d.source.radius + d.target.radius > 0) {
                      // guarding against something that happened once. fishy.
                      dist = 2.5*(d.source.radius+d.target.radius)
                  }
                  if(d.source.community != d.target.community) {
                      dist *= 3
                  }
                  if(isNaN(dist)) {
                      return 30
                  } // more fish
                  return dist;
              })
        )
        .force("charge",  d3.forceManyBody()
              .strength(-10)
        );

    var link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(graph.links)
      .enter().append("line")
        .attr("stroke-width", function(d) { return linkWidth(d.weight); });

    var node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(graph.nodes)
      .enter().append("g")
    
    var circles = node.append("circle")
      .attr("r", function(d) {    return d.radius; })
      .attr("fill", function(d) { return d.color;  })
      .attr("stroke", function(d) { return d3.rgb(d.color).darker();  })
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

    node.append("title")
      .html(function(d) { return(
            "<strong>id: "+d.id+"</strong>"+
            "<br>pr: "+d.pr+
            "<br>ei: "+d.ei+
            "<br>community: "+d.community)
      });

    simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

    simulation.force("link")
      .links(graph.links);

    function ticked() {
      link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

      node
        .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
        })
  }

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }



///////////////////////////////////////////////////////////
// boilerplate in here
///////////////////////////////////////////////////////////
  } // function draw()
  return drawgraph;
});

