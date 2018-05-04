var mapID = "918102a3bff04636924faa2d1915cae1";

var narratives = {
    "River Raisin": "The River Raisin is a river in southeastern Michigan that flows into Lake Erie. The area today is an agricultural and industrial center of Michigan. The river flows for almost 150 miles (241 km), draining an area of 1,072 square miles (2,780 km<sup>2</sup>) in the Michigan counties of Lenawee, Washtenaw, Jackson, Hillsdale, a portion of Fulton County, Ohio. The mouth of the river is located in Monroe County, Michigan <a href=\"https://www.riverraisin.org/watershed-facts\">(River Raisin Watershed Council)</a>.",
    "Maumee River": "The Maumee River watershed is located in northwestern Ohio and drains a total of 5,024 square miles in Ohio, flowing through all or part of 18 counties. Major municipalities in the watershed include Toledo, Defiance, Findlay, Lima, Van Wert, Napoleon and Perrysburg. The watershed is predominantly comprised of cultivated crops with some urban development, hay and pasture lands, and forest <a href=\"http://epa.ohio.gov/dsw/tmdl/PortageToussaintRivers.aspx\">(Ohio EPA)</a>.",
    "Portage River": "The Portage River is located in northwestern Ohio. The Portage River flows into Lake Erie at Port Clinton in Ottawa County. The watershed is distributed across Ottawa, Sandusky, Hancock and Wood counties with a small portion in Seneca County. Land use in the watershed is comprised predominantly of 78 percent cultivated cropland, 11 percent developed land and 5 percent forest. The city of McComb obtains its drinking water from Rader Creek, North Baltimore from Rocky Ford Creek and Fostoria from the East Branch of the Portage River <a href=\"http://epa.ohio.gov/dsw/tmdl/PortageToussaintRivers.aspx\">(Ohio EPA)</a>.",
    "Sandusky River": "The Sandusky River and Sandusky Bay watersheds are located in northwestern Ohio. They drain a total of 1,828 square miles and flow through all or part of 12 counties. Major municipalities in the watershed include Sandusky, Fremont, Tiffin, Bucyrus and Upper Sandusky. The watersheds are predominantly comprised of cultivated crops with some areas of urban development and pasture and hay lands. Wetlands are located in the northern portion of the watersheds <a href=\"http://epa.ohio.gov/dsw/tmdl/PortageToussaintRivers.aspx\">(Ohio EPA)</a>.",
    "Thames River": "The Thames River is 280 km long, draining approximately 5,800 km2 of Southwestern Ontario to Lake St. Clair. The watershed is primarily (approximately 80%) agricultural, but also contains cities and towns such as London, Woodstock, Chatham, as well as numerous smaller urban areas, with a total population of approximately 600,000 people."
};

var watershedNames = {
    "Cattaraugus": "Cattaraugus River",
    "Cuyahoga": "Cuyahoga River",
    "Detroit": "Detroit River",
    "Grand": "Grand River",
    "Grand (Ontario)": "Grand (Ontario) River",
    "Huron": "Huron River",
    "Leamington": "Leamington Tributaries",
    "Maumee": "Maumee River",
    "Raisin": "River Raisin",
    "Portage": "Portage River",
    "Sandusky": "Sandusky River",
    "Thames": "Thames River",
    "Toussaint Creek": "Toussaint Creek",
    "Vermillion": "Vermillion River"
};

