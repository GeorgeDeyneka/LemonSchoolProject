import axios from 'axios'

// create an axios instance

const service = axios.create({
    baseURL: "http://localhost:3040",
    // timeout: 5000,
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
})


// request interceptor
service.interceptors.request.use(
    (config) => {
        if (localStorage.getItem('token')) {
           config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        }
        return config
    },
    // error => {
    //     // do something with request error
    //     console.log(error) // for debug
    //     return Promise.reject(error)
    // }
)

// response interceptor
service.interceptors.response.use(
    response => {
        return response.data
    }
)

export default service
