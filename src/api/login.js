import axios from './request'
// 登录
const login = {
  login(params) {
    return axios.post('/api/login', params)
  }
}
export default login