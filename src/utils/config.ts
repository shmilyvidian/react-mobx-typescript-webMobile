
// 配置不同环境请求接口

import docCookies from './docCookies'
const API_ENV:string = 'test'
const apiConfig = {
    com: 'http://api.app.aixiangdao.tech/develop',
    test: 'http://api.app.aixiangdao.tech/develop',
    requestPath(env:string) {
        return this[env];
    },
    redirectToLogin (env:string) {
        let url
        const envConfig = {
            com: 'com',
            test: 'net'
        }
        docCookies.removeItem('token','/',`.dotransit.${envConfig[env] || env}`)
        if (API_ENV === 'test') {
            url = 'http://api.app.aixiangdao.tech'
        } else {
            url = `http://api.app.aixiangdao.tech`
        }
        window.location.href = url
    }
}

export default apiConfig