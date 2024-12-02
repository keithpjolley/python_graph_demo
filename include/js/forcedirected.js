function drawgraph(selector, graph, width = 300, height = 300) {
	// The force simulation mutates links and nodes, so create a copy
	// so that re-evaluating this cell produces the same result.
	const links = graph.edges.map((d) => ({ ...d }));
	const nodes = graph.nodes.map((d) => ({ ...d }));

	const linkWidth = d3
		.scaleLinear()
		.domain(d3.extent(links.map((d) => d.weight)))
		.range([1, 5]);

	// Create a simulation with several forces.
	const simulation = d3
		.forceSimulation(nodes)
		// lower alpha numbers "cool" the simulation, less jumpy.
		.alphaTarget(0.9)
		// lower decay adds more "viscosity."
		.velocityDecay(0.9)
		// This pulls in nodes of the same community and pushes away
		// non-community members.
		.force(
			"link",
			d3
				.forceLink(links)
				.id((d) => d.id)
				.distance(
					(d) =>
						(d.source.community === d.target.community ? 1 : 5) *
						(d.source.radius + d.target.radius),
				),
		)
		// Make nodes attract each other.
		.force("charge", d3.forceManyBody())
		// Make nodes want to be near the center of the plot.
		.force("center", d3.forceCenter().strength(0.01))
		// Don't let nodes occupy the same space.
		.force(
			"collide",
			d3.forceCollide().radius((d) => d.radius + 4),
		)
		.on("tick", ticked);

	// Create the SVG container.
	const svg = d3
		.select(selector)
		.append("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("viewBox", [-width / 2, -height / 2, width, height])
		.attr("style", "max-width: 100%; height: auto;");

	// Add a line for each link, and a circle for each node.
	const link = svg
		.append("g")
		.selectAll()
		.data(links)
		.join("line")
		.attr("class", "links")
		.attr("stroke-width", (d) => linkWidth(d.weight));

	const node = svg
		.append("g")
		.selectAll()
		.data(nodes)
		.join("circle")
		.attr("class", "links")
		.attr("r", (d) => d.radius)
		.attr("fill", (d) => d.color)
		.attr("data-id", (d) => d.id)
		.attr("data-community", (d) => d.community)
		.attr("data-eicentrality", (d) => d.eicentrality)
		.attr("data-pagerank", (d) => d.pagerank)
		.on("mouseover", mouseover)
		.on("mousemove", mousemove)
		.on("mouseleave", mouseleave);

	// Add a drag behavior.
	node.call(
		d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended),
	);

	// Set the position attributes of links and nodes each time the simulation ticks.
	function ticked() {
		link
			.attr("x1", (d) => d.source.x)
			.attr("y1", (d) => d.source.y)
			.attr("x2", (d) => d.target.x)
			.attr("y2", (d) => d.target.y);
		node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
	}

	// Reheat the simulation when drag starts, and fix the subject position.
	function dragstarted(event) {
		if (!event.active) simulation.alphaTarget(0.3).restart();
		event.subject.fx = event.subject.x;
		event.subject.fy = event.subject.y;
	}

	// Update the subject (dragged node) position during drag.
	function dragged(event) {
		event.subject.fx = event.x;
		event.subject.fy = event.y;
	}

	// Restore the target alpha so the simulation cools after dragging ends.
	// Unfix the subject position now that it’s no longer being dragged.
	function dragended(event) {
		if (!event.active) simulation.alphaTarget(0);
		event.subject.fx = null;
		event.subject.fy = null;
	}

	function mouseover(d) {
		tooltip.style("opacity", 1);
		d3.select(this).style("stroke", "black").style("opacity", 1);
	}

	function mousemove(e) {
		tooltip.html(
			() =>
				`<b>${e.target.getAttribute("data-id")}</b><br>
				pagerank: ${e.target.getAttribute("data-pagerank")}<br>
				eicentrality: ${e.target.getAttribute("data-eicentrality")}<br>
				community: ${e.target.getAttribute("data-community")}<br>`,
		);
	}

	function mouseleave(d) {
		tooltip.style("opacity", 0);
		d3.select(this).style("stroke", "none").style("opacity", 0.8);
	}

	// create a tooltip
	d3.select(selector).append("div").attr("class", "tooltip");
}
