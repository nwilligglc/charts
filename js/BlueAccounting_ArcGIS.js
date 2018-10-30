function BlueAccounting(){
    var Highcharts;

    this.ColorPicker = {
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

    this.init = function (hc) {
        Highcharts = hc;
        Highcharts.Chart.prototype.viewData = function () {
            if (!this.insertedTable) {
                var div = document.createElement('div');
                div.className = 'highcharts-data-table';
                // Insert after the chart container
                this.renderTo.parentNode.insertBefore(div, this.renderTo.nextSibling);
                div.innerHTML = this.getTable();
                this.insertedTable = true;
                var date_str = new Date().getTime().toString();
                var rand_str = Math.floor(Math.random() * (1000000)).toString();
                this.insertedTableID = 'div_' + date_str + rand_str
                div.id = this.insertedTableID;
            }
            else {
                $('#' + this.insertedTableID).toggle();
            }
        };
    };

    // this.ErieStat = {
    //     es_data: null,
    //     xAxis: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
    //     watershedNames: {
    //         "Cattaraugus": "Cattaraugus River",
    //         "Cuyahoga": "Cuyahoga River",
    //         "Detroit": "Detroit River",
    //         "Grand": "Grand River",
    //         "Grand (Ontario)": "Grand (Ontario) River",
    //         "Huron": "Huron River",
    //         "Leamington": "Leamington Tributaries",
    //         "Maumee": "Maumee River",
    //         "Raisin": "River Raisin",
    //         "Portage": "Portage River",
    //         "Sandusky": "Sandusky River",
    //         "Thames": "Thames River",
    //         "Cedar-Toussaint": "Cedar-Toussaint",
    //         "Vermilion": "Vermilion River"
    //     },
    //     metrics: {
    //         "TP_L": {
    //             name: "Annual TP Loading",
    //             unit: "metric tons"
    //         },
    //         "SRP_L": {
    //             name: "Annual SRP Loading",
    //             unit: "metric tons"
    //         },
    //         "TP_FWMC": {
    //             name: "Annual TP FWMC",
    //             unit: "milligrams / liter"
    //         },
    //         "SRP_FWMC": {
    //             name: "Annual SRP FWMC",
    //             unit: "milligrams / liter"
    //         },
    //         "Discharge": {
    //             name: "Annual Discharge",
    //             unit: "million cubic meters"
    //         },
    //         "TP_L_S": {
    //             name: "Spring TP Loading",
    //             unit: "metric tons"
    //         },
    //         "SRP_L_S": {
    //             name: "Spring SRP Loading",
    //             unit: "metric tons"
    //         },
    //         "TP_FWMS_S": {
    //             name: "Spring TP FWMC",
    //             unit: "milligrams / liter"
    //         },
    //         "SRP_FWMC_S": {
    //             name: "Spring SRP FWMC",
    //             unit: "milligrams / liter"
    //         },
    //         "Discharge_S": {
    //             name: "Spring Discharge",
    //             unit: "million cubic meters"
    //         }
    //     },
    //     units: {
    //     },
    //     targets: {
    //         "Maumee River": {
    //             "Annual TP Loading": 2287,
    //             "Spring TP Loading": 860,
    //             "Spring SRP Loading": 186,
    //             "Spring TP FWMC": 0.23,
    //             "Spring SRP FWMC": 0.05
    //         },
    //         "Portage River": {
    //             "Annual TP Loading": 215
    //             // "Spring TP Loading": 0,
    //             // "Spring SRP Loading": 0,
    //             // "Spring TP FWMC": 0,
    //             // "Spring SRP FWMC": 0
    //         },
    //         // "River Raisin": {
    //         //     "Annual TP Loading": 0,
    //         //     "Spring TP Loading": 0,
    //         //     "Spring SRP Loading": 0,
    //         //     "Spring TP FWMC": 0,
    //         //     "Spring SRP FWMC": 0
    //         // },
    //
    //         "Sandusky River": {
    //             "Annual TP Loading": 660,
    //             "Spring TP Loading": 230,
    //             "Spring SRP Loading": 43,
    //             "Spring TP FWMC": 0.23,
    //             "Spring SRP FWMC": 0.05
    //         },
    //         "Cuyahoga River": {
    //             "Annual TP Loading": 271
    //         }
    //     },
    //
    //     intro_SRP: "<p>The U.S. and Canada set phosphorus reduction goals (40 percent of 2008 loads) for eight priority tributary watersheds for both total and soluble reactive phosphorus (SRP) during March-July. SRP refers to phosphorus that is in a dissolved state and is of particular interest because it is the easiest form of phosphorus for algae to use to fuel growth.</p><p>The targets for these tributaries are expressed in terms of the flow weighted mean concentration (FWMC) – which is a way to normalize the load for flow. This is important because much of the load is delivered during storm events. It means that efforts to reduce the load must also include efforts to reduce the amount of flow (runoff). FWMC also provides an important backstop and relative measure of whether phosphorus control efforts are actually having an impact. For example, in a dry year the load may be low due to less runoff, but the FWMC will still be high if the proportion of phosphorus in that runoff is high.</p><p>The calculation of spring load requires high frequency flow and water quality monitoring, which is now in place for all nearshore priority tributaries. Not all tributaries had monitoring in place going back to 2008.</p><p>Click on the watershed of interest to see available data.</p>",
    //     intro_TP: "<p>The U.S. and Canada agreed to limit the total phosphorus (TP) load to Lake Erie’s central basin, which includes inputs from the St. Clair-Detroit River corridor, to 6,000 Metric Tons per year (MTA) annually. This was based on modeling of the hypoxic (low oxygen) zone in the lake. The modeling indicated that 6,000 MTA is the maximum load that would result in an acceptable dissolved oxygen concentration of at least 2 milligrams per liter in the bottom waters during the summer stratified period. This means that during the warmest months of the year, oxygen in Lake Erie’s water would be high enough to reduce the “dead zone” that has been cause for concern in recent years.</p><p>Ten priority watersheds were identified and assigned a target to reduce annual total phosphorus loads to 40 percent of the 2008 load, by water year (October-September). With the exception of the Detroit River connecting channel, these loads are estimated at the mouth of the tributary, using three pieces of information: 1) water quality monitoring data collected at the most downstream stream gage for the river; 2) reported data for point source dischargers beyond this point; an 3) an estimate for the unmonitored area beyond the gage, using a simple ratio for unit-area load. The Detroit River is not monitored directly; instead the load is computed as a sum of upstream tributary loadings and point source dischargers.</p><p>Click on the watershed of interest to see available data.</p>",
    //     intro_FWMC: "<p>The flow-weighted mean concentration (FWMC) adjusts phosphorus loads to normalize for tributary flow, which enables year-by-year comparisons that are not confounded by changes in flow. Click on the watershed of interest to see available data.</p>",
    //
    //     narratives: {
    //         "Cattaraugus River": "",
    //         "Cuyahoga River": "The Cuyahoga River watershed is located in northeastern Ohio. It drains a total of 812 square miles (2,103 km<sup>2</sup>) and flows through all or part of six counties. Major municipalities partially or fully in the watershed include Cleveland and some of its suburbs, Akron, Kent and Cuyahoga Falls. ",
    //         "Detroit River": "The Detroit River flows for 32 miles (52 km) from Lake St. Clair to Lake Erie as a strait in the Great Lakes system and forms part of the border between Canada and the U.S.",
    //         "Grand River": "The Grand River watershed is located in northeastern Ohio. It drains a total of 707 square miles (1,831 km<sup>2</sup>) and flows through all or part of five counties. Major municipalities partially or fully in the watershed include Orwell, Roaming Shores, Jefferson, West Farmington, Chardon and Painesville. The watershed is a mixture of forest, agricultural land uses such as cultivated crops and pasture and hay lands, and urban land uses. ",
    //         "Grand (Ontario) River": "",
    //         "Huron River": "The Huron River watershed is located on the south shore of Lake Erie between Toledo and Cleveland, in Huron, Erie, Seneca, Richland and Crawford counties.  The Huron River is 59.7 miles (96 km) long and the watershed covers 403 square miles (1,044 km<sup>2</sup>).  Land use is primarily dedicated to agricultural activities with approximately 74 percent cropland, 15 percent woodland, and 3 to 11 percent urban and other land uses.",
    //         "Leamington Tributaries": "",//"The Leamington Tributaries are located in the southeastern area of the Essex Region in the municipalities of Leamington and Kingsville and drain directly to Lake Erie. Collectively the tributaries drain an area of approximately 70 km<sup>2</sup> (43 sq. mi), which is characterized by a high density of greenhouses, as well as row crop agriculture, specialty crops and residential areas.",
    //         "Maumee River": "The Maumee River watershed is located primarily in northwestern Ohio, with the western and northern boundaries extending into portions of Indiana and Michigan. The Maumee River watershed drains a total of 6,568 square miles (17,011 km<sup>2</sup>), 5,024 (13,012) of which are in Ohio. Major municipalities in the watershed include Toledo, Fort Wayne, Defiance, Findlay, Lima, Van Wert, Napoleon and Perrysburg. The watershed is predominantly comprised of cultivated crops with some urban development, hay and pasture lands, and forest.",
    //         "River Raisin": "The River Raisin is a river in southeastern Michigan that flows into Lake Erie. The area is an agricultural and industrial center. The river flows for almost 150 miles (241 km), draining an area of 1,072 square miles (2,780 km<sup>2</sup>) in the Michigan counties of Lenawee, Washtenaw, Jackson, Hillsdale, a portion of Fulton County, Ohio. The mouth of the river is located in Monroe County, Michigan.",
    //         "Portage River": "The Portage River is located in northwestern Ohio and drains 585 square miles (1515 km<sup>2</sup>). The Portage River flows into Lake Erie at Port Clinton in Ottawa County. The watershed is distributed across Ottawa, Sandusky, Hancock and Wood counties with a small portion in Seneca County. Land use in the watershed is comprised predominantly of 78 percent cultivated cropland, 11 percent developed land and 5 percent forest.",
    //         "Sandusky River": "The Sandusky River and Sandusky Bay watersheds are located in northwestern Ohio. They drain a total of 1,828 square miles (4,734 km<sup>2</sup>) and flow through all or part of 12 counties. Major municipalities in the watershed include Sandusky, Fremont, Tiffin, Bucyrus and Upper Sandusky. The watersheds are predominantly comprised of cultivated crops with some areas of urban development and pasture and hay lands. Wetlands are located in the northern portion of the watersheds.",
    //         "Thames River": "",//"The Thames River is 280 km (174 miles) long, draining approximately 5,800 km<sup>2</sup> (2,239 sq. mi.) of Southwestern Ontario to Lake St. Clair. The watershed is primarily (approximately 80 percent) agricultural, but also contains cities and towns such as London, Woodstock, Chatham, as well as numerous smaller urban areas, with a total population of approximately 600,000 people.",
    //         "Cedar-Toussaint": "The Toussaint River watershed is a 143 square-mile (371 km<sup>2</sup>) watershed in northwest Ohio. The Toussaint’s watershed is a flat glacial lake plain that was historically a vast forested marshland. Today, the drainage basin consists of highly productive agricultural land. Within the lower reach of the river, there are two significant protected natural areas.",
    //         "Vermilion River": "The Vermilion River watershed is located in northern Ohio, west of Cleveland.  It drains 269 square miles (697 km<sup>2</sup>) and flows through parts of five counties.  Land use in the watershed is predominantly comprised of cultivated crops with pockets of pasture and hay lands, urban development and forest.  Municipalities include Vermilion, New London, Greenwich and Wakeman."
    // },
    //
    //     init: function(ba_data){
    //         this.es_data = ba_data;
    //         Highcharts.setOptions({
    //             lang: {
    //                 numericSymbols: null,
    //                 thousandsSep: ',',
    //                 // viewData: null
    //             }
    //         });
    //     },
    //
    //     getWatershedData: function (unitName, metric) {
    //         var vals = $(this.es_data).filter(function(i, n) {
    //             return n.River===(unitName)&& n.Fraction===metric /*&& n.Value !== ""*/ // n.River===w_name
    //         });
    //         vals.sort(function(a, b){
    //             return (a.Year > b.Year) ? 1 : ((a.Year < b.Year) ? -1 : 0);
    //         });
    //
    //         return vals.map(function (v){
    //             return vals[v].Value
    //         } );
    //     }
    //
    //
    // };

    this.Maritime = {};

    this.Coastal = {};

    this.SourceWater = {};


    // this.setData = function(data){
    //     this.data = data;
    // };

    this.buildSingleChart = function (type, series, seriesName, seriesUnit, color, startingYear, title, subtitle, target, tag, height, width) {
        var chart = Highcharts.chart(tag, {
            chart: {
                background: "transparent",
                type: type,
                width: width,
                height: height,
                style: {
                    color: this.ColorPicker.body
                },
                events: {
                    load: function () {
                        var logoX = 15;
                        var size = this.plotBox.y;
                        size -= 5;

                        if(this.chartWidth < 500){
                            logoX = 10;
                        }
                        var img_width = (this.chartWidth - 350)/2 - logoX;
                        var img_height = size;
                        if(img_width >= img_height*4){
                            // wide logo. local resource
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
                        // if (isBgImg) {
                        //     this.renderer.image("img/background_draft.png", this.plotLeft, this.plotTop, this.plotWidth, this.plotHeight).add(); //grey watermark
                        // }
                    }
                }
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: true
            },
            title: {
                text: title
            },
            subtitle: {
                text: subtitle
            },
            yAxis: {
                title: {
                    text: seriesName + "<br>(" + seriesUnit + ")",
                    style: {
                        color: color
                    }
                },
                min: 0
            },
            xAxis: {

            },
            plotOptions: {
                series: {
                    pointStart: startingYear
                }
            },
            series: [
                {
                    name: seriesName,
                    data: series,
                    color: color
                }
            ]
        });
        if (target) {
            this.addTargetLine(chart, target, seriesName + " Target");
        }

        return chart;
    };

    this.buildDualAxesChart = function (series1, seriesName1, seriesUnit1, color1, chartType1,
                                        series2, seriesName2, seriesUnit2, color2, chartType2,
                                        tag, title, subtitle, startingYear, target1, target2, height, width) {
        var chart;
        if (!series1) {
            seriesName1 += " (not available)";
        }
        if (!series2) {
            seriesName2 += " (not available)";
        }

        chart = this.Highcharts.chart(tag, {
            chart: {
                height: height,
                width: width,
                style: {
                    color: this.ColorPicker.body
                },
                events: {
                    load: function () {
                        var logoX = 15;
                        var size = this.plotBox.y;
                        size -= 5;

                        if(this.chartWidth < 500){
                            logoX = 10;
                        }
                        var img_width = (this.chartWidth - 350)/2 - logoX;
                        // var img_height = size;
                        if(img_width >= size * 4){
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
                    color: this.ColorPicker.body
                }
            },
            subtitle: {
                text: subtitle
            },
            credits: {
                enabled: false,
            },
            xAxis: [{

            }],
            yAxis: [{ // Primary yAxis
                title: {
                    text: seriesName1 + "<br>(" + seriesUnit1 + ")",
                    style: {
                        color: color1
                    }
                }
            }, { // Secondary yAxis
                title: {
                    text: seriesName2 + "<br>(" + seriesUnit2 + ")",
                    style: {
                        color: color2
                    }
                },
                min: 0,
                opposite: true
            }],
            plotOptions: {
                series: {
                    pointStart: startingYear
                }
            },
            series: [{
                name: seriesName1,
                type: chartType1,
                unit: seriesUnit1,
                data: series1,
                color: color1
            }, {
                name: seriesName2,
                type: chartType2,
                yAxis: 1,
                unit: seriesUnit2,
                data: series2,
                color: color2,
                // visible: isSeriesVisible(s2_visible)
            }]
        });

        if (target1) {
            this.addTargetLine(chart, target1, seriesName1 + " Target");
        }
        if (target2) {
            this.addTargetLine(chart, target2, seriesName2 + " Target", "shortdot");
        }

        return chart;
    };

    this.addTargetLine = function (chart, target, targetTitle, lineStyle) {
        var targetSeries = [];
        chart.series[0].data.map(function() {
            targetSeries.push(target);
        });

        chart.addSeries({
            type: 'line',
            data: targetSeries,
            name: targetTitle ,
            color: this.ColorPicker.target_red,
            lineWidth: 3,
            marker: {
                radius: 0
            },
            dashStyle: lineStyle
        })
    };

    // this.addSecondTargetLine = function (chart, target, targetTitle) {
    //     var targetSeries = [];
    //     chart.series[0].data.map(function() {
    //         targetSeries.push(target);
    //     });
    //
    //     chart.addSeries({
    //         type: 'line',
    //         data: targetSeries,
    //         name: targetTitle ,
    //         color: ColorPicker.target_red,
    //         lineWidth: 3,
    //         marker: {
    //             radius: 0
    //         },
    //         dashStyle: 'shortdot'
    //     })
    // }

    this.buildStockChart = function (tag, title, xTitle, yTitle, data_series, height, width){
        return Highcharts.stockChart(tag, {
            chart:{
                height: height,
                width: width,
                events: {
                    load: function () {
                        var logoX = 15;
                        var size = this.plotBox.y - 5;

                        if(this.chartWidth < 500){
                            logoX = 10;
                        }
                        var img_width = (this.chartWidth - 350)/2 - logoX;
                        var img_height = size - 35;
                        if(img_width >= img_height*4){
                            // wide logo. local resource
                            this.renderer.image("https://c1.staticflickr.com/1/826/26966705327_f80fcd7af1_o.png", logoX, 0, img_height * 4, img_height ).add();
                            // ErieStat logo. Change factor to 3
                            // this.renderer.image("https://c1.staticflickr.com/1/956/27966542108_a46fd4fa96_o.png", logoX, 0, size*3 , size).add();
                        }else{
                            // cube logo
                            this.renderer.image("https://c1.staticflickr.com/1/868/40969378165_8bd2c065b9_o.png", logoX, 0, img_height, img_height).add();
                        }
                        // var w = this.chartWidth - this.title.alignAttr.x;
                        // Blue Accounting Cube logo
                        // this.renderer.image("https://c1.staticflickr.com/1/868/40969378165_8bd2c065b9_o.png", logoX, 0, size, size).add();
                        // Blue Accouting Logo
                        // this.renderer.image("https://c1.staticflickr.com/1/826/26966705327_f80fcd7af1_o.png", logoX, 0, size * 4, size ).add();
                        // Blue Accounting ErieStat Logo
                        // this.renderer.image("https://c1.staticflickr.com/1/956/27966542108_a46fd4fa96_o.png", logoX, 0, size*3 , size).add();

                        // this.renderer.image("https://c1.staticflickr.com/5/4382/36578347693_3c6032000b_o.png", 0, 0, chart_width, chart_height).add();   //red watermark
                        // if (isBgImg) {
                        //     this.renderer.image("img/background_draft.png", this.plotLeft, this.plotTop, this.plotWidth, this.plotHeight).add(); //grey watermark
                        // }
                    }
                }
            },
            rangeSelector: {
                selected: 5
            },
            tooltip: {
                dateTimeLabelFormats: {
                    // second: '%Y-%m-%d<br/>%H:%M:%S',
                    minute: '%Y-%m-%d<br/>%H:%M',
                    hour: '%Y-%m-%d<br/>%H:%M',
                    day: '%Y<br/>%m-%d',
                    week: '%Y<br/>%m-%d',
                    month: '%Y-%m',
                    year: '%Y'
                }
            },
            credits: {
                enabled:false
            },
            legend: {
                enabled: true
            },
            title: {
                text: title
            },

            xAxis: {
                title: {
                    enabled: true,
                    text: xTitle
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: yTitle
                }
            },
            series: data_series
        })
    }
}


