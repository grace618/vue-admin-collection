<template>
    <div id="rosediagram" style="width:100%;height:400px">
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
          this.myecharts= echarts.init(document.getElementById('rosediagram'))
           this.myecharts.setOption({
                title : {
                text: '南丁格尔玫瑰图',
                subtext: '纯属虚构',
                x:'center'
              },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x : 'center',
                y : 'bottom',
                data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            series : [
                {
                    name:'面积模式',
                    type:'pie',
                    radius : [30, 110],
                    // center : ['75%', '50%'],
                    roseType : 'area',
                    data:[
                        {value:10, name:'rose1'},
                        {value:5, name:'rose2'},
                        {value:15, name:'rose3'},
                        {value:25, name:'rose4'},
                        {value:20, name:'rose5'},
                        {value:35, name:'rose6'},
                        {value:30, name:'rose7'},
                        {value:40, name:'rose8'}
                    ]
                }
            ]
                
          })
        }
    }
}
</script>