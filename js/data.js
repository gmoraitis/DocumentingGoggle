
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
                        { "name": "Google Ads", "url": "https://ads.google.com/" },
                        { "name": "AdMob", "url": "https://www.google.com/admob/" },
                        { "name": "Google AdSense", "url": "https://www.google.com/adsense" },
                        { "name": "Google Ad Manager", "url": "https://admanager.google.com/home" },
                        { "name": "Tag management system", "url": "https://en.wikipedia.org/wiki/Tag_management_system" }
                    ]
                },
                {
                    "name": "Communication and publishing tools",
                    "children": [
                        { "name": "Blogger", "url": "https://www.blogger.com/" },
                        { "name": "FeedBurner", "url": "https://feedburner.google.com/" },
                        { "name": "Gmail", "url": "https://mail.google.com/" },
                        { "name": "Google Account", "url": "https://myaccount.google.com/" },
                        { "name": "Google Calendar", "url": "https://www.google.com/calendar/about" },
                        { "name": "Google Chat", "url": "https://chat.google.com/" },
                        { "name": "Google Charts", "url": "https://developers.google.com/chart" },
                        { "name": "Google Classroom", "url": "https://classroom.google.com/" },
                        { "name": "Google Currents", "url": "https://workspace.google.com/products/currents/" },
                        {
                            "name": "Google Docs Editors",
                            "children":
                                [{ "name": "Google Docs", "url": "https://www.google.com/docs/about/" },
                                { "name": "Google Sheets", "url": "https://www.google.com/sheets/about/" },
                                { "name": "Google Slides", "url": "https://www.google.com/slides/about/" },
                                { "name": "Google Drawings", "url": "https://docs.google.com/drawings" },
                                { "name": "Google Forms", "url": "https://docs.google.com/forms" },
                                { "name": "Google Sites", "url": "https://sites.google.com/" },
                                { "name": "Google Keep", "url": "https://www.google.com/keep/" },
                                ]
                        },
                        { "name": "Google Domains", "url": "https://domains.google/" },
                        { "name": "Google Drive", "url": "https://drive.google.com/" },
                        { "name": "Google Fonts", "url": "https://fonts.google.com/" },
                        { "name": "Google Groups", "url": "https://groups.google.com/" },
                        { "name": "Google Meet", "url": "https://meet.google.com/" },
                        { "name": "Google Translate", "url": "https://translate.google.com/" },
                        { "name": "Google Voice", "url": "https://voice.google.com/" },
                    ]
                },
                {
                    "name": "Map-related products",
                    "children": [
                        { "name": "N/A", "value": 7074 }
                    ]
                },
                {
                    "name": "Statistical tools",
                    "children": [
                        { "name": "N/A", "value": 7074 }
                    ]
                },
                {
                    "name": "Business-oriented products",
                    "children": [
                        { "name": "N/A", "value": 7074 }
                    ]
                }
            ]
        },
        {
            "name": "Developer tools",
            "children": [
                { "name": "N/A", "value": 17010 },
            ]
        },
        {
            "name": "Operating systems",
            "children": [
                {
                    "name": "N/A",
                    "children": [
                        { "name": "N/A", "value": 721 },
                     
                    ]
                },
                { "name": "N/A", "value": 1759 },
               
            ]
        },
        {
            "name": "Desktop applications",
            "children": [
                { "name": "N/A", "value": 8833 },
              
            ]
        },
        {
            "name": "Mobile applications",
            "children": [
                { "name": "N/A", "value": 4116 }
            ]
        },
        {
            "name": "Hardware",
            "children": [
                { "name": "N/A", "value": 1082 },
           
            ]
        },
        {
            "name": "Services",
            "children": [
                { "name": "N/A", "value": 1616 },
                
                {
                    "name": "N/A",
                    "children": [
                        { "name": "N/A", "value": 593 },
                     
                        
                    ]
                },
                { "name": "N/A", "value": 843 },
             
            ]
        },
        {
            "name": "Scheduled to be discontinued",
            "children": [
                { "name": "N/A", "value": 2105 },
            ]
        }
    ]
}

// Set the dimensions and margins of the diagram
var margin = { top: 20, right: 90, bottom: 30, left: 90 }, //left90
    width = 1200 - margin.left - margin.right,
    height = 900 - margin.top - margin.bottom;

// append the svg object to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#treeArea").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    // .call(responsivefy) //responsive function.
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
            return d.children || d._children ? -12 : 12;
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
