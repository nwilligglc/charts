var xAxis = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"];
//var chart_width = 500;
//var chart_height = 300;

// var chart_width = 800;
// var chart_height = 400;

function BA_charts() {}

BA_charts.prototype.test = function () {

}

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

// function createOptions(chartDiv, style, title, yAxisText, dataSeries){
//     return {
//         chart: {
//             renderTo: chartDiv,
//             defaultSeriesType: style,
//             style: {
//                 fontFamily: 'Lato, sans-serif'
//             }
//         },
//         credits: {
//             enabled: false
//         },
//         title: {
//             text: title
//         },
//         xAxis: {
//             categories: xAxis
//         },
//         yAxis: {
//             title: {
//                 text: yAxisText
//             }
//         },
//         series: dataSeries
//     }
// }
//
// //
//
// function createChart(attributes, fieldName, targetName, chartDiv, style, targetType, title, displayName, yAxisText, dataColor, targetColor) {
//     var data = [];
//     var dataSeries = [];
//     var options;
//     if (attributes[fieldName]) {
//         attributes[fieldName].split(',').forEach(function (d) {
//             data.push(parseFloat(d));
//         })
//         dataSeries.push({
//             name: displayName,
//             data: data,
//             color: dataColor
//         });
//         if (attributes[targetName]) {
//             var target = [];
//             xAxis.forEach(function () {
//                 target.push(parseFloat(attributes[targetName]));
//             });
//             dataSeries.push(
//                 {
//                     type: targetType,
//                     name: 'Target',
//                     data: target,
//                     color: targetColor
//
//                 });
//         }
//         options = createOptions(chartDiv, style, title, yAxisText, dataSeries)
//     }
//     else {
//         data = null;
//         options = createOptions(chartDiv, style, title + " (Not Available)", yAxisText, null)
//     }
//     new Highcharts.Chart(options);
// }

