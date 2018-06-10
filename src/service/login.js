import req from '@/utils/axios.js'
// export 的另一种写法
// export const getToken=(username,password)=>{    
// }
const getToken=(username,password)=>{
      return req.post('/login/login',{username,password})    
    //
}
const getUserInfo=(token)=>{
    return req.get('/user/info',{token})
}
const Logout=()=>{
    // console.log(req.post('/login/logout'))
    return req.post('/login/logout')
}
//但是如果export default出去的，是一个对象所以要
//import fn from 'xxxx'  
//fn.getToKen
export {
    getToken,getUserInfo,Logout
}

