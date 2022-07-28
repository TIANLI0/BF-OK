var start_date = '20210101' // 开始日期
var date = new Date();
var end_date = date.getFullYear() + (date.getMonth() > 8 ? (date.getMonth() + 1) : ("0" + (date.getMonth() + 1))) + (date.getDate() > 9 ? date.getDate() : ("0" + date.getDate())); // 结束日期
var access_token = '121.d2fc5ecd27ef5e8e99d9344f85fedaab.YalEbl05Rhq5xJraMVrbTU2kIoDjS82rWAb48RQ.5ZpTug' // accessToken
var site_id = '16213617' // 网址 id
var dataUrl = 'https://baidu-tongji-api.vercel.app/api?access_token=' + access_token + '&site_id=' + site_id
var metrics = 'pv_count' // 统计访问次数 PV 填写 'pv_count'，统计访客数 UV 填写 'visitor_count'，二选一
var metricsName = (metrics === 'pv_count' ? '访问次数' : (metrics === 'visitor_count' ? '访客数' : ''))
// 这里为了统一颜色选取的是“明暗模式”下的两种字体颜色，也可以自己定义
var color = document.documentElement.getAttribute('data-theme') === 'light' ? '#4c4948' : 'rgba(255,255,255,0.7)'

// 访问地图
function mapChart () {
  let script = document.createElement("script")
  let paramUrl = '&start_date=' + start_date + '&end_date=' + end_date + '&metrics=' + metrics + '&method=visit/district/a';
  fetch(dataUrl + paramUrl).then(data => data.json()).then(data => {
    let mapName = data.result.items[0]
    let mapValue = data.result.items[1]
    let mapArr = []
    let max = mapValue[0][0]
    for (let i = 0; i < mapName.length; i++) {
      mapArr.push({ name: mapName[i][0].name, value: mapValue[i][0] })
    }
    let mapArrJson = JSON.stringify(mapArr)
    script.innerHTML = `
      var mapChart = echarts.init(document.getElementById('map-chart'), 'light');
      var mapOption = {
        title: {
          text: '博客访问来源地图',
          x: 'center',
          textStyle: {
            color: '${color}'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          min: 0,
          max: ${max},
          left: 'left',
          top: 'bottom',
          text: ['高','低'],
          color: ['#1E90FF', '#AAFAFA'],
          textStyle: {
            color: '${color}'
          },
          calculable: true
        },
        series: [{
          name: '${metricsName}',
          type: 'map',
          mapType: 'china',
          showLegendSymbol: false,
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: '#121212'
            },
            emphasis: {
              areaColor: 'gold'
            }
          },
          data: ${mapArrJson}
          }]
        };
      mapChart.setOption(mapOption);
      window.addEventListener("resize", () => { 
        mapChart.resize();
      });`
    document.getElementById('map-chart').after(script);
  }).catch(function (error) {
    console.log(error);
  });
}

// 访问趋势
function trendsChart () {
  let script = document.createElement("script")
  let paramUrl = '&start_date=' + start_date + '&end_date=' + end_date + '&metrics=' + metrics + '&method=trend/time/a&gran=month'
  fetch(dataUrl + paramUrl)
    .then(data => data.json())
    .then(data => {
      let monthArr = []
      let monthValueArr = []
      let monthName = data.result.items[0]
      let monthValue = data.result.items[1]
      for (let i = Math.min(monthName.length, 12) - 1; i >= 0; i--) {
        monthArr.push(monthName[i][0].substring(0, 7).replace('/', '-'))
        if (monthValue[i][0] !== '--') {
          monthValueArr.push(monthValue[i][0])
        } else {
          monthValueArr.push(null)
        }
      }
      let monthArrJson = JSON.stringify(monthArr)
      let monthValueArrJson = JSON.stringify(monthValueArr)
      script.innerHTML = `
        var trendsChart = echarts.init(document.getElementById('trends-chart'), 'light');
        var trendsOption = {
          textStyle: {
            color: '${color}'
          },
          title: {
            text: '博客访问统计图',
            x: 'center',
            textStyle: {
              color: '${color}'
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            name: '日期',
            type: 'category',
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '${color}'
              }
            },
            data: ${monthArrJson}
          },
          yAxis: {
            name: '${metricsName}',
            type: 'value',
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '${color}'
              }
            }
          },
          series: [{
            name: '${metricsName}',
            type: 'line',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            itemStyle: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(128, 255, 165)'
              },
              {
                offset: 1,
                color: 'rgba(1, 191, 236)'
              }])
            },
            areaStyle: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(128, 255, 165)'
              }, {
                offset: 1,
                color: 'rgba(1, 191, 236)'
              }])
            },
            data: ${monthValueArrJson},
            markLine: {
              data: [{
                name: '平均值',
                type: 'average'
              }]
            }
          }]
        };
        trendsChart.setOption(trendsOption);
        window.addEventListener("resize", () => { 
          trendsChart.resize();
        });`
      document.getElementById('trends-chart').after(script);
    }).catch(function (error) {
      console.log(error);
    });
}

