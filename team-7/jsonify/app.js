// test data loading
d3.json("jsonify/etf_top100.json").then(function(data) {
    console.log(data)
});

d3.json("jsonify/mutual_funds_top100.json").then(function(data) {
    console.log(data)
});



    d3.json("jsonify/etf_top100.json").then((etf_top100) => {  
        var fund_symbol = etf_top100.fund_symbol;
        var fund_return_ytd = etf_top100.fund_return_ytd;
        var barchartData = [{
            x: fund_return_ytd,
            y: fund_symbol,
            orientation: 'h',
            type : "bar"
            }];
        var layout = {
            height: 600,
            width: 800,
            yaxis:{
                type: 'category'
            }
            };
        Plotly.newPlot("bar",barchartData,layout)});

// function optionChanged(input)
// function buildInformation(input)
// function buildCharts(input)
// runApp();