// function BA_ES(filename){
//     this.watershed = {
//         name: name,
//         TPloading: {
//             name: 'Annual TP Loading',
//             unit: 'Metric Tons',
//             series: []
//         },
//         DRPloading: {
//             name: 'Annual DRP Loading',
//             unit: 'Metric Tons',
//             series: []
//         },
//         TPFWMC: {
//             name: 'Annual TP FWMC',
//             unit: 'mg/L',
//             series: []
//         },
//         DRPFWMC: {
//             name: 'Annual DRP FWMC',
//             unit: 'mg/L',
//             series: []
//         },
//         discharge:{
//             name: 'Annual Discharge',
//             unit: 'Million Cubic Meters',
//             series: []
//         },
//         TPloading_S: {
//             name: 'Spring TP Loading',
//             unit: 'Metric Tons',
//             series: []
//         },
//         DRPloading_S: {
//             name: 'Spring DRP Loading',
//             unit: 'Metric Tons',
//             series: []
//         },
//         TPFWMC_S: {
//             name: 'Spring TP FWMC',
//             unit: 'mg/L',
//             series: []
//         },
//         DRPFWMC_S: {
//             name: 'Spring DRP FWMC',
//             unit: 'mg/L',
//             series: []
//         },
//         discharge_S:{
//             name: 'Spring Discharge',
//             unit: 'Million Cubic Meters',
//             series: []
//         },
//     };
//
//     this.addToFraction = function(name, year, val){
//         switch (name){
//             case this.watershed.TPloading.name:
//                 this.watershed.TPloading.series.splice(year - 2008, 0, (val));
//                 break;
//             case this.watershed.DRPloading.name:
//                 this.watershed.DRPloading.series.splice(year - 2008, 0, (val));
//                 break;
//             case this.watershed.TPFWMC.name:
//                 this.watershed.TPFWMC.series.splice(year - 2008, 0, (val));
//                 break;
//             case this.watershed.DRPFWMC.name:
//                 this.watershed.DRPFWMC.series.splice(year - 2008, 0, (val));
//                 break;
//             case this.watershed.discharge.name:
//                 this.watershed.discharge.series.splice(year - 2008, 0, (val));
//                 break;
//             case this.watershed.TPloading_S.name:
//                 this.watershed.TPloading_S.series.splice(year - 2008, 0, val);
//                 break;
//             case this.watershed.DRPloading_S.name:
//                 this.watershed.DRPloading_S.series.splice(year - 2008, 0, val);
//                 break;
//             case this.watershed.TPFWMC_S.name:
//                 this.watershed.TPFWMC_S.series.splice(year - 2008, 0, val);
//                 break;
//             case this.watershed.DRPFWMC_S.name:
//                 this.watershed.DRPFWMC_S.series.splice(year - 2008, 0, val);
//                 break;
//             case this.watershed.discharge_S.name:
//                 this.watershed.discharge_S.series.splice(year - 2008, 0, val);
//                 break;
//             default:
//                 alert(name + ' ' + year + ' ' + val);
//         }
//     };
//
//     this.test = function (in_file, watershed) {
//         in_file.forEach(function (obj) {
//             addToFraction(obj.Fraction, parseInt(obj.Year), parseFloat(obj.Value));
//         });
//
//     d3.csv(filename, function (in_file) {
//         test(in_file)
//     }
//         in_file.forEach(function (obj) {
//             addToFraction(obj.Fraction, parseInt(obj.Year), parseFloat(obj.Value));
//         });
//     });
//     // this.prototype.my_test2 = function (){
//     //
//     // };
//
//     // this.prototype.createWatershedChart = function (eleID, name, filename, fraction, chartType, target, startingVal){
//     //     var watershed = {
//     //         name: name,
//     //         TPloading: {
//     //             name: 'Annual TP Loading',
//     //             unit: 'Metric Tons',
//     //             series: []
//     //         },
//     //         DRPloading: {
//     //             name: 'Annual DRP Loading',
//     //             unit: 'Metric Tons',
//     //             series: []
//     //         },
//     //         TPFWMC: {
//     //             name: 'Annual TP FWMC',
//     //             unit: 'mg/L',
//     //             series: []
//     //         },
//     //         DRPFWMC: {
//     //             name: 'Annual DRP FWMC',
//     //             unit: 'mg/L',
//     //             series: []
//     //         },
//     //         discharge:{
//     //             name: 'Annual Discharge',
//     //             unit: 'Million Cubic Meters',
//     //             series: []
//     //         },
//     //         TPloading_S: {
//     //             name: 'Spring TP Loading',
//     //             unit: 'Metric Tons',
//     //             series: []
//     //         },
//     //         DRPloading_S: {
//     //             name: 'Spring DRP Loading',
//     //             unit: 'Metric Tons',
//     //             series: []
//     //         },
//     //         TPFWMC_S: {
//     //             name: 'Spring TP FWMC',
//     //             unit: 'mg/L',
//     //             series: []
//     //         },
//     //         DRPFWMC_S: {
//     //             name: 'Spring DRP FWMC',
//     //             unit: 'mg/L',
//     //             series: []
//     //         },
//     //         discharge_S:{
//     //             name: 'Spring Discharge',
//     //             unit: 'Million Cubic Meters',
//     //             series: []
//     //         },
//     //         addToFraction: function(name, year, val){
//     //             switch (name){
//     //                 case this.TPloading.name:
//     //                     this.TPloading.series.splice(year - 2008, 0, (val));
//     //                     break;
//     //                 case this.DRPloading.name:
//     //                     this.DRPloading.series.splice(year - 2008, 0, (val));
//     //                     break;
//     //                 case this.TPFWMC.name:
//     //                     this.TPFWMC.series.splice(year - 2008, 0, (val));
//     //                     break;
//     //                 case this.DRPFWMC.name:
//     //                     this.DRPFWMC.series.splice(year - 2008, 0, (val));
//     //                     break;
//     //                 case this.discharge.name:
//     //                     this.discharge.series.splice(year - 2008, 0, (val));
//     //                     break;
//     //                 case this.TPloading_S.name:
//     //                     this.TPloading_S.series.splice(year - 2008, 0, val);
//     //                     break;
//     //                 case this.DRPloading_S.name:
//     //                     this.DRPloading_S.series.splice(year - 2008, 0, val);
//     //                     break;
//     //                 case this.TPFWMC_S.name:
//     //                     this.TPFWMC_S.series.splice(year - 2008, 0, val);
//     //                     break;
//     //                 case this.DRPFWMC_S.name:
//     //                     this.DRPFWMC_S.series.splice(year - 2008, 0, val);
//     //                     break;
//     //                 case this.discharge_S.name:
//     //                     this.discharge_S.series.splice(year - 2008, 0, val);
//     //                     break;
//     //                 default:
//     //                     alert(name + ' ' + year + ' ' + val);
//     //             }
//     //         }
//     //     };
//     //
//     //     d3.csv(filename, function (in_file) {
//     //         in_file.forEach(function (obj) {
//     //             watershed.addToFraction(obj.Fraction, parseInt(obj.Year), parseFloat(obj.Value));
//     //         });
//     //         var chart;
//     //         switch (chartType) {
//     //             case 'line':
//     //                 // chart = createLineChart(eleID, watershed[fraction].series, watershed[fraction].name, watershed[fraction].unit, watershed[fraction].name, watershed[fraction].unit, ColorPicker.blue1);
//     //                 if (startingVal !== undefined) {
//     //                     chart = createLineChart_start(eleID, watershed.name, watershed[fraction], ColorPicker.blue7, startingVal);
//     //                 } else {
//     //                     chart = createLineChart(eleID, watershed.name, watershed[fraction], ColorPicker.blue7);
//     //                 }
//     //                 break;
//     //             case 'column':
//     //                 // chart = createColumnChart(eleID, watershed[fraction].series, watershed[fraction].name, watershed[fraction].unit, watershed[fraction].name, watershed[fraction].unit, ColorPicker.blue2);
//     //                 chart = createColumnChart2(eleID, watershed.name, watershed[fraction], ColorPicker.blue7);
//     //                 break;
//     //             // case '':
//     //             //     chart = createColumnChart2(eleID, watershed.name, watershed[fraction], ColorPicker.blue3);
//     //             //     break;
//     //         }
//     //
//     //         if (target) {
//     //             addTargetLine(chart, target, 'line');
//     //         }
//     //
//     //
//     //         Highcharts.addEvent(chart, 'click', function () {
//     //             var ch = this;
//     //             setTimeout(function () {
//     //                 ch.exportChart({
//     //                     type: 'image/png',
//     //                     filename: watershed.name + '_' + watershed[fraction].name,
//     //                     options: {
//     //                         backgroundColor: '#9E9E9E'
//     //
//     //                     }
//     //                 });
//     //             }, 1);
//     //         });
//     //     });
//     // };
//
// }