var ColorPicker = {
    heading1: '#2271a2', //getColor(34, 113, 162),
    heading2: '#314766', //getColor(49, 71, 102),
    heading3: '#2271a2', //getColor(34, 113, 162),
    heading4: '#2271a2', //getColor(34, 113, 162),
    heading5: '#333333', //getColor(51, 51, 51),
    heading6: '#314766', //getColor(49, 71, 102),
    body: '#333333', //getColor(51, 51, 51),
    body_resource: '#333333', //getColor(51, 51, 51),

    blue_header: '#2b4e7c', //getColor(43, 78, 124),
    green_selection_whtbg: '#6db227', //getColor(109, 178, 39),
    green_selection_dkbg: '#b8e986', //getColor(184, 233, 134),
    orange_selection: '#f7b141', //getColor(247, 177, 65),
    grey_menu: '#dddddd', //getColor(221, 221, 221),
    infographic_bg: '#d8e2db', //getColor(216, 226, 235),
    slideshow_arrow: '#9b9b9b', //getColor(155, 155, 155),

    blue1: '#1c2d5a', //getColor(28, 45, 90),
    blue2: '#afdfe4', //getColor(175, 223, 228),
    blue3: '#7eb4d2', //getColor(126, 111, 247),
    blue4: '#7ed3f7', //getColor(126, 211, 247),
    blue5: '#188ccc', //getColor(24, 140, 204),
    blue6: '#00b0e6', //getColor(0, 176, 230),
    blue7: '#1b75ba', //getColor(30, 117, 186),

    target_red: '#ff0000', //getColor(206, 0, 0),
};

var xAxis = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"];

var metrics = {
    "TP_L": "Annual TP Loading",
    "SRP_L": "Annual SRP Loading",
    "TP_FWMC": "Annual TP FWMC",
    "SRP_FWMC": "Annual SRP FWMC",
    "Discharge": "Annual Discharge",
    "TP_L_S": "Spring TP Loading",
    "SRP_L_S": "Spring SRP Loading",
    "TP_FWMS_S": "Spring TP FWMC",
    "SRP_FWMC_S": "Spring SRP FWMC",
    "Discharge_S": "Spring Discharge"
}

var units = {
    "Annual TP Loading": "Metric Tons",
    "Annual SRP Loading": "Metric Tons",
    "Annual TP FWMC": "milligrams / liter",
    "Annual SRP FWMC": "milligrams / liter",
    "Annual Discharge": "million cubic meters",
    "Spring TP Loading": "Metric Tons",
    "Spring SRP Loading": "Metric Tons",
    "Spring TP FWMC": "milligrams / liter",
    "Spring SRP FWMC": "milligrams / liter",
    "Spring Discharge": "million cubic meters"
}

var targets = {
    "Maumee River": {
        "Annual TP Loading": 2288,
        "Spring TP Loading": 860,
        "Spring SRP Loading": 186,
        "Spring TP FWMC": 0.23,
        "Spring SRP FWMC": 0.05
    },
    // "Portage River": {
    //     "Annual TP Loading": 0,
    //     "Spring TP Loading": 0,
    //     "Spring SRP Loading": 0,
    //     "Spring TP FWMC": 0,
    //     "Spring SRP FWMC": 0
    // },
    // "River Raisin": {
    //     "Annual TP Loading": 0,
    //     "Spring TP Loading": 0,
    //     "Spring SRP Loading": 0,
    //     "Spring TP FWMC": 0,
    //     "Spring SRP FWMC": 0
    // },

    "Sandusky River": {
        "Annual TP Loading": 661,
        "Spring TP Loading": 230,
        "Spring SRP Loading": 43,
        "Spring TP FWMC": 0.23,
        "Spring SRP FWMC": 0.05
    },
    "Cuyahoga River": {
        "Annual TP Loading": 271,
    }
}

function BA_Charts(){}
// BA_Charts.prototype.data;

