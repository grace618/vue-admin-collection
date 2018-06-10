import axios from 'axios'
const CancelToken = axios.CancelToken
var cancel;
var service=axios.create({
    baseURL:process.env.BASE_API,
    timeout:5000
})
 //添加请求拦截器
 service.interceptors.request.use(function(config){
    return config
},function(error){
    return Promise.reject(error)
})
//添加响应拦截器
axios.interceptors.response.use(function(response){
    return response
},function(error){
    return Promise.reject(error)
}
)
export default{
    //get请求
    get(url,param){
        //promise示例
        //   axios.post('/user', {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   }); 
        return new Promise((resolve,reject)=>{
            service({
                method:'get',
                url,
                params:param,
                cancelToken:new CancelToken(c=>{
                    cancel=c
                })
            }).then(res=>{  //axios返回的是一个promise对象
                resolve(res)  //resolve在promise执行器内部 
            }).catch(err=>{
                console.log(err,'异常')
            })

        })
    },
    //post请求
    post(url,param){
        return new Promise((resolve,reject)=>{
            service({
                method:'post',
                url,
                data:param,
                cancelToken:new CancelToken(c=>{
                    cancel=c
                })
            }).then(res=>{
                resolve(res)
            }).catch(err=>{
                console.log(err,'异常')
            })
        })
    }
}


// export default service