// BA_ES.prototype.createWatershedChart = function (eleID, name, filename, fraction, chartType, target, startingVal){
//     // var watershed = {
//     //     name: name,
//     //     TPloading: {
//     //         name: 'Annual TP Loading',
//     //         unit: 'Metric Tons',
//     //         series: []
//     //     },
//     //     DRPloading: {
//     //         name: 'Annual DRP Loading',
//     //         unit: 'Metric Tons',
//     //         series: []
//     //     },
//     //     TPFWMC: {
//     //         name: 'Annual TP FWMC',
//     //         unit: 'mg/L',
//     //         series: []
//     //     },
//     //     DRPFWMC: {
//     //         name: 'Annual DRP FWMC',
//     //         unit: 'mg/L',
//     //         series: []
//     //     },
//     //     discharge:{
//     //         name: 'Annual Discharge',
//     //         unit: 'Million Cubic Meters',
//     //         series: []
//     //     },
//     //     TPloading_S: {
//     //         name: 'Spring TP Loading',
//     //         unit: 'Metric Tons',
//     //         series: []
//     //     },
//     //     DRPloading_S: {
//     //         name: 'Spring DRP Loading',
//     //         unit: 'Metric Tons',
//     //         series: []
//     //     },
//     //     TPFWMC_S: {
//     //         name: 'Spring TP FWMC',
//     //         unit: 'mg/L',
//     //         series: []
//     //     },
//     //     DRPFWMC_S: {
//     //         name: 'Spring DRP FWMC',
//     //         unit: 'mg/L',
//     //         series: []
//     //     },
//     //     discharge_S:{
//     //         name: 'Spring Discharge',
//     //         unit: 'Million Cubic Meters',
//     //         series: []
//     //     },
//     //     addToFraction: function(name, year, val){
//     //         switch (name){
//     //             case this.TPloading.name:
//     //                 this.TPloading.series.splice(year - 2008, 0, (val));
//     //                 break;
//     //             case this.DRPloading.name:
//     //                 this.DRPloading.series.splice(year - 2008, 0, (val));
//     //                 break;
//     //             case this.TPFWMC.name:
//     //                 this.TPFWMC.series.splice(year - 2008, 0, (val));
//     //                 break;
//     //             case this.DRPFWMC.name:
//     //                 this.DRPFWMC.series.splice(year - 2008, 0, (val));
//     //                 break;
//     //             case this.discharge.name:
//     //                 this.discharge.series.splice(year - 2008, 0, (val));
//     //                 break;
//     //             case this.TPloading_S.name:
//     //                 this.TPloading_S.series.splice(year - 2008, 0, val);
//     //                 break;
//     //             case this.DRPloading_S.name:
//     //                 this.DRPloading_S.series.splice(year - 2008, 0, val);
//     //                 break;
//     //             case this.TPFWMC_S.name:
//     //                 this.TPFWMC_S.series.splice(year - 2008, 0, val);
//     //                 break;
//     //             case this.DRPFWMC_S.name:
//     //                 this.DRPFWMC_S.series.splice(year - 2008, 0, val);
//     //                 break;
//     //             case this.discharge_S.name:
//     //                 this.discharge_S.series.splice(year - 2008, 0, val);
//     //                 break;
//     //             default:
//     //                 alert(name + ' ' + year + ' ' + val);
//     //         }
//     //     }
//     // };
//     //
//     // d3.csv(filename, function (in_file) {
//     //     in_file.forEach(function (obj) {
//     //         watershed.addToFraction(obj.Fraction, parseInt(obj.Year), parseFloat(obj.Value));
//     //     });
//         var chart;
//         switch (chartType) {
//             case 'line':
//                 // chart = createLineChart(eleID, watershed[fraction].series, watershed[fraction].name, watershed[fraction].unit, watershed[fraction].name, watershed[fraction].unit, ColorPicker.blue1);
//                 if (startingVal !== undefined) {
//                     chart = createLineChart_start(eleID, this.watershed.name, this.watershed[fraction], ColorPicker.blue7, startingVal);
//                 } else {
//                     chart = createLineChart(eleID, this.watershed.name, this.watershed[fraction], ColorPicker.blue7);
//                 }
//                 break;
//             case 'column':
//                 // chart = createColumnChart(eleID, watershed[fraction].series, watershed[fraction].name, watershed[fraction].unit, watershed[fraction].name, watershed[fraction].unit, ColorPicker.blue2);
//                 chart = createColumnChart2(eleID, this.watershed.name, this.watershed[fraction], ColorPicker.blue7);
//                 break;
//             // case '':
//             //     chart = createColumnChart2(eleID, watershed.name, watershed[fraction], ColorPicker.blue3);
//             //     break;
//         }
//
//         if (target) {
//             addTargetLine(chart, target, 'line');
//         }
//
//
//         Highcharts.addEvent(chart, 'click', function () {
//             var ch = this;
//             setTimeout(function () {
//                 ch.exportChart({
//                     type: 'image/png',
//                     filename: watershed.name + '_' + watershed[fraction].name,
//                     options: {
//                         backgroundColor: '#9E9E9E'
//
//                     }
//                 });
//             }, 1);
//         });
//     // });
// };

