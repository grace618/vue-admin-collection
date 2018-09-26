import req from '@/utils/axios.js'

const fetchList=(query)=>{
    return req.get('/transaction/list',{query})
}
export{ fetchList}