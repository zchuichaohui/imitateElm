import apiUrl from './apiUri'
import apiUtil from './apiUtil'

const generateApiMap = apiUtil.generateApiMap({...apiUrl})
export default {
    ...generateApiMap // 取出所有可遍历属性赋值在新的对象上
}