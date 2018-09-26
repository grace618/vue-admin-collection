import req from '@/utils/axios.js'

const fetChList=(query)=>{
    return req.get('/article/list',{query})
}
export {fetChList}