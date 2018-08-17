function SWI(){
    this.swi_data;

    this.showcaseWatershed = ["04040003", "04050006", "04110002", "04100009", "04080206", "04030204", "04090004"];
    this.tertiary = [1384500050];

    this.stateLookup = {
        17: "Illinois",
        18: "Indiana",
        26: "Michigan",
        27: "Minnesota",
        36: "New York",
        39: "Ohio",
        42: "Pennsylvania",
        55: "Wisconsin"
    };

    this.init = function(data){
        this.swi_data = data.map(function (d){
            d.timestamp = Date.parse(d.ActivityStartDate + " " + d["ActivityStartTime.Time"]);
            return d;
        });
        Highcharts.setOptions({
            lang: {
                numericSymbols: null,
                thousandsSep: ",",
                // viewData: null
            }
        });
        Highcharts.Chart.prototype.viewData = function () {
            if (!this.insertedTable) {
                var div = document.createElement("div");
                div.className = "highcharts-data-table";
                // Insert after the chart container
                this.renderTo.parentNode.insertBefore(div, this.renderTo.nextSibling);
                div.innerHTML = this.getTable();
                this.insertedTable = true;
                var date_str = new Date().getTime().toString();
                var rand_str = Math.floor(Math.random() * (1000000)).toString();
                this.insertedTableID = "div_" + date_str + rand_str
                div.id = this.insertedTableID;
            }
            else {
                $("#" + this.insertedTableID).toggle();
            }
        };
    };

    this.getMonitoringNitrateData = function(locationID){
        var result = {
            values: [],
            dates: [],
            set: []
        };
        var vals = $(this.swi_data).filter(function(i, n) {
            return n.LocID == locationID;
            // n.River===(watershedName)&& n.Fraction===metricName /*&& n.Value !== ""*/ // n.River===w_name
        });
        vals.sort(function(a, b){
            return (a.timestamp > b.timestamp) ? 1 : ((a.timestamp < b.timestamp) ? -1 : 0);
        });

        vals.map(function (v){
            // result.values.push(vals[v].ResultMeasureValue);

            // result.dates.push(Date.parse(vals[v].ActivityStartDate));
            result.set.push([vals[v].timestamp, vals[v].ResultMeasureValue])
        } );

        return result;
    };

    this.buildPopupContent = function (location){
        if (location == ""){
            return '<p><i><b>HUC 8 Code</b></i>: {HUC8}</p><br>' +
                '<p><i><b>Monitoring Location ID</b></i>: {LocID}</p><br>' +
                '<p><i><b>Monitoring Location Name</b></i>: {LocName}</p>' +
                '<p><i><b>Organization</b></i>: {Org}</p><br>';
            // '<p><i><b>Watershed Name</b></i>: {HUC8}</p><br>' +
        }
        else {
            return '<p><i><b>Monitoring Location ID</b></i>: {LocID}</p><br>' +
                '<p><i><b>Monitoring Location Name</b></i>: {LocName}</p>' +
                '<p><i><b>Organization</b></i>: {Org}</p><br>';
        }

    };




    /**********************************************************************************************/
    // Section for UCMR functions
    /**********************************************************************************************/
    // this.createCounty = function(geoid, name, state){
    //     return {
    //         geoid: geoid,
    //         name: name,
    //         state: state,
    //         waterSystems: [],
    //
    //         addContaminantToWaterSys: function (cont) {
    //             // get watersys
    //             waterSys.addContaminant(cont);
    //         }
    //
    //
    //     };
    // };

    // var WaterSystem = {
    //
    // }
    //PWSID	Contaminant	max	count	mean	PWS_NAME	PWS_TYPE_CODE	POPULATION_SERVED_COUNT	PRIMARY_SOURCE_CODE	CITY_NAME	ZIP_CODE	COUNTRY_CODE	SOURCE_WATER_PROTECTION_CODE	costate	state	county	fips


    this.contaminantNames = {
        "chromium": "chromium"
    };

    this.UCMR_data;
    // = function(){
    //     return {
    //         counties: [],
    //             hasCounty: function (c) {
    //         for(var i in this.counties){
    //             if (this.counties[i].fips == c.fips){
    //                 return this.counties[i];
    //             }
    //         }
    //         return false;
    //     },
    //         addCounty: function (c) {
    //             this.counties.push(c)
    //         },
    //         // addContaminant: function (ctmt) {
    //         //
    //         //
    //         // }
    //     }
    // };

    this.UCMR_init = function (data) {
        SWI.UCMR_data = {
            counties: [],
            hasCounty: function (c_fips) {
                for(var i in this.counties){
                    if (this.counties[i].fips == c_fips){
                        return this.counties[i];
                    }
                }
                return false;
            },
            addCounty: function (c) {
                this.counties.push(c)
            },
            // addContaminant: function (ctmt) {
            //
            //
            // }
        };
        data.map(function (d){
            var county_fips = d.fips;
            var county = SWI.UCMR_data.hasCounty(d.fips);

            if (!county){
                // create a county and add to this.UCMR_data
                county = new SWI.county(d.fips, d.county, d.state);
                SWI.UCMR_data.counties.push(county);
            }
            var waterSys = county.hasWaterSys(d.PWSID);
            if(!waterSys){
                // create a watersys and add to county
                waterSys = new SWI.waterSystem(d.PWSID, d.PWS_NAME);
                county.waterSystems.push(waterSys);
            }
            waterSys.addContaminant(new SWI.contaminant(d));
        });
    };




    this.county = function (fips, name, state) {
        return {
            fips: fips,
            name: name,
            state: state,
            waterSystems: [],
            hasWaterSys: function (w_PWSID){
                for(var i in this.waterSystems){
                    if (this.waterSystems[i].PWSID == w_PWSID){
                        return this.waterSystems[i];
                    }
                }
                return false;
            },
            addWaterSys: function (w) {
                this.waterSystems.push(w);
            }
            // addContaminant: function (cont) {
            //     for (var w in this.waterSystems){
            //         if (this.waterSystems[w].pwsid == count.pwsid){
            //             addContaminentToWaterSys()
            //         }
            //     }
            // }

        }
    };

    this.waterSystem = function (pwsid, name) {
        return {
            PWSID: pwsid,
            PWS_NAME: name,
            contaminants: [],
            addContaminant: function (c) {
                this.contaminants.push(c);

            }
        }
    };

    this.contaminant = function (d) {
        return {
            PWSID: d.PWSID,
            name: d.Contaminant,
            value_max: d.max,
            value_count: d.count,
            value_mean: d.mean,
            PWS_NAME: d.PWS_NAME,
            PWS_TYPE: d.PWS_TYPE_CODE,
            pop: d.POPULATION_SERVED_COUNT,
            pri_source: d.PRIMARY_SOURCE_CODE,
            city: d.CITY_NAME,
            zip: d.ZIP_CODE,
            protect_code: d.SOURCE_WATER_PROTECTION_CODE,
            costate: d.costate,
            state: d.state,
            county: d.county,
            fips: d.fips
        }
    };

    // this.hasCounty = function (c_id){
    //     for (c in this.UCMR_data){
    //         if (this.UCMR_data[c].geoid == c_id){
    //             return true;
    //         }
    //     }
    //     return false;
    // };
    //
    // this.addToCounty = function (c_id, contaminant){
    //     var county = this.getCountyData(c_id);
    //     county
    // }


    /**
     *
     * @param cnty_id
     */

    this.buildUCMRTable = function (c_fips) {
        // build the HTML content using data from getWaterSysAndContaminant
        var county = SWI.UCMR_data.hasCounty(c_fips);
        var parentNode = document.createElement("div");
        parentNode.innerHTML += "<h4>" + county.name + " County, " + county.state + "</h4>";
        if (county){
            var ws_list = county.waterSystems;
            for (var i in ws_list){
                var content = "<h6>Water System: " + ws_list[i].PWS_NAME + " (" + ws_list[i].PWSID+ ")</h6>" +
                    "<table class='table table-striped table-hover'>" +
                    "<thead class='SWI-table-header'><tr><th>Contaminant</th><th>Maximum</th></tr></thead>";

                for (var c in ws_list[i].contaminants){
                    content += "<tr><td>" + ws_list[i].contaminants[c].name + "</td>" +
                        "<td>" + ws_list[i].contaminants[c].value_max + "</td></tr>";
                }
                content += "</table>";
                parentNode.innerHTML += content;
            }
        }
        return parentNode;
    };

    // this.getWaterSysByCounty = function (cnty_id) {
    //     /* return a object like:
    //     [
    //         watersys1: {
    //             id:
    //             name:
    //             contaminents: [
    //                 {
    //                     name:
    //                     type:
    //                     value:
    //                 },
    //                 {
    //                     name:
    //                     type:
    //                     value:
    //                 },
    //                 {
    //                     name:
    //                     type:
    //                     value:
    //                 }
    //             ]
    //         },
    //         watersys2: {
    //             id:
    //             name:
    //             contaminents: [
    //                 {
    //                     name:
    //                     type:
    //                     value:
    //                 },
    //                 {
    //                     name:
    //                     type:
    //                     value:
    //                 },
    //                 {
    //                     name:
    //                     type:
    //                     value:
    //                 }
    //             ]
    //         }
    //     ]
    //
    //      */
    //
    //
    //
    //
    //
    //
    //     var watersys = [];
    //     // find the watersys by county id
    //     var w = this.waterSys()
    //     // for each watersys, get its contaminent and value, add this contanement obj to watersys
    // };

    // this.addContaminentToWaterSys = function (w, c){
    //     w.contaminents.push({
    //         name: c.name,
    //         value: c.value
    //     })
    // }
}