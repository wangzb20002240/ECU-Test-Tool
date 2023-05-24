import myAxios from '@/api/request'

/**
 * 测试地址
 */
export function requestUrl(data) {
    return myAxios({
        url: `/switch`,
        data,
        method: 'post',
    })
}

/**
 * 测试搜索
 */
export function requestSearch(data) {
    return myAxios({
        url: `/search`,
        data,
        method: 'post',
    })
}

/**
 * 测试播放
 */
export function requestPlay(data) {
    return myAxios({
        url: `/play`,
        data,
        method: 'post',
    })
}

/**
 * 测试登录播放
 */
export function requestLoginAndPlay(data) {
    return myAxios({
        url: `/test1`,
        data,
        method: 'post',
    })
}

/**
 * 测试历史记录
 */
export function requestHistory(data) {
    return myAxios({
        url: `/test2`,
        data,
        method: 'post',
    })
}

/**
 * 测试登录播放
 */
export function requestLikeAndCoins(data) {
    return myAxios({
        url: `/test3`,
        data,
        method: 'post',
    })
}

/**
 * 测试多关键字
 */
export function requestKeys(data) {
    return myAxios({
        url: `/testWithData`,
        data,
        method: 'post',
    })
}
