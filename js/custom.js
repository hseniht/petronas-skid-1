console.log("custom.js loaded");

//to show sample-record-table
$("#sample-report-table-1").hide();

$("#getRecord").click(function(){
    $("#sample-report-table-1").fadeIn(500);
});



$("#getChartLogs").click(function(){
    $("#sample-chartlogs-1").load();
});


//live-chart-2

// START OF ECHART

//start of e-chart- 1
$(document).ready(function() {

    <!--basic line echarts init-->

    var chartOneDom = document.getElementById("echart2-line");
    var chartOne = echarts.init(chartOneDom);

    var chartOneOption = {
        color: ['#4aa9e9','#eac459'],

        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['Max','Min']
        },

        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data: ['17/7/2018','18/7/2018','19/7/2018','20/7/2018','21/7/2018','22/7/2018','23/7/2018']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} °C'
                }
            }
        ],
        series : [
            {
                name:'Max',
                type:'line',
                data:[11, 11, 15, 13, 12, 13, 10],
                markPoint : {
                    data : [
                        {type : 'max', name: 'Max'},
                        {type : 'min', name: 'Min'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: 'Average'}
                    ]
                }
            },
            {
                name:'Min',
                type:'line',
                data:[5, 3, 5, 8, 6, 5, 3],
                markPoint : {
                    data : [
                        {name : 'Min of Week', value : -2, xAxis: 1, yAxis: -1.5}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : 'Average'}
                    ]
                }
            }
        ]
    };

    if (chartOneOption && typeof chartOneOption === "object") {
        chartOne.setOption(chartOneOption, true);
    }

//end of echart-1


//start of echart-1

<!--basic area echarts init-->

var dom = document.getElementById("echart3-area");
var myChart = echarts.init(dom);

var app = {};
option = null;
option = {
    color: ['#8dcaf3','#4aa9e9', '#67f3e4' ],

    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['Flow','Sale','Deal']
    },

    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            // data : ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
            data: ['17/7/2018','18/7/2018','19/7/2018','20/7/2018','21/7/2018','22/7/2018','23/7/2018']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        // {
        //     name:'Deal',
        //     type:'line',
        //     smooth:true,
        //     itemStyle: {normal: {areaStyle: {type: 'default'}}},
        //     data:[10, 12, 21, 54, 260, 830, 710]
        // },
        // {
        //     name:'Sale',
        //     type:'line',
        //     smooth:true,
        //     itemStyle: {normal: {areaStyle: {type: 'default'}}},
        //     data:[30, 182, 434, 791, 390, 30, 10]
        // },
        {
            name:'floww',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[1320, 1132, 601, 234, 120, 90, 20]
        }
    ]
};


if (option && typeof option === "object") {
    myChart.setOption(option, false);
}

//end of echart-2

//start of echart-1
<!--Rainfall and Evaporation echarts init-->

var dom = document.getElementById("echart1-rainfall");
var rainChart = echarts.init(dom);

var app = {};
option = null;
option = {
    color: ['#4aa9e9','#67f3e4'],
    tooltip : {
        trigger: 'axis'
    },
    // legend: {
    //     data:['Sale','Market']
    // },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            // data : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            data: ['17/7/2018','18/7/2018','19/7/2018','20/7/2018','21/7/2018','22/7/2018','23/7/2018']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        // {
        //     name:'Sale',
        //     type:'bar',
        //     data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        //     markPoint : {
        //         data : [
        //             {type : 'max', name: 'Max'},
        //             {type : 'min', name: 'Min'}
        //         ]
        //     },
        //     markLine : {
        //         data : [
        //             {type : 'average', name: 'Average'}
        //         ]
        //     }
        // },
        {
            name:'Market',
            type:'bar',
            // data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            data:[36.4, 58.7, 70.7, 175.6, 152.2, 48.7, 18.8],
            markPoint : {
                data : [
                    {name : 'Max', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                    {name : 'Min', value : 2.3, xAxis: 11, yAxis: 3}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : 'Average'}
                ]
            }
        }
    ]
};

if (option && typeof option === "object") {
    rainChart.setOption(option, false);
}

//end of echart-1



  });

  //end of ehcart