BA_Charts.prototype.init = function(filename){
    var watershed = {
        name: name,
        TPloading: {
            name: 'Annual TP Loading',
            unit: 'Metric Tons',
            series: []
        },
        SRPloading: {
            name: 'Annual SRP Loading',
            unit: 'Metric Tons',
            series: []
        },
        TPFWMC: {
            name: 'Annual TP FWMC',
            unit: 'mg/L',
            series: []
        },
        SRPFWMC: {
            name: 'Annual SRP FWMC',
            unit: 'mg/L',
            series: []
        },
        discharge: {
            name: 'Annual Discharge',
            unit: 'Million Cubic Meters',
            series: []
        },
        TPloading_S: {
            name: 'Spring TP Loading',
            unit: 'Metric Tons',
            series: []
        },
        SRPloading_S: {
            name: 'Spring SRP Loading',
            unit: 'Metric Tons',
            series: []
        },
        TPFWMC_S: {
            name: 'Spring TP FWMC',
            unit: 'mg/L',
            series: []
        },
        SRPFWMC_S: {
            name: 'Spring SRP FWMC',
            unit: 'mg/L',
            series: []
        },
        discharge_S: {
            name: 'Spring Discharge',
            unit: 'Million Cubic Meters',
            series: []
        },
        addToFraction: function (name, year, val) {
            switch (name) {
                case this.TPloading.name:
                    this.TPloading.series.splice(year - 2008, 0, (val));
                    break;
                case this.SRPloading.name:
                    this.SRPloading.series.splice(year - 2008, 0, (val));
                    break;
                case this.TPFWMC.name:
                    this.TPFWMC.series.splice(year - 2008, 0, (val));
                    break;
                case this.SRPFWMC.name:
                    this.SRPFWMC.series.splice(year - 2008, 0, (val));
                    break;
                case this.discharge.name:
                    this.discharge.series.splice(year - 2008, 0, (val));
                    break;
                case this.TPloading_S.name:
                    this.TPloading_S.series.splice(year - 2008, 0, val);
                    break;
                case this.SRPloading_S.name:
                    this.SRPloading_S.series.splice(year - 2008, 0, val);
                    break;
                case this.TPFWMC_S.name:
                    this.TPFWMC_S.series.splice(year - 2008, 0, val);
                    break;
                case this.SRPFWMC_S.name:
                    this.SRPFWMC_S.series.splice(year - 2008, 0, val);
                    break;
                case this.discharge_S.name:
                    this.discharge_S.series.splice(year - 2008, 0, val);
                    break;
                default:
                    alert(name + ' ' + year + ' ' + val);
            }
        }
    };

    d3.csv(filename, function (in_file) {
        in_file.forEach(function (obj) {
            watershed.addToFraction(obj.Fraction, parseInt(obj.Year), parseFloat(obj.Value));
        });
        var chart;
        switch (chartType) {
            case 'line':
                /**
                 * Default starting value for line chart is 0
                 */
                chart = createLineChart(eleID, watershed.name, watershed[fraction], ColorPicker.blue7, bgimage);
                // chart = createLineChart(eleID, watershed[fraction].series, watershed[fraction].name, watershed[fraction].unit, watershed[fraction].name, watershed[fraction].unit, ColorPicker.blue1);
                // if(startingVal!==undefined){
                //     chart = createLineChart_start(eleID, watershed.name, watershed[fraction], ColorPicker.blue7, startingVal);
                // }else{
                //     chart = createLineChart(eleID, watershed.name, watershed[fraction], ColorPicker.blue7);
                // }
                break;
            case 'column':
                // chart = createColumnChart(eleID, watershed[fraction].series, watershed[fraction].name, watershed[fraction].unit, watershed[fraction].name, watershed[fraction].unit, ColorPicker.blue2);
                chart = createColumnChart2(eleID, watershed.name, watershed[fraction], ColorPicker.blue7, bgimage);
                break;
            // case '':
            //     chart = createColumnChart2(eleID, watershed.name, watershed[fraction], ColorPicker.blue3);
            //     break;
        }
        ;
        if (target) {
            addTargetLine(chart, target, 'line');
        }
    });
    return watershed;
}

function loadWatershedsData(filename){
    var data;

    /// NEED TO CHANGE THE DATASET. COMBINE ALL FOUR WATERSHED DATA THEN CONVERT TO A JSON
    $.getJSON("data/all_data2.json", function(d){
       data = d;
    });

    return data;
}

