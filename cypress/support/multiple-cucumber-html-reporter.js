const report = require('multiple-cucumber-html-reporter');

var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + "h" + today.getMinutes() + "m" + today.getSeconds() + "s";
var dateTime = date+'_'+time;

report.generate({
	jsonDir: 'cypress/cucumber-json/',
	reportPath: "cypress/reports/MultipleReport_"+dateTime+".html",
	metadata:{
        browser: {
            name: 'Chrome',
            version: '86.0.4240.75'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Viavrejo - Restituição Financeira'},
            {label: 'Release', value: '1.0.1'},
            {label: 'Execution Start Time', value: dateTime},
            //{label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
        ]
    }
});