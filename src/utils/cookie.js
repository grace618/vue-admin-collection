import cookie from 'js-cookie'
// function setCookie(name,role){
//     cookie.set(name,role)
// }
// function getCookie(name){
//     cookie.get(name)
// }
// function removeCookie(name){
//     cookie.remove(name)
// }
   const setCookie=(name,role)=>{
       return cookie.set(name,role)  //哇，要有返回值
    }
    const getCookie=(name)=>{
      return  cookie.get(name)
    }
    const removeCookie=(name)=>{
      return  cookie.remove(name)
    }
export{
    setCookie,getCookie,removeCookie
}
