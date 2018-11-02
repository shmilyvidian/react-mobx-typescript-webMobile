import setFetch  from './fetch'
import { Toast } from 'antd-mobile';
const fetch = setFetch(false)         // 设置是否Mock请求
const hasError:string[] = [];


async function httpRequest(url:string, dataObj:object, callback:()=>void, need:boolean = true, type:string = 'post'){
    const serve = type === 'post' ? fetch.post : fetch.get
    const { data } = await serve(url, dataObj)

    if ( data.code === 10000  || data.code === 0) {
        if(typeof callback === 'function') {
            callback.call(null, data.data)
        } 
    } else {
        if(!hasError.length){
            Toast.info('出现异常啦！',1)
        }
        if(need){
            hasError.push(data)
        }
    }
    return Promise.resolve(data.data)
}

// /**
//  * 滚动加载数据（分治解决不分页加载列表卡顿问题）
//  * 
//  * @param {object} opts 参数 {el, startCount}
//  * @param {Function} callback 
//  */
// function scrollLoading (opts, callback, storeInstance) {
//     let  count = opts.startCount,
//         $el = opts.el
//         handleScroll($el,e => {
//             let st = $el.scrollTop, sh = $el.scrollHeight, ch = $el.clientHeight
//             if ( Math.round(st) >= Math.round(sh - ch)) {
//                 count ++
//                 typeof callback === 'function' && callback.call(storeInstance, count )
//             }
//         })
// }

// function handleScroll(el,callback){
//     var timeoutRef;
//     el.addEventListener('scroll' , function(){
//         if(timeoutRef){
//             clearTimeout(timeoutRef);
//         }
//         timeoutRef = setTimeout(callback , 50);
//     })
    
// }


// /**
//  *获取指定index的树节点
//  *
//  * @param {Array} data 数据
//  * @param {string} index 下标
//  * @param {string} dot 分割符
//  */
// function getTreeNodeByIndex(data, index, childKey = 'childList', dot = '-') {
//     let indexArr = index.split(dot), i = 0,
//         curData
//     while (i < indexArr.length) {
//         curData =  i === 0 ?  data[indexArr[i]] : curData[childKey][indexArr[i]]
//         i++
//     }
//     return curData
// }


function splitArrForTargetNum (arr:any[], num:number) {
    const a = []
    for(let i = 0 ; i < Math.ceil(arr.length/num); ++ i) {
        a.push(arr.slice(i * num, (i+1)*num))
    }
    return a
}


// function getKeyValue(data:object,key:string,keyVal:'string',name:strng){
//     for (let [index, item] of data.entries()) {
//         if(item[key] === keyVal) return item[name]
//     }
//     return ''
// }

// 判断history用于返回或关闭页面   type:1-刷新页面
function isBack (type:number) {
    if (history.length > 1) {
        history.back()
    } else {
        const p = window.opener || window.parent || window.top;
        if (type && p) {
        p.location.reload();
        }
        window.close();
    }
}

/* 跳转新开页 */
function newPage(url:string,param:object) {
    const result:string[] = []
    Object.keys(param).forEach(o=>{
        result.push(`${o}=${[o]}`)
    })
    window.open(`${url}` + result.join('&'), '_blank');
}

export {
    httpRequest,
    splitArrForTargetNum,
    isBack,
    newPage
}