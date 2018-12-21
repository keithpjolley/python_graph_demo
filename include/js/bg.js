require.undef('bg');
define('bg', ['d3'], function (d3) {
  
  function dobg() {
  
    var graph, kahuna, t, chartDiv, svg, oktodraw = false;
  
    function doinit(){
  
      graph = {
        "directed": false,
        "multigraph": false,
        "graph": {
          "name": "Zachary's Karate Club"
        },
        "nodes": [
          {
            "club": "Mr. Hi",
            "pr": 0.09700181758983706,
            "community": 0,
            "ei": 0.35549144452456666,
            "color": "#ff0000",
            "size": 674.2793395041389,
            "radius": 9.699925627548286,
            "id": 0
          },
          {
            "club": "Mr. Hi",
            "pr": 0.052878391037427,
            "community": 0,
            "ei": 0.2659599195524917,
            "color": "#ff0000",
            "size": 384.4798149704916,
            "radius": 6.318931174655735,
            "id": 1
          },
          {
            "club": "Mr. Hi",
            "pr": 0.05707842304763673,
            "community": 0,
            "ei": 0.3171925044864318,
            "color": "#ff0000",
            "size": 412.0653262212808,
            "radius": 6.640762139248276,
            "id": 2
          },
          {
            "club": "Mr. Hi",
            "pr": 0.035860643223064786,
            "community": 0,
            "ei": 0.2111797203778902,
            "color": "#ff0000",
            "size": 272.70845878677045,
            "radius": 5.014932019178989,
            "id": 3
          },
          {
            "club": "Mr. Hi",
            "pr": 0.021979406974834498,
            "community": 1,
            "ei": 0.07596881818306882,
            "color": "#7fff00",
            "size": 181.5374872871275,
            "radius": 3.951270685016487,
            "id": 4
          },
          {
            "club": "Mr. Hi",
            "pr": 0.02911334166344221,
            "community": 1,
            "ei": 0.07948304511709929,
            "color": "#7fff00",
            "size": 228.39266247069864,
            "radius": 4.497914395491484,
            "id": 5
          },
          {
            "club": "Mr. Hi",
            "pr": 0.029113341663442205,
            "community": 1,
            "ei": 0.0794830451170993,
            "color": "#7fff00",
            "size": 228.3926624706986,
            "radius": 4.497914395491483,
            "id": 6
          },
          {
            "club": "Mr. Hi",
            "pr": 0.02449075803950918,
            "community": 0,
            "ei": 0.17095974804479624,
            "color": "#ff0000",
            "size": 198.03186230161828,
            "radius": 4.143705060185546,
            "id": 7
          },
          {
            "club": "Mr. Hi",
            "pr": 0.029765339186167028,
            "community": 2,
            "ei": 0.22740390712539998,
            "color": "#00ffff",
            "size": 232.6749357854951,
            "radius": 4.547874250830777,
            "id": 8
          },
          {
            "club": "Officer",
            "pr": 0.014308950284462798,
            "community": 0,
            "ei": 0.10267425072358632,
            "color": "#ff0000",
            "size": 131.1584737899485,
            "radius": 3.363515527549399,
            "id": 9
          },
          {
            "club": "Mr. Hi",
            "pr": 0.021979406974834494,
            "community": 1,
            "ei": 0.07596881818306876,
            "color": "#7fff00",
            "size": 181.53748728712748,
            "radius": 3.951270685016487,
            "id": 10
          },
          {
            "club": "Mr. Hi",
            "pr": 0.009564916863537146,
            "community": 0,
            "ei": 0.05285569749352128,
            "color": "#ff0000",
            "size": 100,
            "radius": 3,
            "id": 11
          },
          {
            "club": "Mr. Hi",
            "pr": 0.014645186487916188,
            "community": 0,
            "ei": 0.08425462871671362,
            "color": "#ff0000",
            "size": 133.3668492382163,
            "radius": 3.38927990777919,
            "id": 12
          },
          {
            "club": "Mr. Hi",
            "pr": 0.02953631497720298,
            "community": 0,
            "ei": 0.22647272014248113,
            "color": "#ff0000",
            "size": 231.17072108481588,
            "radius": 4.530325079322852,
            "id": 13
          },
          {
            "club": "Officer",
            "pr": 0.014535161524273824,
            "community": 2,
            "ei": 0.10140326218952467,
            "color": "#00ffff",
            "size": 132.64421310948057,
            "radius": 3.3808491529439397,
            "id": 14
          },
          {
            "club": "Officer",
            "pr": 0.014535161524273824,
            "community": 2,
            "ei": 0.10140326218952464,
            "color": "#00ffff",
            "size": 132.64421310948057,
            "radius": 3.3808491529439397,
            "id": 15
          },
          {
            "club": "Mr.  Hi",
            "pr": 0.016785378110253487,
            "community": 1,
            "ei": 0.02363562810459121,
            "color": "#7fff00",
            "size": 147.42347545756797,
            "radius": 3.553273880338293,
            "id": 16
          },
          {
            "club": "Mr. Hi",
            "pr": 0.01455885977424349,
            "community": 0,
            "ei": 0.09239953819570244,
            "color": "#ff0000",
            "size": 132.79986152824813,
            "radius": 3.3826650511628946,
            "id": 17
          },
          {
            "club": "Officer",
            "pr": 0.014535161524273824,
            "community": 2,
            "ei": 0.10140326218952464,
            "color": "#00ffff",
            "size": 132.64421310948057,
            "radius": 3.3808491529439397,
            "id": 18
          },
          {
            "club": "Mr. Hi",
            "pr": 0.01960441671193729,
            "community": 0,
            "ei": 0.14791251029338742,
            "color": "#ff0000",
            "size": 165.93872031144576,
            "radius": 3.7692850703002003,
            "id": 19
          },
          {
            "club": "Officer",
            "pr": 0.014535161524273824,
            "community": 2,
            "ei": 0.1014032621895247,
            "color": "#00ffff",
            "size": 132.64421310948057,
            "radius": 3.3808491529439397,
            "id": 20
          },
          {
            "club": "Mr. Hi",
            "pr": 0.01455885977424349,
            "community": 0,
            "ei": 0.09239953819570249,
            "color": "#ff0000",
            "size": 132.79986152824813,
            "radius": 3.3826650511628946,
            "id": 21
          },
          {
            "club": "Officer",
            "pr": 0.014535161524273824,
            "community": 2,
            "ei": 0.10140326218952472,
            "color": "#00ffff",
            "size": 132.64421310948057,
            "radius": 3.3808491529439397,
            "id": 22
          },
          {
            "club": "Officer",
            "pr": 0.03152091531163227,
            "community": 3,
            "ei": 0.15011857186115285,
            "color": "#7f00ff",
            "size": 244.2054348014348,
            "radius": 4.682396739350072,
            "id": 23
          },
          {
            "club": "Officer",
            "pr": 0.021075455001162945,
            "community": 3,
            "ei": 0.057052440541165664,
            "color": "#7f00ff",
            "size": 175.60039507466968,
            "radius": 3.882004609204479,
            "id": 24
          },
          {
            "club": "Officer",
            "pr": 0.02100562817474579,
            "community": 3,
            "ei": 0.05920647491677848,
            "color": "#7f00ff",
            "size": 175.1417774496004,
            "radius": 3.876654070245338,
            "id": 25
          },
          {
            "club": "Officer",
            "pr": 0.015043395360629753,
            "community": 2,
            "ei": 0.07557941348827214,
            "color": "#00ffff",
            "size": 135.98225676646885,
            "radius": 3.419792995608803,
            "id": 26
          },
          {
            "club": "Officer",
            "pr": 0.025638803528350497,
            "community": 3,
            "ei": 0.13347715338024002,
            "color": "#7f00ff",
            "size": 205.5721433451593,
            "radius": 4.231675005693525,
            "id": 27
          },
          {
            "club": "Officer",
            "pr": 0.019572960509438537,
            "community": 3,
            "ei": 0.13107782298371082,
            "color": "#7f00ff",
            "size": 165.732118212741,
            "radius": 3.766874712481978,
            "id": 28
          },
          {
            "club": "Officer",
            "pr": 0.026287262837112076,
            "community": 2,
            "ei": 0.13496081926232778,
            "color": "#00ffff",
            "size": 209.83117792252395,
            "radius": 4.281363742429446,
            "id": 29
          },
          {
            "club": "Officer",
            "pr": 0.024589336534292478,
            "community": 2,
            "ei": 0.17475830231435294,
            "color": "#00ffff",
            "size": 198.67931883773994,
            "radius": 4.151258719773633,
            "id": 30
          },
          {
            "club": "Officer",
            "pr": 0.037156635922679405,
            "community": 3,
            "ei": 0.19103384140654378,
            "color": "#7f00ff",
            "size": 281.2204465785908,
            "radius": 5.114238543416892,
            "id": 31
          },
          {
            "club": "Officer",
            "pr": 0.07169213006588289,
            "community": 2,
            "ei": 0.3086442197910475,
            "color": "#00ffff",
            "size": 508.04711359519086,
            "radius": 7.76054965861056,
            "id": 32
          },
          {
            "club": "Officer",
            "pr": 0.1009179167487121,
            "community": 2,
            "ei": 0.37336347029148326,
            "color": "#00ffff",
            "size": 700.0000000000001,
            "radius": 10,
            "id": 33
          }
        ],
        "links": [
          {
            "source": 0,
            "target": 1
          },
          {
            "source": 0,
            "target": 2
          },
          {
            "source": 0,
            "target": 3
          },
          {
            "source": 0,
            "target": 4
          },
          {
            "source": 0,
            "target": 5
          },
          {
            "source": 0,
            "target": 6
          },
          {
            "source": 0,
            "target": 7
          },
          {
            "source": 0,
            "target": 8
          },
          {
            "source": 0,
            "target": 10
          },
          {
            "source": 0,
            "target": 11
          },
          {
            "source": 0,
            "target": 12
          },
          {
            "source": 0,
            "target": 13
          },
          {
            "source": 0,
            "target": 17
          },
          {
            "source": 0,
            "target": 19
          },
          {
            "source": 0,
            "target": 21
          },
          {
            "source": 0,
            "target": 31
          },
          {
            "source": 1,
            "target": 2
          },
          {
            "source": 1,
            "target": 3
          },
          {
            "source": 1,
            "target": 7
          },
          {
            "source": 1,
            "target": 13
          },
          {
            "source": 1,
            "target": 17
          },
          {
            "source": 1,
            "target": 19
          },
          {
            "source": 1,
            "target": 21
          },
          {
            "source": 1,
            "target": 30
          },
          {
            "source": 2,
            "target": 3
          },
          {
            "source": 2,
            "target": 7
          },
          {
            "source": 2,
            "target": 8
          },
          {
            "source": 2,
            "target": 9
          },
          {
            "source": 2,
            "target": 13
          },
          {
            "source": 2,
            "target": 27
          },
          {
            "source": 2,
            "target": 28
          },
          {
            "source": 2,
            "target": 32
          },
          {
            "source": 3,
            "target": 7
          },
          {
            "source": 3,
            "target": 12
          },
          {
            "source": 3,
            "target": 13
          },
          {
            "source": 4,
            "target": 6
          },
          {
            "source": 4,
            "target": 10
          },
          {
            "source": 5,
            "target": 6
          },
          {
            "source": 5,
            "target": 10
          },
          {
            "source": 5,
            "target": 16
          },
          {
            "source": 6,
            "target": 16
          },
          {
            "source": 8,
            "target": 30
          },
          {
            "source": 8,
            "target": 32
          },
          {
            "source": 8,
            "target": 33
          },
          {
            "source": 9,
            "target": 33
          },
          {
            "source": 13,
            "target": 33
          },
          {
            "source": 14,
            "target": 32
          },
          {
            "source": 14,
            "target": 33
          },
          {
            "source": 15,
            "target": 32
          },
          {
            "source": 15,
            "target": 33
          },
          {
            "source": 18,
            "target": 32
          },
          {
            "source": 18,
            "target": 33
          },
          {
            "source": 19,
            "target": 33
          },
          {
            "source": 20,
            "target": 32
          },
          {
            "source": 20,
            "target": 33
          },
          {
            "source": 22,
            "target": 32
          },
          {
            "source": 22,
            "target": 33
          },
          {
            "source": 23,
            "target": 25
          },
          {
            "source": 23,
            "target": 27
          },
          {
            "source": 23,
            "target": 29
          },
          {
            "source": 23,
            "target": 32
          },
          {
            "source": 23,
            "target": 33
          },
          {
            "source": 24,
            "target": 25
          },
          {
            "source": 24,
            "target": 27
          },
          {
            "source": 24,
            "target": 31
          },
          {
            "source": 25,
            "target": 31
          },
          {
            "source": 26,
            "target": 29
          },
          {
            "source": 26,
            "target": 33
          },
          {
            "source": 27,
            "target": 33
          },
          {
            "source": 28,
            "target": 31
          },
          {
            "source": 28,
            "target": 33
          },
          {
            "source": 29,
            "target": 32
          },
          {
            "source": 29,
            "target": 33
          },
          {
            "source": 30,
            "target": 32
          },
          {
            "source": 30,
            "target": 33
          },
          {
            "source": 31,
            "target": 32
          },
          {
            "source": 31,
            "target": 33
          },
          {
            "source": 32,
            "target": 33
          }
        ]
      }
      kahuna = graph.nodes.sort((a,b)=>b.ei-a.ei)[0]['id']
      t = d3.now()
      chartDiv = d3.select('.rise-enabled').select('.slides');
      d3.selectAll(".bggraphsvg").remove()  // just in case.
      svg = chartDiv
          .append("svg")
          .attr("class", "bggraphsvg")
          .attr("id", "thebggraphsvg");
      oktodraw = true;
      return;
    }
  
    function redraw(){
  
      console.log("alpha")
      if(!oktodraw) doinit();
      console.log("beta")
  
      // Extract the width and height that was computed by CSS.
      var width  = Math.min(window.innerWidth,  parseInt(chartDiv.style("width")));   // please don't send me a pct.
      var height = Math.min(window.innerHeight, parseInt(chartDiv.style("height")));  // chartdiv may go WAY down off the screen
  
      //
      //console.log("gamma: width:  " + width);
      //console.log("gamma: height: " + height);
      //
  
      if(isNaN(width))  { width  = 1000; } // just in case
      if(isNaN(height)) { height = 800;  } // set defaults
  
      svg .attr("width", width)
          .attr("height", height)
          .selectAll("*").remove(); // erases any previous nodes/links drawn
  
      var linkWidth = d3.scaleLinear()
        .domain(d3.extent(graph.links.map(function(d){return d.weight;})))
        .range([0.5, 3]);
  
      var simulation = d3.forceSimulation()
          .alphaDecay(0) // https://github.com/d3/d3-force/blob/master/README.md
          //.force("center",  d3.forceCenter(width/2, height/2))
          .force("collide", d3.forceCollide()
                .radius(function(d){return d.radius*0.75})
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
          .force("charge",  d3.forceManyBody().strength(-5))
          .force("x",       d3.forceX(width/2).strength( 0.001))
          .force("y",       d3.forceX(height/2).strength(0.001));
  
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
        .attr("fill", function(d) {   var c = d3.hsl(d.color); c.l=0.85; return c+"" })
        .attr("stroke", function(d) { var c = d3.hsl(d.color); c.l=0.75; return c+"" })
  
      simulation
        .nodes(graph.nodes)
        .on("tick", ticked);
  
      simulation.force("link")
        .links(graph.links);
  
      function ticked() {
        const fast = {'x': 1233,   'y': 3000,   'z': 100000};
        const slow = {'x': 123321, 'y': 300000, 'z': 100000};
        link
          .attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });
        node
          .attr("transform", function(d) {
            var x = d.x,
                y = d.y,
                speed = slow;
            if(d.id === kahuna) {
              var v1 = 1.0+Math.sin((d3.now()-t)/speed.z+0)/2,
                  v2 = 1.0+Math.sin((d3.now()-t)/speed.z+2)/2,
                  v3 = 1.0+Math.sin((d3.now()-t)/speed.z+4)/2,
                  v4 = 1.0+Math.sin((d3.now()-t)/speed.z+7)/2;
              d.x = (1+Math.sin(v1*(d3.now()-t)/speed.x))*v3*width/2;
              d.y = (1+Math.sin(v2*(d3.now()-t)/speed.y))*v4*height/2;
            }
            return "translate(" + x + "," + y + ")";
          })
          .attr("cx", function(d) { return d.x = Math.max(d.radius, Math.min(width  - d.radius, d.x)); })
          .attr("cy", function(d) { return d.y = Math.max(d.radius, Math.min(height - d.radius, d.y)); })
      }
  
      d3.interval(function() {
        simulation.restart()
        return;
      }, 5000)
  
      return;
    }
  
  
    function checkElement(selector) {

      function rafAsync() {
        return new Promise(resolve => {
            requestAnimationFrame(resolve); //faster than set time out
        });
      }
      if (document.querySelector(selector) === null) {
        return rafAsync().then(() => checkElement(selector));
      } else {
        return Promise.resolve(true);
      }
    }

    // tear down our drawing
    function undraw() {
      if(oktodraw) {
        d3.selectAll(".bggraphsvg").remove()
        oktodraw = false;
      }
    }
  
    function doidoit() {
      // var chartDiv = d3.select('.rise-enabled').select('.slides');
      checkElement('.slides') //use whichever selector you want
      .then((element) => {
        redraw();
      }, error => {
        undraw();
      });
    }

    doidoit();
    // Redraw based on the new size whenever the browser window is resized/fullscreened.
    window.addEventListener("resize", doidoit);
    window.addEventListener("onfullscreenchange", doidoit);

  } // function dobg()
  return dobg;
});
