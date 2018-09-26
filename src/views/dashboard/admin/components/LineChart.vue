<template>
    <el-row>
        <div id="echart" style="width:100%;height:350px"></div>
    </el-row>   
</template>
<script>
 var echarts=require('echarts')
 
export default {
    data(){
        return {
              lineChartData:{
                newVisitis: {
                    adv: [100, 120, 161, 134, 105, 160, 165],
                    video: [120, 82, 91, 154, 162, 140, 145],
                    seo:[120, 182, 291, 154, 162, 140, 145]
                },
                messages: {
                    adv: [200, 192, 120, 144, 160, 130, 140],
                    video: [180, 160, 151, 106, 145, 150, 130],
                    seo:[120, 182, 291, 154, 162, 140, 145]
                },
                purchases: {
                    adv: [80, 100, 121, 104, 105, 90, 100],
                    video: [120, 90, 100, 138, 142, 130, 130],
                    seo:[120, 182, 291, 154, 162, 140, 145]
                },
                shoppings: {
                    adv: [130, 140, 141, 142, 145, 150, 160],
                    video: [120, 82, 91, 154, 162, 140, 130],
                    seo:[120, 182, 21, 154, 162, 140, 145]
                }
             }
        }
    },
    mounted(){
        this.initCharts()
    },
    props:{
        message:{
            type:String,
            required:true
        }
    },
    watch:{
        message:{
            handler: function (val, oldVal) {  
                 this.setOptions(this.lineChartData[val]);
             },
            deep: true
        }
    },
    methods:{
        initCharts(){ 
             this.myChart=echarts.init(document.getElementById('echart'))
            //  console.log(lineChartData[this.message])
             this.setOptions(this.lineChartData[this.message]);
        },
        setOptions({adv,video,seo}={}){  //函数参数的解构赋值,adv ,video,seo的默认值是初始值
            this.myChart.setOption({
                title: {
                    text: '折线图堆叠'
                },
                tooltip: {
                    trigger:'axis'
                },
                legend: {
                      data: [ '联盟广告', '视频广告', '直接访问', '搜索引擎']
                 },
                 grid:{
                    left:'3%',
                    right:'4%',
                    bottom:'3%',
                    containLabel:true
                 },
                 toolbox:{
                    feature:{
                        saveAsImage:{}
                    }
                 },
                xAxis: {
                    type:'category',
                    boundaryGap:false,
                    data: [ '周一','周二','周三','周四','周五','周六','周日']
                },
                yAxis: {
                    type:'value'
                },
                series: [
                   
                    {
                        name:'联盟广告',
                        type:'line',
                        stack: '总量',
                        data:adv
                    },
                    {
                        name:'视频广告',
                        type:'line',
                        stack: '总量',
                        data:video
                    },
                    {
                        name:'直接访问',
                        type:'line',
                        stack: '总量',
                        data:seo
                    }
                   
                ]      
            })   
        }
    }
}   
</script>
<style>

</style>
