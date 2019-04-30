# JS Inventory

## BlueAccounting.js 
The base library for all BlueAccounting visualizations. It provides the ColorPicker and serveral functions to create uniformed charts. Possible refactor coming soon.

## BlueAccounting_module.js
This is the same library but built for Dojo as a module.

## ErieStat.js
Library for ErieStat specific functions (ESRI Leaflet). Possible refactor with `BlueAccounting.js`. 

This library translates the shortened watershed names into full names, and matches the watershed loading data, then uses the `BlueAccounting.js` library to render page content (map, text, and chart). 

Key Content:

    Observation years
    Metric translation and unit
    Watershed name translation
        This translation links the shortened watershed names from the feature service to the JSON data file.
    Watershed targets
    Watershed introduction
    Loading page introduction
    

## ErieStat_ArcGIS.js
Library for ErieStat (ArcGIS JS API)

## ErieStat_module.js
The same library built for Dojo as a module.

## export-csv_glc.js
Customized library based on Highcharts' export-csv, for less download options.  

## SWI.js
Library for Source Water Initiative specific functions