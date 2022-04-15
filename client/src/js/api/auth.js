import service from './request.js'


export function auth(data){
    return service({
        method: "POST",
        url: '/auth',
        data
    })
}