function getWatershedMetric(in_data, w_name, metric){
    var vals = $(in_data).filter(function(i, n){
        return n.River.includes(w_name)&& n.Fraction===metric // n.River===w_name
    })
    vals.sort(function(a, b){
        return (a.Year > b.Year) ? 1 : ((a.Year < b.Year) ? -1 : 0);
    });
    return vals;
}

function createChart(div, type, series_name, data, color, title, unit, isBgImg=1, target=0, width=null, height = null){
    var o = createOptions(type, series_name, data, color, title, unit, isBgImg, width, height);
    var chart = Highcharts.chart(div, o);
    if(target){
        addTargetLine(chart, target);
    }
    return chart;
}

function createDualAxesChart(div, title, x_axis, s1_name, s1_data, s1_type, s1_unit, s1_color, s2_name, s2_data, s2_type, s2_unit, s2_color){
    var o = createDualAxesOptions(title, x_axis, s1_name, s1_data, s1_type, s1_unit, s1_color, s2_name, s2_data, s2_type, s2_unit, s2_color);
    var chart = Highcharts.chart(div, o);
    return chart;
}

function createColumnChart(){

}

function createOptions(type, series_name, data, color, title, unit, isBgImg, width, height){
    Highcharts.setOptions({
        lang: {
            numericSymbols: null,
            thousandsSep: ','
        }

    });
    return {
        chart: {
            backgroundColor:'transparent',
            type: type,
            width: width, //chart_width,
            height: height, //window.innerHeight  - $("#narrative-section").height() - 30, //"* 0.65, //chart_height,
            // height: window.innerHeight * 0.65, //chart_height,
            style: {
                // fontFamily: 'Lato Regular, sans-serif',
                color: ColorPicker.body
            },
            // plotBackgroundImage: 'https://www.highcharts.com/samples/graphics/skies.jpg',
            // backgroundColor: '#00ff00'
            /**
             * The following events is for watermark
             */
            events: {
                load: function () {
                    var logoX = 15;
                    // var size = this.chartWidth / 10;
                    // var size = this.plotBox.x < this.plotBox.y ? this.plotBox.x : this.plotBox.y;
                    var size = this.plotBox.y;
                    size -= 5;

                    if(this.chartWidth < 500){
                        logoX = 10;
                        // size = this.chartWidth / 10;
                    }
                    var img_width = (this.chartWidth - 350)/2 - logoX;
                    var img_height = size;
                    // var img_url = "";
                    if(img_width >= img_height*4){
                        // wide logo
                        this.renderer.image("https://c1.staticflickr.com/1/826/26966705327_f80fcd7af1_o.png", logoX, 0, size * 4, size ).add();
                        // ErieStat logo. Change factor to 3
                        // this.renderer.image("https://c1.staticflickr.com/1/956/27966542108_a46fd4fa96_o.png", logoX, 0, size*3 , size).add();
                    }else{
                        // cube logo
                        this.renderer.image("https://c1.staticflickr.com/1/868/40969378165_8bd2c065b9_o.png", logoX, 0, size, size).add();
                    }
                    // var w = this.chartWidth - this.title.alignAttr.x;
                    // Blue Accounting Cube logo
                    // this.renderer.image("https://c1.staticflickr.com/1/868/40969378165_8bd2c065b9_o.png", logoX, 0, size, size).add();
                    // Blue Accouting Logo
                    // this.renderer.image("https://c1.staticflickr.com/1/826/26966705327_f80fcd7af1_o.png", logoX, 0, size * 4, size ).add();
                    // Blue Accounting ErieStat Logo
                    // this.renderer.image("https://c1.staticflickr.com/1/956/27966542108_a46fd4fa96_o.png", logoX, 0, size*3 , size).add();

                    // this.renderer.image("https://c1.staticflickr.com/5/4382/36578347693_3c6032000b_o.png", 0, 0, chart_width, chart_height).add();   //red watermark
                    if (isBgImg) {
                        this.renderer.image("img/background_draft.png", this.plotLeft, this.plotTop, this.plotWidth, this.plotHeight).add(); //grey watermark
                    }
                }
            }
        },
        title: {
            text: title,
            style: {
                color: ColorPicker.body
            }
        },
        credits: {
            enabled: false,
            // href: "http://www.glc.org",
            // text: "Great Lakes Commission"
        },
        xAxis: {
            categories: xAxis,
            title: {
                text: 'Year',
                style: {
                    color: ColorPicker.body
                }
            },
            // lineColor: '#ff0000'
        },
        yAxis: {
            title: {
                text: series_name + "<br>(" + unit + ")",
                style: {
                    color: ColorPicker.body
                },
                // margin: 50,
                // rotation: 0,
            },
            // lineColor: '#ff0000',
            // lineWidth: 2
        },
        legend: {
            title: {
                style: {
                    fontWeight: 'normal'
                }
            },
        },
        series: [{
            name: series_name,
            unit: unit,
            data: data,
            color: color
        }],

    };
}

