// 初始状态
import auth from '@/views/utils/auth'
const state = {
    token: auth.getToken(),
    imgUrl: ''
}
export default state;