// 访问来源
function sourcesChart () {
  let script = document.createElement("script")
  let paramUrl = '&start_date=' + start_date + '&end_date=' + end_date + '&metrics=' + metrics + '&method=source/all/a';
  fetch(dataUrl + paramUrl)
    .then(data => data.json())
    .then(data => {
      monthArr = [];
      let sourcesName = data.result.items[0]
      let sourcesValue = data.result.items[1]
      let sourcesArr = []
      for (let i = 0; i < sourcesName.length; i++) {
        sourcesArr.push({ name: sourcesName[i][0].name, value: sourcesValue[i][0] })
      }
      let sourcesArrJson = JSON.stringify(sourcesArr)
      script.innerHTML = `
        var sourcesChart = echarts.init(document.getElementById('sources-chart'), 'light');
        var sourcesOption = {
          textStyle: {
            color: '${color}'
          },
          title: {
            text: '博客访问来源统计图',
            x: 'center',
            textStyle: {
              color: '${color}'
            }
          },
          legend: {
            top: 'bottom',
            textStyle: {
              color: '${color}'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          series: [{
            name: '${metricsName}',
            type: 'pie',
            radius: [30, 80],
            center: ['50%', '50%'],
            roseType: 'area',
            label: {
              formatter: "{b} : {c} ({d}%)"
            },
            data: ${sourcesArrJson},
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(255, 255, 255, 0.5)'
              }
            }
          }]
        };
        sourcesChart.setOption(sourcesOption);
        window.addEventListener("resize", () => { 
          sourcesChart.resize();
        });`
      document.getElementById('sources-chart').after(script);
    }).catch(function (error) {
      console.log(error);
    });
}

function switchVisitChart () {
  // 这里为了统一颜色选取的是“明暗模式”下的两种字体颜色，也可以自己定义
  let color = document.documentElement.getAttribute('data-theme') === 'light' ? '#4c4948' : 'rgba(255,255,255,0.7)'
  try {
    let mapOptionNew = mapOption
    mapOptionNew.title.textStyle.color = color
    mapOptionNew.visualMap.textStyle.color = color
    mapChart.setOption(mapOptionNew)
  } catch (error) {
    console.log(error)
  }
  try {
    let trendsOptionNew = trendsOption
    trendsOptionNew.title.textStyle.color = color
    trendsOptionNew.xAxis.axisLine.lineStyle.color = color
    trendsOptionNew.yAxis.axisLine.lineStyle.color = color
    trendsOptionNew.textStyle.color = color
    trendsChart.setOption(trendsOptionNew)
  } catch (error) {
    console.log(error)
  }
  try {
    let sourcesOptionNew = sourcesOption
    sourcesOptionNew.title.textStyle.color = color
    sourcesOptionNew.legend.textStyle.color = color
    sourcesOptionNew.textStyle.color = color
    sourcesChart.setOption(sourcesOptionNew)
  } catch (error) {
    console.log(error)
  }
}

if (document.getElementById('map-chart')) mapChart()
if (document.getElementById('trends-chart')) trendsChart()
if (document.getElementById('sources-chart')) sourcesChart()

document.getElementById("darkmode").addEventListener("click", function () { setTimeout(switchVisitChart, 100) })