function createDualAxesOptions_column_line(title, x_axis, s1_name, s1_data, s1_unit, s1_color, s2_name, s2_data, s2_unit, s2_color){
    return {
        chart: {
            height: window.innerHeight * 0.65, //chart_height,
            style: {
                // fontFamily: 'Lato Regular, sans-serif',
                color: ColorPicker.body
            },
            events: {
                load: function () {
                    var logoX = 15;
                    // var size = this.chartWidth / 10;
                    // var size = this.plotBox.x < this.plotBox.y ? this.plotBox.x : this.plotBox.y;
                    var size = this.plotBox.y;
                    size -= 5;

                    if(this.chartWidth < 500){
                        logoX = 10;
                        // size = this.chartWidth / 10;
                    }
                    var img_width = (this.chartWidth - 350)/2 - logoX;
                    var img_height = size;
                    // var img_url = "";
                    if(img_width >= img_height*4){
                        // wide logo
                        this.renderer.image("https://c1.staticflickr.com/1/826/26966705327_f80fcd7af1_o.png", logoX, 0, size * 4, size ).add();
                        // ErieStat logo. Change factor to 3
                        // this.renderer.image("https://c1.staticflickr.com/1/956/27966542108_a46fd4fa96_o.png", logoX, 0, size*3 , size).add();
                    }else{
                        // cube logo
                        this.renderer.image("https://c1.staticflickr.com/1/868/40969378165_8bd2c065b9_o.png", logoX, 0, size, size).add();
                    }
                    // var w = this.chartWidth - this.title.alignAttr.x;
                    // Blue Accounting Cube logo
                    // this.renderer.image("https://c1.staticflickr.com/1/868/40969378165_8bd2c065b9_o.png", logoX, 0, size, size).add();
                    // Blue Accouting Logo
                    // this.renderer.image("https://c1.staticflickr.com/1/826/26966705327_f80fcd7af1_o.png", logoX, 0, size * 4, size ).add();
                    // Blue Accounting ErieStat Logo
                    // this.renderer.image("https://c1.staticflickr.com/1/956/27966542108_a46fd4fa96_o.png", logoX, 0, size*3 , size).add();

                    // this.renderer.image("https://c1.staticflickr.com/5/4382/36578347693_3c6032000b_o.png", 0, 0, chart_width, chart_height).add();   //red watermark
//                if (isBgImg) {
//                    this.renderer.image("img/background_draft.png", this.plotLeft, this.plotTop, this.plotWidth, this.plotHeight).add(); //grey watermark
//                }
                }
            }
        },
        title: {
            text: title,
            style: {
                color: ColorPicker.body
            }
        },
        credits: {
            enabled: false,
            // href: "http://www.glc.org",
            // text: "Great Lakes Commission"
        },
        xAxis: [{
            categories: x_axis,
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            title: {
                text: s1_name + "<br>(" + s1_unit + ")",
                style: {
                    color: s1_color
                }
            }
        }, { // Secondary yAxis
            title: {
                text: s2_name + "<br>(" + s2_unit + ")",
                style: {
                    color: s2_color
                }
            },
            opposite: true
        }],
        series: [{
            name: s1_name,
            type: "column",
            unit: s1_unit,
            data: s1_data,
            color: s1_color
            // tooltip: {
            //     valueSuffix: ' mm'
            // }

        }, {
            name: s2_name,
            type: "line",
            yAxis: 1,
            unit: s2_unit,
            data: s2_data,
            color: s2_color,
            visible: false
            // tooltip: {
            //     valueSuffix: '°C'
            // }
        }]
    }

}