/**
 *
 * @param eleID
 * @param name
 * @param filename
 * @param fraction
 * @param chartType
 * @param target
 * @param startingVal Not in use. Reserved if need to change the starting value.
 */
function createWatershedChart(eleID, name, filename, fraction, chartType, target, bgimage = true, startingVal) {
    var watershed = {
        name: name,
        TPloading: {
            name: 'Annual TP Loading',
            unit: 'Metric Tons',
            series: []
        },
        DRPloading: {
            name: 'Annual DRP Loading',
            unit: 'Metric Tons',
            series: []
        },
        TPFWMC: {
            name: 'Annual TP FWMC',
            unit: 'mg/L',
            series: []
        },
        DRPFWMC: {
            name: 'Annual DRP FWMC',
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
        DRPloading_S: {
            name: 'Spring DRP Loading',
            unit: 'Metric Tons',
            series: []
        },
        TPFWMC_S: {
            name: 'Spring TP FWMC',
            unit: 'mg/L',
            series: []
        },
        DRPFWMC_S: {
            name: 'Spring DRP FWMC',
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
            case this.DRPloading.name:
                this.DRPloading.series.splice(year - 2008, 0, (val));
                break;
            case this.TPFWMC.name:
                this.TPFWMC.series.splice(year - 2008, 0, (val));
                break;
            case this.DRPFWMC.name:
                this.DRPFWMC.series.splice(year - 2008, 0, (val));
                break;
            case this.discharge.name:
                this.discharge.series.splice(year - 2008, 0, (val));
                break;
            case this.TPloading_S.name:
                this.TPloading_S.series.splice(year - 2008, 0, val);
                break;
            case this.DRPloading_S.name:
                this.DRPloading_S.series.splice(year - 2008, 0, val);
                break;
            case this.TPFWMC_S.name:
                this.TPFWMC_S.series.splice(year - 2008, 0, val);
                break;
            case this.DRPFWMC_S.name:
                this.DRPFWMC_S.series.splice(year - 2008, 0, val);
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
        };
        if (target) {
            addTargetLine(chart, target, 'line');
        }


        /**
         * The following event is for click-and-save
         */
        // Highcharts.addEvent(chart, 'click', function(){
        //     var ch = this;
        //     setTimeout(function(){
        //         ch.exportChart({
        //             type: 'image/png',
        //             filename: watershed.name + '_' + watershed[fraction].name  + '_watermark_grey',
        //             options: {
        //                                            backgroundColor: '#9E9E9E'
        //
        //             }
        //         });
        //     },1);
        // });
        // chart.exportChart({
        //     type: 'image/png',
        //     filename: watershed.name + '_' + watershed[fraction].name + '_watermark_red'
        // });
        // chart.exportChart({
        //     type: 'image/svg+xml',
        //     filename: watershed.name + '_' + watershed[fraction].name
        // })
    });
}

