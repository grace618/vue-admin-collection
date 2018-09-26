
import {getToken,getUserInfo,Logout} from '@/service/login.js'
import {setCookie,getCookie,removeCookie} from '@/utils/cookie.js'
const user={
    state:{
          token:getCookie('TOKEN'),  //初始化就从cookie里面获取
          userinfo:{
              username:'',
              password:''
          },
          avatar:'',
          roles:[]
    },
    getters: {
        setavatar:state=>state.avatar,
        roles: state => state.roles,
        token:state=>state.token
    },
    mutations: {  //mutations 处理数据
        //存储token
        GETUSERINFO(state,token){
            state.token=token
        },
        SETAVATAR(state,avatar){
            state.avatar=avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        }
    },
    actions: {
       async gettoken({commit,state},userinfo){
            try{
              var token=await getToken(userinfo.name,userinfo.password)
                  commit('GETUSERINFO',token.data.token) 
                  setCookie('TOKEN',token.data.token)
            }catch(err){
                console.log(err)
            }
        },
         async getinfo({commit,state}){
             try{
                var userinfo=await getUserInfo(state.token)
                commit('SET_ROLES', userinfo.data.roles)
                commit('SETAVATAR',userinfo.data.avatar)
                return userinfo;
             }catch(err){
                console.log(err)
             }
         },
         async logout({commit,state}){
             try{
               var logout=await Logout()
                   removeCookie('TOKEN')  //清空浏览器存储
                   commit('SET_ROLES', [])
                   commit('GETUSERINFO','')//重置state里的token

             }catch(err){
                 console.log(err)
             }
         }
    }
}
export default user