function createDualAxesOptions_column_area(title, x_axis, s1_name, s1_data, s1_unit, s1_color, s2_name, s2_data, s2_unit, s2_color){
    return {
        chart: {
            height: window.innerHeight * 0.65, //chart_height,
            style: {
                // fontFamily: 'Lato Regular, sans-serif',
                color: ColorPicker.body
            },
        },
        title: {
            text: title,
            style: {
                color: ColorPicker.body
            }
        },
        credits: {
            enabled: false,
            // href: "http://www.glc.org",
            // text: "Great Lakes Commission"
        },
        xAxis: [{
            categories: x_axis,
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            title: {
                text: s1_name + "<br>(" + s1_unit + ")",
                style: {
                    color: s1_color
                }
            }
        }, { // Secondary yAxis
            title: {
                text: s2_name + "<br>(" + s2_unit + ")",
                style: {
                    color: s2_color
                }
            },
            opposite: true
        }],
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, s2_color],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
            }
        },
        series: [{
            name: s1_name,
            type: "column",
            unit: s1_unit,
            data: s1_data,
            color: s1_color
            // tooltip: {
            //     valueSuffix: ' mm'
            // }

        }, {
            name: s2_name,
            type: "area",
            yAxis: 1,
            unit: s2_unit,
            data: s2_data,
            color: s2_color
            // tooltip: {
            //     valueSuffix: '°C'
            // }
        }]
    }

}

function addTargetLine(chart, target, title) {
    chart.addSeries({
        type: 'line',
        data: createTargetSeries(target, xAxis),
        name: buildTargetTitle(title) ,
        color: ColorPicker.target_red,
        lineWidth: 3,
        marker: {
            radius: 0
        },
    })
};

function createTargetSeries(val, xAxis) {
    var s = [];
    xAxis.map(function () {
        s.push(val)
    });
    return s;
};

function buildTargetTitle(title){
    if(title){
        return title + " Target";
    }else{
        return 'Target';
    }
};

function getStandardWatershedName(w_name){
    return
};

function buildNarratives(w_name){
    $("#narrative-caption").text(watershedNames[w_name] + " Watershed");
    var n = narratives[watershedNames[w_name]];
    if(!n){
        n = "<p style='text-transform: uppercase;font-style: italic'>*Watershed Description unavailable.</p>"
    }
    $("#narrative-content").html(n);
}

function buildChart(data, tag, name, metric, unit, width=null, height=null){
    /**
     * Build two charts for each watershed, using the BA library
     */

        //get the watershed name
    var w_name = watershedNames[name];//feature.properties.Name;
    // var m = metrics.SRP_L_S;
    // var u = units.SRP_L_S;
    var w_data = getWatershedMetric(data, w_name, metric);
    if(w_data.length > 0){
        var t = undefined;
        if(targets[w_name] && targets[w_name][metric]){

                t = targets[w_name][metric];

        }

        // var t = targets[w_name][metric];
        var data_series = [];
        for (var i = 0; i < w_data.length; i++){
            data_series.push(w_data[i].Value);
        }
        return createChart(tag, "column", metric, data_series, ColorPicker.blue7, w_name + " " + metric, unit, false, t, width=width, height=height);
    }else{
        $("#"+tag).html("<p style='text-transform: uppercase;font-style: italic'>*DATA UNAVAILABLE FOR " + w_name + " WATERSHED</p>");
    }
}