// 配置请求设置
import axios from 'axios'
import apiConfig from './config';
import docCookies from './docCookies';
import { Modal } from 'antd-mobile';
const alert = Modal.alert;

let fetchUrl
const API_ENV:string = 'test'
const setFetch = (isMockCors = false) => {
    let httpService
    fetchUrl = API_ENV === 'test' ? 
                    `http://${apiConfig.requestPath('test')}` :` http://api.${apiConfig.requestPath(API_ENV)}`
    if (isMockCors) {
        httpService = axios
    } else {
        httpService = axios.create ({
            baseURL: fetchUrl + '/sch/',  // 不同环境请求接口地址  //'http://192.168.1.142/basedata/' || 
            headers: {
                access_token: docCookies.getItem('token'),
                tokenId: docCookies.getItem('token')
            },
            method: 'post',
            timeout: 120000, // 超时时间
            
        })
        // 请求拦截器
        httpService.interceptors.request.use((config:object) => {
            return config
        }, (error) => Promise.reject(error))
        // 响应拦截
        httpService.interceptors.response.use((res:any) => {
            if(!docCookies.getItem('token') || res.data.code === '20001') {
                alert('登录过期了！', '当前用户登录已经过期，请前往重新登录', [
                    // tslint:disable-next-line:no-console
                    { text: 'Cancel', onPress: () => console.log('cancel') },
                    { text: 'Ok', onPress: () => apiConfig.redirectToLogin(API_ENV) },
                  ])
                return {data:{data:[]}}
            }
            return res
            }, (error) =>  {
            return  Promise.reject(error)
        })
    }
    return httpService
}

export default setFetch

export {
    fetchUrl
}