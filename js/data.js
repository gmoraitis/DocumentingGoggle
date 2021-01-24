// UNUSED RESPONSIVE FUNCTION
// function responsivefy(svg) {
//     // get container + svg aspect ratio
//     var container = d3.select(svg.node().parentNode),
//         width = parseInt(svg.style("width")),
//         height = parseInt(svg.style("height")),
//         aspect = width / height;

//     // add viewBox and preserveAspectRatio properties,
//     // and call resize so that svg resizes on inital page load
//     svg.attr("viewBox", "0 0 " + width + " " + height)
//         .attr("perserveAspectRatio", "xMinYMid")
//         .call(resize);

//     // to register multiple listeners for same event type, 
//     // you need to add namespace, i.e., 'click.foo'
//     // necessary if you call invoke this function for multiple svgs
//     // api docs: https://github.com/mbostock/d3/wiki/Selections#on
//     d3.select(window).on("resize." + container.attr("id"), resize);

//     // get width of container and resize svg to fit it
//     function resize() {
//         var targetWidth = parseInt(container.style("width"));
//         svg.attr("width", targetWidth);
//         svg.attr("height", Math.round(targetWidth / aspect));
//     }
// }

//Data object with links
var data =
{
    "name": "Google",
    "children": [
        {
            "name": "Web Based Products",
            "children": [
                {
                    "name": "Search tools",
                    "children": [
                        { "name": "Google Search", "url": "http://www.google.co.uk" },
                        { "name": "Google Alerts", "url": "https://www.google.com/alerts" },
                        { "name": "Google Arts & Culture", "url": "https://artsandculture.google.com/" },
                        { "name": "Google Bookmarks", "url": "https://www.google.com/bookmarks/" },
                        { "name": "Google Books", "url": "https://books.google.com/" },
                        { "name": "Google Dataset Search", "url": "https://datasetsearch.research.google.com/" },
                        { "name": "Google Finance", "url": "https://google.com/finance" },
                        { "name": "Google Flights", "url": "https://www.google.com/flights" },
                        { "name": "Google Images", "url": "https://images.google.com/" },
                        { "name": "Google News", "url": "https://news.google.com/" },
                        { "name": "Google Patents", "url": "https://patents.google.com/" },
                        { "name": "Google Scholar", "url": "http://scholar.google.com/" },
                        { "name": "Google Shopping", "url": "https://google.com/shopping" },
                        { "name": "YouTube", "url": "https://www.youtube.com/" },
                    ]
                },
                {
                    "name": "Advertising services",
                    "children": [
                        { "name": "BetweennessCentrality", "value": 3534 },
                        { "name": "LinkDistance", "value": 5731 },
                        { "name": "MaxFlowMinCut", "value": 7840 },
                        { "name": "ShortestPaths", "value": 5914 },
                        { "name": "SpanningTree", "value": 3416 }
                    ]
                },
                {
                    "name": "Communication and publishing tools",
                    "children": [
                        { "name": "AspectRatioBanker", "value": 7074 }
                    ]
                },
                {
                    "name": "Map-related products",
                    "children": [
                        { "name": "AspectRatioBanker", "value": 7074 }
                    ]
                },
                {
                    "name": "Statistical tools",
                    "children": [
                        { "name": "AspectRatioBanker", "value": 7074 }
                    ]
                },
                {
                    "name": "Business-oriented products",
                    "children": [
                        { "name": "AspectRatioBanker", "value": 7074 }
                    ]
                }
            ]
        },
        {
            "name": "Developer tools",
            "children": [
                { "name": "Security tools", "value": 17010 },
            ]
        },
        {
            "name": "Operating systems",
            "children": [
                {
                    "name": "converters",
                    "children": [
                        { "name": "Converters", "value": 721 },
                        { "name": "DelimitedTextConverter", "value": 4294 },
                        { "name": "GraphMLConverter", "value": 9800 },
                        { "name": "IDataConverter", "value": 1314 },
                        { "name": "JSONConverter", "value": 2220 }
                    ]
                },
                { "name": "DataField", "value": 1759 },
                { "name": "DataSchema", "value": 2165 },
                { "name": "DataSet", "value": 586 },
                { "name": "DataSource", "value": 3331 },
                { "name": "DataTable", "value": 772 },
                { "name": "DataUtil", "value": 3322 }
            ]
        },
        {
            "name": "Desktop applications",
            "children": [
                { "name": "DirtySprite", "value": 8833 },
                { "name": "LineSprite", "value": 1732 },
                { "name": "RectSprite", "value": 3623 },
                { "name": "TextSprite", "value": 10066 }
            ]
        },
        {
            "name": "Mobile applications",
            "children": [
                { "name": "FlareVis", "value": 4116 }
            ]
        },
        {
            "name": "Hardware",
            "children": [
                { "name": "DragForce", "value": 1082 },
                { "name": "GravityForce", "value": 1336 },
                { "name": "IForce", "value": 319 },
                { "name": "NBodyForce", "value": 10498 },
                { "name": "Particle", "value": 2822 },
                { "name": "Simulation", "value": 9983 },
                { "name": "Spring", "value": 2213 },
                { "name": "SpringForce", "value": 1681 }
            ]
        },
        {
            "name": "Services",
            "children": [
                { "name": "AggregateExpression", "value": 1616 },
                { "name": "And", "value": 1027 },
                { "name": "Arithmetic", "value": 3891 },
                { "name": "Average", "value": 891 },
                { "name": "BinaryExpression", "value": 2893 },
                { "name": "Comparison", "value": 5103 },
                { "name": "CompositeExpression", "value": 3677 },
                { "name": "Count", "value": 781 },
                { "name": "DateUtil", "value": 4141 },
                { "name": "Distinct", "value": 933 },
                { "name": "Expression", "value": 5130 },
                { "name": "ExpressionIterator", "value": 3617 },
                { "name": "Fn", "value": 3240 },
                { "name": "If", "value": 2732 },
                { "name": "IsA", "value": 2039 },
                { "name": "Literal", "value": 1214 },
                { "name": "Match", "value": 3748 },
                { "name": "Maximum", "value": 843 },
                {
                    "name": "methods",
                    "children": [
                        { "name": "add", "value": 593 },
                        { "name": "and", "value": 330 },
                        { "name": "average", "value": 287 },
                        { "name": "count", "value": 277 },
                        { "name": "distinct", "value": 292 },
                        { "name": "div", "value": 595 },
                        { "name": "eq", "value": 594 },
                        { "name": "fn", "value": 460 },
                        { "name": "gt", "value": 603 },
                        { "name": "gte", "value": 625 },
                        { "name": "iff", "value": 748 },
                        { "name": "isa", "value": 461 },
                        { "name": "lt", "value": 597 },
                        { "name": "lte", "value": 619 },
                        { "name": "max", "value": 283 },
                        { "name": "min", "value": 283 },
                        { "name": "mod", "value": 591 },
                        { "name": "mul", "value": 603 },
                        { "name": "neq", "value": 599 },
                        { "name": "not", "value": 386 },
                        { "name": "or", "value": 323 },
                        { "name": "orderby", "value": 307 },
                        { "name": "range", "value": 772 },
                        { "name": "select", "value": 296 },
                        { "name": "stddev", "value": 363 },
                        { "name": "sub", "value": 600 },
                        { "name": "sum", "value": 280 },
                        { "name": "update", "value": 307 },
                        { "name": "variance", "value": 335 },
                        { "name": "where", "value": 299 },
                        { "name": "xor", "value": 354 },
                        { "name": "_", "value": 264 }
                    ]
                },
                { "name": "Minimum", "value": 843 },
                { "name": "Not", "value": 1554 },
                { "name": "Or", "value": 970 },
                { "name": "Query", "value": 13896 },
                { "name": "Range", "value": 1594 },
                { "name": "StringUtil", "value": 4130 },
                { "name": "Sum", "value": 791 },
                { "name": "Variable", "value": 1124 },
                { "name": "Variance", "value": 1876 },
                { "name": "Xor", "value": 1101 }
            ]
        },
        {
            "name": "Scheduled to be discontinued",
            "children": [
                { "name": "IScaleMap", "value": 2105 },
                { "name": "LinearScale", "value": 1316 },
                { "name": "LogScale", "value": 3151 },
                { "name": "OrdinalScale", "value": 3770 },
                { "name": "QuantileScale", "value": 2435 },
                { "name": "QuantitativeScale", "value": 4839 },
                { "name": "RootScale", "value": 1756 },
                { "name": "Scale", "value": 4268 },
                { "name": "ScaleType", "value": 1821 },
                { "name": "TimeScale", "value": 5833 }
            ]
        }
    ]
}