function createDualAxesChart(eleID, chartName, filename, fraction1, fraction2, series1type, series2type, max1, max2, target) {
    var watershed = {
        name: name,
        TPloading: {
            name: 'Annual TP Loading',
            unit: 'Metric Tons',
            series: []
        },
        DRPloading: {
            name: 'Annual DRP Loading',
            unit: 'Metric Tons',
            series: []
        },
        TPFWMC: {
            name: 'Annual TP FWMC',
            unit: 'mg/L',
            series: []
        },
        DRPFWMC: {
            name: 'Annual DRP FWMC',
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
        DRPloading_S: {
            name: 'Spring DRP Loading',
            unit: 'Metric Tons',
            series: []
        },
        TPFWMC_S: {
            name: 'Spring TP FWMC',
            unit: 'mg/L',
            series: []
        },
        DRPFWMC_S: {
            name: 'Spring DRP FWMC',
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
            case this.DRPloading.name:
                this.DRPloading.series.splice(year - 2008, 0, (val));
                break;
            case this.TPFWMC.name:
                this.TPFWMC.series.splice(year - 2008, 0, (val));
                break;
            case this.DRPFWMC.name:
                this.DRPFWMC.series.splice(year - 2008, 0, (val));
                break;
            case this.discharge.name:
                this.discharge.series.splice(year - 2008, 0, (val));
                break;
            case this.TPloading_S.name:
                this.TPloading_S.series.splice(year - 2008, 0, val);
                break;
            case this.DRPloading_S.name:
                this.DRPloading_S.series.splice(year - 2008, 0, val);
                break;
            case this.TPFWMC_S.name:
                this.TPFWMC_S.series.splice(year - 2008, 0, val);
                break;
            case this.DRPFWMC_S.name:
                this.DRPFWMC_S.series.splice(year - 2008, 0, val);
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
        Highcharts.setOptions({
            lang: {
                numericSymbols: null,
                thousandsSep: ','
            }

        });
        var chart = Highcharts.chart(eleID, {
            chart: {
                width: undefined, //chart_width,
                height: chart_height, //undefined,//chart_height,
                style: {
                    fontFamily: 'Montserrat, sans-serif',
                    color: ColorPicker.body
                },
                // backgroundColor: '#00ff00'
                /**
                 * The following events is for watermark
                 */
                events: {
                    load: function () {
                        // this.renderer.image("https://c1.staticflickr.com/5/4382/36578347693_3c6032000b_o.png", 0, 0, chart_width, chart_height).add();   //red watermark
                        this.renderer.image("https://c1.staticflickr.com/5/4514/23628988768_984b3f3343_o.png", this.plotLeft, this.plotTop, this.plotWidth, this.plotHeight).add(); //grey watermark
                    }
                }
            },
            title: {
                text: chartName + ' River Watershed',
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
            yAxis: [{
                    title: {
                        text: watershed[fraction1].name + '<br>(' + watershed[fraction1].unit + ')',
                        style: {
                            color: ColorPicker.body
                        }
                    },
                    // ceiling: 2000,
                    max: max1,
                    // tickAmount: 4,
                },
                {
                    title: {
                        text: watershed[fraction2].name + '<br>(' + watershed[fraction2].unit + ')',
                        style: {
                            color: ColorPicker.body
                        },

                    },
                    max: max2,
                    // tickAmount: 4,
                    opposite: true
                }
            ],
            series: [{
                    name: watershed[fraction1].name,
                    type: series1type,
                    // data: [1414, 1370, 1307, 2318, 393, 1249, 1155, 1863, 755.3],
                    data: watershed[fraction1].series,
                    color: ColorPicker.blue1
                },
                {
                    type: 'line',
                    data: createTargetSeries(target),
                    name: watershed[fraction1].name + ' Target',
                    color: ColorPicker.target_red,
                    lineWidth: 1,
                    marker: {
                        radius: 0
                    },
                },
                {
                    name: watershed[fraction2].name,
                    type: series2type,
                    yAxis: 1,
                    // data: [3756, 3335, 3613, 5097, 1039, 3342, 3475, 4099, 2490],
                    data: watershed[fraction2].series,
                    color: ColorPicker.blue3
                }

            ]

        });
    })
}


function createLineChartOption(data, dataName, eleId, title, yAxisText, color) {
    var options = {
        chart: {
            renderTo: eleId,
            type: 'line'
        },
        credits: {
            enabled: false
        },
        title: {
            text: title
        },
        xAxis: {
            categories: xAxis
        },
        yAxis: {
            title: {
                text: yAxisText
            }
        },
        series: {
            data: data,
            name: dataName,
            color: color
        }
    };
    return options;
};

function options_general(w_name, data, color, withBgimage) {
    Highcharts.setOptions({
        lang: {
            numericSymbols: null,
            thousandsSep: ','
        }

    });
    return {
        chart: {
            width: undefined, //chart_width,
            height: undefined, //chart_height,
            style: {
                fontFamily: 'Montserrat, sans-serif',
                color: ColorPicker.body
            },
            // backgroundColor: '#00ff00'
            /**
             * The following events is for watermark
             */
            events: {
                load: function () {
                    // this.renderer.image("https://c1.staticflickr.com/5/4382/36578347693_3c6032000b_o.png", 0, 0, chart_width, chart_height).add();   //red watermark
                    if (this.withBgimage) {
                        this.renderer.image("https://c1.staticflickr.com/5/4514/23628988768_984b3f3343_o.png", this.plotLeft, this.plotTop, this.plotWidth, this.plotHeight).add(); //grey watermark
                    }
                }
            }
        },
        title: {
            text: w_name + " River " + data.name,
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
                text: data.name + '<br/> (' + data.unit + ')',
                style: {
                    color: ColorPicker.body
                }
            },
            // lineColor: '#ff0000',
            // lineWidth: 2
        },
        series: [{
            name: data.name,
            unit: data.unit,
            data: data.series,
            color: color
        }],

    };
}

function createLineChart(eleId, w_name, data, color, bg) {
    var o = options_general(w_name, data, color, bg);
    o.chart.type = 'line';
    o.yAxis.min = 0;
    return Highcharts.chart(eleId, o);
    // return Highcharts.chart(eleId, {
    //     chart: {
    //         type: 'line',
    //         width: chart_width,
    //         height: chart_height,
    //         // backgroundColor: '#00ff00'
    //     },
    //     title: {
    //         text: w_name + " River " + data.name
    //     },
    //     credits: {
    //         enabled: false
    //     },
    //     xAxis: {
    //         categories: xAxis,
    //         title: {
    //             text: 'Year'
    //         },
    //         // lineColor: '#ff0000'
    //     },
    //     yAxis: {
    //         title: {
    //             text: data.name + '<br/> (' + data.unit + ')'
    //         },
    //         lineColor: '#ff0000',
    //         lineWidth: 2
    //     },
    //     series: [{
    //         name: data.name,
    //         unit: data.unit,
    //         data: data.series,
    //         color: color
    //     }]
    // });
};

function createLineChart_start(eleId, w_name, data, color, start, bg) {
    var o = options_general(w_name, data, color, bg);
    o.chart.type = 'line';
    o.yAxis.min = start;
    return Highcharts.chart(eleId, o);
    // return Highcharts.chart(eleId, {
    //     chart: {
    //         type: 'line',
    //         width: chart_width,
    //         height: chart_height
    //     },
    //     title: {
    //         text: w_name + " River " + data.name
    //     },
    //     credits: {
    //         enabled: false
    //     },
    //     xAxis: {
    //         categories: xAxis,
    //         title: {
    //             text: 'Year'
    //         }
    //     },
    //     yAxis: {
    //         min: start,
    //         title: {
    //             text: data.name + ' <br/>(' + data.unit + ')'
    //         }
    //     },
    //     series: [{
    //         name: data.name,
    //         unit: data.unit,
    //         data: data.series,
    //         color: color
    //     }]
    // });
};

function createColumnChart(eleId, data, dataName, unit, title, yAxisText, color) {
    return Highcharts.chart(eleId, {
        chart: {
            type: 'column',
        },
        title: {
            text: title
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: xAxis
        },
        yAxis: {
            title: {
                text: yAxisText
            }
        },
        series: [{
            name: dataName,
            unit: unit,
            data: data,
            color: color
        }]
    });
};

function createColumnChart2(eleId, w_name, data, color, bg) {
    var o = options_general(w_name, data, color, bg);
    o.chart.type = 'column';
    // chart.options.chart.type = 'column';
    // chart.options({
    //     type: 'column'
    // }) ;
    return Highcharts.chart(eleId, o);;
    // return Highcharts.chart(eleId, {
    //     chart: {
    //         type: 'column',
    //         width: chart_width,
    //         height: chart_height
    //     },
    //     title: {
    //         text: w_name + " River " + data.name
    //     },
    //     credits: {
    //         enabled: false
    //     },
    //     xAxis: {
    //         categories: xAxis,
    //         title: {
    //             text: 'Year'
    //         }
    //     },
    //     yAxis: {
    //         title: {
    //             text: data.name + ' <br/>(' + data.unit + ')'
    //         }
    //     },
    //     plotOptions: {
    //         series: {
    //             allowPointSelect: true
    //         }
    //     },
    //     series: [{
    //         name: data.name,
    //         unit: data.unit,
    //         data: data.series,
    //         color: color
    //     }]
    // });
};

function createTargetSeries(val) {
    var s = [];
    xAxis.map(function () {
        s.push(val)
    });
    return s;
};

function addTargetLine(chart, target) {
    chart.addSeries({
        type: 'line',
        data: createTargetSeries(target),
        name: 'Target',
        color: ColorPicker.target_red,
        lineWidth: 2,
        marker: {
            radius: 0
        },
    })
};

function createCompositeChart() {

};

function setChartTheme() {
    // Highcharts.theme = {
    //     chart:{
    //         xAxis: {
    //             categories: xAxis,
    //             // title: {
    //             //     text: 'Year'
    //             // },
    //             lineColor: '#ff0000'
    //         },
    //
    //     },
    //     // colors: ['#1c2d5a', '#afdfe4', '#7eb4d2', '#7ed3f7', '#188ccc', '#00b0e6', '#1b75ba'],
    //     // chart: {
    //     //     backgroundColor: {
    //     //         linearGradient: [0, 0, 500, 500],
    //     //         stops: [
    //     //             [0, 'rgb(255, 255, 255)'],
    //     //             [1, 'rgb(240, 240, 255)']
    //     //         ]
    //     //     },
    //     // },
    //     // title: {
    //     //     style: {
    //     //         fontFamily: 'Lato, sans-serif'
    //     //     }
    //     // },
    //     // subtitle: {
    //     //     style: {
    //     //         fontFamily: 'Lato, sans-serif'
    //     //     }
    //     // },
    //     //
    //     // legend: {
    //     //     itemStyle: {
    //     //         font: 'Lato, sans-serif',
    //     //         color: 'black'
    //     //     },
    //     //     itemHoverStyle:{
    //     //         color: 'gray'
    //     //     }
    //     // },
    //     lang: {
    //         numericSymbols: null, //otherwise by default ['k', 'M', 'G', 'T', 'P', 'E']
    //         thousandsSep: ','
    //     }
    // };
    // Apply the theme
    // Highcharts.setOptions(Highcharts.theme);
    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Montserrat, sans-serif'
            },
            xAxis: {
                categories: xAxis,
                // title: {
                //     text: 'Year'
                // },
                lineColor: '#ff0000'
            },
        },
        lang: {
            numericSymbols: null,
            thousandsSep: ','
        }
    })
};
