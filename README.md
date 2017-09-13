# charts
JS library using Highcharts and customized for BA projects

# To use the library
1. Create a HTML tag on the page, e.g., chart-1
2. In <Script>, call `createWatershedChart` function, and pass in the following parameters as `createWatershedChart('chart-1', 'Maumee', 'data/Maumee.csv', 'TPloading', 'column', 0)`:
    + HTML tag name as string,
    + watershed name as string,
    + csv data file path as string,
    + fraction name as string,
    + chart type as string,
    + target value as float (0 if there is no target value)
    

# Additional JS libraries
jQuery: `https://code.jquery.com/jquery-3.1.1.js`

d3: `https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js`

Highcharts: `http://code.highcharts.com/highcharts.js`

Highcharts export module: `https://code.highcharts.com/modules/exporting.js`

Highcharts csv exporting module customized by GLC: `js/export-csv_glc.js`