// Set the dimensions and margins of the diagram
var margin = { top: 20, right: 90, bottom: 30, left: 90 }, //left90
    width = 960 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

// append the svg object to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#treeArea").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    // .call(responsivefy)
    .attr("transform", "translate("
        + margin.left + "," + margin.top + ")");

var i = 0,
    duration = 650,
    root;

// declares a tree layout and assigns the size
var treemap = d3.tree().size([height, width]);


// Assigns parent, children, height, depth
root = d3.hierarchy(data, function (d) { return d.children; });
root.x0 = height / 2;
root.y0 = 0;

// Collapse after the second level
root.children.forEach(collapse);

update(root);

// Collapse the node and all it's children
function collapse(d) {
    if (d.children) {
        d._children = d.children
        d._children.forEach(collapse)
        d.children = null
    }
}

function update(source) {

    // Assigns the x and y position for the nodes
    var treeData = treemap(root);

    // Compute the new tree layout.
    var nodes = treeData.descendants(),
        links = treeData.descendants().slice(1);

    // Normalize for fixed-depth.
    nodes.forEach(function (d) {
        d.y = d.depth * 240
    });

    // ****************** Nodes section ***************************

    // Update the nodes...
    var node = svg.selectAll('g.node')
        .data(nodes, function (d) { return d.id || (d.id = ++i); });

    // Enter any new modes at the parent's previous position.
    var nodeEnter = node.enter()
        .append('g')
        .attr('class', 'node')
        .attr("transform", function (d) {
            return "translate(" + source.y0 + "," + source.x0 + ")";
        })
        .style("fill", "#6c757d")
        .on('click', click);

    // Add Circle for the nodes
    nodeEnter.append('a')
        .attr("xlink:href", function (d) { return d.data.url; })
        .attr("target", "_blank")
        .append('circle')
        .attr('class', 'node')
        .attr('r', 1e-6)
        .style("fill", function (d) {
            return d._children ? "theblue" : "#4285f4";
        })

    // Add labels for the nodes
    nodeEnter.append('text')
        .attr("dy", ".35em")
        .attr("x", function (d) {
            return d.children || d._children ? -13 : 13;
        })
        .attr("text-anchor", function (d) {
            return d.children || d._children ? "end" : "start";
        })
        .text(function (d) { return d.data.name; });

    // UPDATE
    var nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate.transition()
        .duration(duration)
        .attr("transform", function (d) {
            return "translate(" + d.y + "," + d.x + ")";
        });

    // Update the node attributes and style
    nodeUpdate.select('circle.node')
        .attr('r', 10)
        // .style("fill", function (d) {
        //     return d._children ? "thegreen" : "#34a853";
        // })
        .attr('cursor', 'pointer');

    // Remove any exiting nodes
    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function (d) {
            return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select('circle')
        .attr('r', 1e-6);

    // On exit reduce the opacity of text labels
    nodeExit.select('text')
        .style('fill-opacity', 1e-6)
        .style("fill", function (d) {
            return d._children ? "thegreen" : "#34a853";
        });

    // ****************** links section ***************************

    // Update the links...
    var link = svg.selectAll('path.link')
        .data(links, function (d) { return d.id; });

    // Enter any new links at the parent's previous position.
    var linkEnter = link.enter().insert('path', "g")
        .attr("class", "link")
        .attr('d', function (d) {
            var o = { x: source.x0, y: source.y0 }
            return diagonal(o, o)
        });

    // UPDATE
    var linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate.transition()
        .duration(duration)
        .attr('d', function (d) { return diagonal(d, d.parent) });

    // Remove any exiting links
    var linkExit = link.exit().transition()
        .duration(duration)
        .attr('d', function (d) {
            var o = { x: source.x, y: source.y }
            return diagonal(o, o)
        })
        .remove();

    // Store the old positions for transition.
    nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });

    // Creates a curved (diagonal) path from parent to the child nodes
    function diagonal(s, d) {

        path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`

        return path
    }

    // Toggle children on click.
    function click(d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else {
            d.children = d._children;
            d._children = null;
        }
        update(d);
    }

}
