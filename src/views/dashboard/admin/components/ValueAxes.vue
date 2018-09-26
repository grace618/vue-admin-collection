<template>
    <div id="valueaxes" style="width:100%;height:400px">
      </div>
</template>
<script>
 var echarts=require('echarts')
export default {
    mounted(){
        this.initCharts();
    },
    methods:{
        initCharts(){
          this.myecharts= echarts.init(document.getElementById('valueaxes'))
          var data = [];
          for (var i = 0; i <= 100; i++) {
                var theta = i / 100 * 360;
                var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
                data.push([r, theta]);
           }
           this.myecharts.setOption({
               title: {
                    text: ''
                },
                legend: {
                    data: ['line']
                },
                grid:{
                    left:'3%',
                    right:'4%',
                    bottom:'1%',
                    containLabel:true
                 },
                polar: {},
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                angleAxis: {
                    type: 'value',
                    startAngle: 0
                },
                radiusAxis: {
                },
                series: [{
                    coordinateSystem: 'polar',
                    name: 'line',
                    type: 'line',
                    data: data
                }]
          })
        }
    }
}
</script>

